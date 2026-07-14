'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Clock3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/TradingSessionsBannerTranslations'

const DAY_MS = 24 * 60 * 60 * 1000

const sessions = [
  {
    id: 'sydney',
    translationKey: 'sydney',
    timezone: 'Australia/Sydney',
    openHour: 8,
    closeHour: 17,
    color: 'from-[#22d3ee] via-[#0f7490] to-[#7102ba]'
  },
  {
    id: 'tokyo',
    translationKey: 'tokyo',
    timezone: 'Asia/Tokyo',
    openHour: 9,
    closeHour: 18,
    color: 'from-[#a78bfa] via-[#7102ba] to-[#3c0660]'
  },
  {
    id: 'london',
    translationKey: 'london',
    timezone: 'Europe/London',
    openHour: 8,
    closeHour: 17,
    color: 'from-[#34d399] via-[#0f7490] to-[#24537f]'
  },
  {
    id: 'new-york',
    translationKey: 'newYork',
    timezone: 'America/New_York',
    openHour: 8,
    closeHour: 17,
    color: 'from-[#d946ef] via-[#9008D5] to-[#7102ba]'
  }
]

function getHourLabels(t) {
  return Array.from({ length: 25 }, (_, hour) => {
    const normalizedHour = hour === 24 ? 0 : hour
    const displayHour = normalizedHour % 12 || 12
    const suffix = normalizedHour < 12 ? t.am : t.pm

    return `${displayHour}${hour % 3 === 0 ? ` ${suffix}` : ''}`
  })
}

function getTimeZone() {
  if (typeof Intl === 'undefined') return 'UTC'
  return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
}

function getDateTimeParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(date)

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    hour: Number(values.hour),
    minute: Number(values.minute),
    second: Number(values.second)
  }
}

function getTimeZoneOffset(date, timeZone) {
  const parts = getDateTimeParts(date, timeZone)
  const asUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second
  )

  return asUtc - date.getTime()
}

function zonedTimeToUtc({ year, month, day, hour, minute = 0, second = 0 }, timeZone) {
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, second)
  let date = new Date(utcGuess)

  for (let index = 0; index < 3; index += 1) {
    date = new Date(utcGuess - getTimeZoneOffset(date, timeZone))
  }

  return date
}

function addDays({ year, month, day }, days) {
  const date = new Date(Date.UTC(year, month - 1, day + days))

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate()
  }
}

function formatMarketTime(date, timeZone, locale) {
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  }).format(date)
}

function minutesSinceLocalMidnight(date) {
  return date.getHours() * 60 + date.getMinutes() + date.getSeconds() / 60
}

function getVisibleSegments(now) {
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const dayEnd = new Date(dayStart.getTime() + DAY_MS)

  return sessions.map((session) => {
    const marketDateAtUserMidnight = getDateTimeParts(dayStart, session.timezone)
    const candidateDates = [-1, 0, 1, 2].map((offset) =>
      addDays(marketDateAtUserMidnight, offset)
    )

    const segments = candidateDates
      .map((marketDate) => {
        const open = zonedTimeToUtc(
          { ...marketDate, hour: session.openHour },
          session.timezone
        )
        const closeDate =
          session.closeHour <= session.openHour ? addDays(marketDate, 1) : marketDate
        const close = zonedTimeToUtc(
          { ...closeDate, hour: session.closeHour },
          session.timezone
        )

        const visibleStart = new Date(Math.max(open.getTime(), dayStart.getTime()))
        const visibleEnd = new Date(Math.min(close.getTime(), dayEnd.getTime()))

        if (visibleEnd <= dayStart || visibleStart >= dayEnd || visibleEnd <= visibleStart) {
          return null
        }

        return {
          left: ((visibleStart.getTime() - dayStart.getTime()) / DAY_MS) * 100,
          width: ((visibleEnd.getTime() - visibleStart.getTime()) / DAY_MS) * 100,
          isOpen: now >= open && now < close
        }
      })
      .filter(Boolean)

    return {
      ...session,
      segments,
      isOpen: segments.some((segment) => segment.isOpen)
    }
  })
}

export default function TradingSessionsBanner() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const isArabic = language === 'ar'
  const locale = isArabic ? 'ar' : 'en-US'
  const [now, setNow] = useState(null)
  const [userTimeZone, setUserTimeZone] = useState('UTC')
  const timelineScrollRef = useRef(null)
  const hasAutoScrolledRef = useRef(false)
  const displayNow = now || new Date(0)
  const isReady = Boolean(now)

  useEffect(() => {
    setUserTimeZone(getTimeZone())
    setNow(new Date())
  }, [])

  useEffect(() => {
    let timerId

    function scheduleNextMinute() {
      const current = new Date()
      const delay = 60000 - (current.getSeconds() * 1000 + current.getMilliseconds())

      timerId = window.setTimeout(() => {
        setNow(new Date())
        scheduleNextMinute()
      }, delay)
    }

    scheduleNextMinute()

    return () => window.clearTimeout(timerId)
  }, [])

  const sessionRows = useMemo(
    () =>
      isReady
        ? getVisibleSegments(displayNow)
        : sessions.map((session) => ({ ...session, segments: [], isOpen: false })),
    [displayNow, isReady]
  )
  const currentPosition = isReady ? (minutesSinceLocalMidnight(displayNow) / (24 * 60)) * 100 : 0
  const markerLabelPosition = Math.min(94, Math.max(6, currentPosition))
  const userTimeLabel = useMemo(
    () => {
      if (!isReady) return '--:--'

      return new Intl.DateTimeFormat(locale, {
        timeZone: userTimeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
      }).format(displayNow)
    },
    [displayNow, isReady, locale, userTimeZone]
  )
  const hourLabels = useMemo(() => getHourLabels(t), [t])

  useEffect(() => {
    const timelineScroll = timelineScrollRef.current

    if (!isReady || !timelineScroll || hasAutoScrolledRef.current) return
    if (window.matchMedia('(min-width: 768px)').matches) return
    if (timelineScroll.scrollWidth <= timelineScroll.clientWidth) return

    const labelColumnWidth = 112
    const timelineWidth = 640 - labelColumnWidth
    const currentTimeX = labelColumnWidth + (timelineWidth * currentPosition) / 100

    timelineScroll.scrollLeft = Math.max(
      0,
      currentTimeX - timelineScroll.clientWidth / 2
    )
    hasAutoScrolledRef.current = true
  }, [currentPosition, isReady])

  return (
    <section className='w-full bg-white py-10 md:py-14' dir={isArabic ? 'rtl' : 'ltr'}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='overflow-hidden rounded-[28px] bg-gradient-to-br from-[#180248] via-[#26034f] to-[#3c0660] shadow-[0_24px_70px_rgba(24,2,72,0.24)]'
        >
          <div className='grid gap-6 px-5 py-6 md:grid-cols-[0.9fr_1.5fr] md:px-8 md:py-8 lg:px-10'>
            <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
              <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-cyan-100 shadow-sm'>
                <Clock3 className='h-4 w-4' aria-hidden='true' />
                <span>{t.eyebrow}</span>
              </div>
              <h2 className={`banner-heading-gradient text-2xl font-extrabold md:text-3xl ${isArabic ? 'py-3 leading-relaxed' : 'leading-tight'}`}>
                {t.title}
              </h2>
              <p className='mt-3 max-w-md text-sm leading-relaxed text-white/72 md:text-base'>
                {t.subtitle}
              </p>
            </div>

            <div className='min-w-0'>
              <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
                {sessionRows.map((session) => (
                  <div key={session.id} className='rounded-2xl border border-white/10 bg-white/8 px-4 py-3 shadow-sm'>
                    <div className='flex items-center justify-between gap-2'>
                      <p className='truncate text-sm font-extrabold text-white'>
                        {t.sessions[session.translationKey].name}
                      </p>
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                          session.isOpen ? 'bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]' : 'bg-white/25'
                        }`}
                      />
                    </div>
                    <p className='mt-1 text-xs font-semibold text-white/55'>
                      {session.isOpen ? t.open : t.closed}
                    </p>
                    <p className='mt-2 text-sm font-bold text-cyan-100'>
                      {isReady ? formatMarketTime(displayNow, session.timezone, locale) : '--:--'}
                    </p>
                  </div>
                ))}
              </div>
              <div className='mt-3 grid grid-cols-2 gap-3'>
                <div className='rounded-2xl border border-white/10 bg-white/8 px-4 py-3 shadow-sm'>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.1em] text-white/45'>
                    {t.yourTimezone}
                  </p>
                  <p className='mt-1 truncate text-sm font-bold text-white' title={userTimeZone}>
                    {userTimeZone}
                  </p>
                </div>
                <div className='rounded-2xl border border-cyan-200/25 bg-cyan-200/12 px-4 py-3 shadow-sm'>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-100/65'>
                    {t.currentTime}
                  </p>
                  <p className='mt-1 text-sm font-bold text-white'>{userTimeLabel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t border-white/10 bg-[#100132]/72 px-0 py-5 md:px-6 md:py-6'>
            <div ref={timelineScrollRef} className='overflow-x-auto px-4 pb-1 md:overflow-x-visible md:px-0'>
              <div className='min-w-[640px] md:min-w-0'>
                <div className='grid grid-cols-[104px_1fr] items-end gap-2 md:grid-cols-[112px_1fr] md:gap-3'>
                  <div className='pb-2 text-xs font-bold uppercase tracking-[0.1em] text-white/45'>
                    {t.localTime}
                  </div>
                  <div className='relative h-12'>
                    <div
                      className='absolute top-0 z-30 -translate-x-1/2 rounded-full border border-cyan-200/35 bg-[#180248] px-3 py-1 text-[11px] font-extrabold text-white shadow-[0_0_22px_rgba(103,232,249,0.24)]'
                      style={{ left: `${markerLabelPosition}%` }}
                    >
                      {userTimeLabel}
                    </div>
                    <div className='absolute inset-x-0 bottom-0 h-px bg-white/15' />
                    <div
                      className='absolute bottom-0 top-7 z-20 w-px bg-cyan-200'
                      style={{ left: `${currentPosition}%` }}
                    />
                    <div
                      className='absolute bottom-[-5px] z-20 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#180248] bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.75)]'
                      style={{ left: `${currentPosition}%` }}
                    />
                    {hourLabels.map((hour, index) => (
                      <div
                        key={`${hour}-${index}`}
                        className={`absolute bottom-0 flex flex-col items-center gap-1 ${
                          index === 0
                            ? 'translate-x-0'
                            : index === hourLabels.length - 1
                              ? '-translate-x-full'
                              : '-translate-x-1/2'
                        }`}
                        style={{ left: `${(index / 24) * 100}%` }}
                      >
                        <span className='h-2 w-px bg-white/20' />
                        <span className='text-[10px] font-semibold text-white/50'>{hour}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='relative mt-3 space-y-3'>
                  {sessionRows.map((session) => (
                    <div key={session.id} className='grid grid-cols-[104px_1fr] items-center gap-2 md:grid-cols-[112px_1fr] md:gap-3'>
                      <div className='text-sm font-bold text-white/88'>
                        {t.sessions[session.translationKey].label}
                      </div>
                      <div className='relative h-11 overflow-hidden rounded-xl bg-gradient-to-r from-white/14 via-white/9 to-white/14 ring-1 ring-cyan-100/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'>
                        <div
                          className='absolute inset-0 grid'
                          style={{ gridTemplateColumns: 'repeat(24, minmax(0, 1fr))' }}
                        >
                          {Array.from({ length: 24 }, (_, index) => (
                            <span
                              key={index}
                              className={`border-r last:border-r-0 ${
                                index % 3 === 2 ? 'border-cyan-100/20' : 'border-white/10'
                              }`}
                            />
                          ))}
                        </div>
                        <div
                          className='absolute bottom-0 top-0 z-20 w-px bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.8)]'
                          style={{ left: `${currentPosition}%` }}
                        />
                        {session.segments.map((segment, index) => (
                          <div
                            key={`${session.id}-${index}`}
                            className={`absolute top-1/2 h-7 -translate-y-1/2 rounded-lg bg-gradient-to-r ${session.color} shadow-[0_8px_24px_rgba(0,0,0,0.32),0_0_18px_rgba(113,2,186,0.22)] ${
                              segment.isOpen ? 'opacity-100 ring-2 ring-cyan-100' : 'opacity-90'
                            }`}
                            style={{ left: `${segment.left}%`, width: `${segment.width}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

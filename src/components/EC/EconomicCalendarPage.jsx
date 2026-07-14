'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import translations from '@/translations/EC/EconomicCalendarTranslations';

const CALENDAR_JSON_PATH = '/data/economic-calendar-feb-2026.json';

function dateToISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getMonthOptions() {
  return Array.from({ length: 12 }, (_, index) => index);
}

export default function EconomicCalendarPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const locale = language === 'ar' ? 'ar' : 'en-US';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadCalendarData() {
      try {
        setLoading(true);
        setLoadError('');
        const response = await fetch(CALENDAR_JSON_PATH);

        if (!response.ok) {
          throw new Error(`Failed to load: ${response.status}`);
        }

        const json = await response.json();
        if (!isMounted) return;

        setData(json);

        const today = new Date();
        setSelectedYear(today.getFullYear());
        setSelectedMonth(today.getMonth());
        setSelectedDate(dateToISO(today));
      } catch (error) {
        if (!isMounted) return;
        setLoadError(error.message || 'Load error');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadCalendarData();

    return () => {
      isMounted = false;
    };
  }, []);

  const allEvents = useMemo(() => {
    if (!data?.weeks) return [];

    return data.weeks
      .flatMap((week) =>
        (week.events || []).map((event, eventIndex) => ({
          ...event,
          eventIndex,
          weekId: week.id,
          weekTitle: week.title,
          weekStart: week.range?.start,
          weekEnd: week.range?.end
        }))
      )
      .sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return a.eventIndex - b.eventIndex;
      });
  }, [data]);

  const availableYears = useMemo(() => {
    return Array.from({ length: 11 }, (_, index) => 2026 + index);
  }, []);

  const monthOptions = useMemo(() => getMonthOptions(), []);

  useEffect(() => {
    if (selectedYear != null || !availableYears.length) return;
    setSelectedYear(availableYears[0]);
  }, [availableYears, selectedYear]);

  useEffect(() => {
    if (selectedMonth != null) return;
    setSelectedMonth(0);
  }, [selectedMonth]);

  useEffect(() => {
    if (selectedYear == null || selectedMonth == null) return;

    const isSelectedDateInView =
      selectedDate &&
      Number(selectedDate.slice(0, 4)) === selectedYear &&
      Number(selectedDate.slice(5, 7)) - 1 === selectedMonth;

    if (isSelectedDateInView) return;

    const firstDateWithEvents = allEvents.find((event) => {
      const year = Number(event.date.slice(0, 4));
      const month = Number(event.date.slice(5, 7)) - 1;
      return year === selectedYear && month === selectedMonth;
    });

    if (firstDateWithEvents) {
      setSelectedDate(firstDateWithEvents.date);
      return;
    }

    setSelectedDate(dateToISO(new Date(selectedYear, selectedMonth, 1)));
  }, [allEvents, selectedYear, selectedMonth, selectedDate]);

  const eventsForSelectedDate = useMemo(() => {
    if (!selectedDate) return [];
    return allEvents.filter((event) => event.date === selectedDate);
  }, [allEvents, selectedDate]);

  const eventsForSelectedMonth = useMemo(() => {
    if (selectedYear == null || selectedMonth == null) return [];

    return allEvents.filter((event) => {
      const year = Number(event.date.slice(0, 4));
      const month = Number(event.date.slice(5, 7)) - 1;
      return year === selectedYear && month === selectedMonth;
    });
  }, [allEvents, selectedYear, selectedMonth]);

  const monthDate = useMemo(() => {
    if (selectedYear == null || selectedMonth == null) return null;
    return new Date(selectedYear, selectedMonth, 1);
  }, [selectedYear, selectedMonth]);

  const monthLabel = monthDate
    ? new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(monthDate)
    : '';

  const selectedDateLabel = selectedDate
    ? new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(new Date(`${selectedDate}T00:00:00`))
    : '';

  const weekdayLabels = useMemo(() => {
    const base = new Date(2026, 1, 1);
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(base);
      date.setDate(base.getDate() + i);
      return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
    });
  }, [locale]);

  const monthGrid = useMemo(() => {
    if (selectedYear == null || selectedMonth == null) return [];

    const first = new Date(selectedYear, selectedMonth, 1);
    const offset = first.getDay();
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

    const cells = [];
    for (let i = 0; i < offset; i += 1) {
      cells.push(null);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push(day);
    }

    while (cells.length % 7 !== 0) {
      cells.push(null);
    }

    return cells;
  }, [selectedYear, selectedMonth]);

  const eventDateSet = useMemo(() => new Set(allEvents.map((event) => event.date)), [allEvents]);

  const selectedWeekRange = eventsForSelectedDate[0]
    ? `${new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${eventsForSelectedDate[0].weekStart}T00:00:00`))} - ${new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${eventsForSelectedDate[0].weekEnd}T00:00:00`))}`
    : '';

  const selectedWeek = useMemo(() => {
    if (!data?.weeks?.length || !eventsForSelectedDate[0]?.weekId) return null;
    return data.weeks.find((week) => week.id === eventsForSelectedDate[0].weekId) || null;
  }, [data, eventsForSelectedDate]);

  const selectedWeekCaption = selectedWeek?.caption?.[language] || selectedWeek?.caption?.en || [];
  const selectedWeekDisclaimer = selectedWeek?.disclaimer?.[language] || selectedWeek?.disclaimer?.en || '';
  const selectedWeekHashtags = selectedWeek?.hashtags?.[language] || selectedWeek?.hashtags?.en || '';

  if (loading) {
    return (
      <section
        className="min-h-screen bg-[url('/homepage/Homepage-02.webp')] bg-cover bg-center bg-no-repeat px-4 py-32 text-center"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <p className="text-lg font-semibold text-[#0a0a3a]">{t.loading}</p>
      </section>
    );
  }

  if (loadError) {
    return (
      <section
        className="min-h-screen bg-[url('/homepage/Homepage-02.webp')] bg-cover bg-center bg-no-repeat px-4 py-32 text-center"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <p className="text-lg font-semibold text-red-700">{t.loadError}</p>
        <p className="mt-2 text-sm text-[#0a0a3a]/80">{loadError}</p>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen bg-[url('/homepage/Homepage-02.webp')] bg-cover bg-center bg-no-repeat px-4 pb-16 pt-28 sm:px-6 lg:px-8"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 rounded-3xl bg-white/80 px-5 py-7 shadow-2xl sm:px-6 sm:py-8">
          <h1 className={`text-2xl font-extrabold md:text-4xl heading-gradient ${language === 'ar' ? 'py-2' : ''}`}>
            {t.pageTitle}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[#0a0a3a]/80 md:text-base">{t.pageSubtitle}</p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-5">
          <aside className="rounded-3xl border border-[#0a0a3a]/10 bg-white/85 p-4 shadow-xl backdrop-blur-sm sm:p-5 lg:col-span-2">
            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-[#0a0a3a]">
                <span className="font-semibold">{t.selectYear}</span>
                <select
                  className="rounded-xl border border-[#0a0a3a]/20 bg-white px-3 py-2 text-sm font-medium text-[#0a0a3a] outline-none ring-[#0f52ba]/35 transition focus:ring-2"
                  value={selectedYear ?? ''}
                  onChange={(event) => setSelectedYear(Number(event.target.value))}
                >
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm text-[#0a0a3a]">
                <span className="font-semibold">{t.selectMonth}</span>
                <select
                  className="rounded-xl border border-[#0a0a3a]/20 bg-white px-3 py-2 text-sm font-medium text-[#0a0a3a] outline-none ring-[#0f52ba]/35 transition focus:ring-2"
                  value={selectedMonth ?? ''}
                  onChange={(event) => setSelectedMonth(Number(event.target.value))}
                >
                  {monthOptions.map((month) => (
                    <option key={month} value={month}>
                      {new Intl.DateTimeFormat(locale, { month: 'long' }).format(new Date(2026, month, 1))}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold text-[#0a0a3a]">{monthLabel}</h2>
              <p className="rounded-full bg-[#0f52ba]/10 px-2.5 py-1 text-xs text-[#0a0a3a]/80">
                <span className="font-semibold">{t.timezone}:</span> {data?.timezone}
              </p>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#0a0a3a]/65">
              {weekdayLabels.map((label) => (
                <div key={label} className="py-2">
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1">
              {monthGrid.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="h-9 rounded-lg sm:h-10" />;
                }

                const date = new Date(selectedYear, selectedMonth, day);
                const iso = dateToISO(date);
                const hasEvents = eventDateSet.has(iso);
                const isSelected = iso === selectedDate;

                return (
                  <button
                    key={iso}
                    type="button"
                    onClick={() => setSelectedDate(iso)}
                    className={`relative h-9 rounded-lg text-sm font-semibold transition sm:h-10 ${
                      isSelected
                        ? 'bg-[#0a0a3a] text-white shadow-lg'
                        : hasEvents
                        ? 'bg-[#0f52ba]/12 text-[#0a0a3a] hover:bg-[#0f52ba]/20'
                        : 'bg-transparent text-[#0a0a3a]/45 hover:bg-[#0a0a3a]/5'
                    }`}
                  >
                    {day}
                    {hasEvents && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#0f52ba]" />
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          <main className="rounded-3xl border border-[#0a0a3a]/10 bg-white/85 p-4 shadow-xl backdrop-blur-sm sm:p-5 lg:col-span-3">
            <div className="mb-4 border-b border-[#0a0a3a]/10 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-extrabold text-[#0a0a3a] sm:text-xl">
                  {t.eventsFor} {selectedDateLabel}
                </h2>
                <span className="rounded-full bg-[#0f52ba]/12 px-3 py-1 text-xs font-semibold text-[#0a0a3a]">
                  {eventsForSelectedDate.length}
                </span>
              </div>

              <p className="mt-1 text-xs text-[#0a0a3a]/70">
                {eventsForSelectedDate.length ? `${t.weeklyLabel}: ${selectedWeekRange}` : t.noEventsForDate}
              </p>
              <p className="mt-1 text-xs text-[#0a0a3a]/70">
                {eventsForSelectedMonth.length ? `${eventsForSelectedMonth.length} ${t.eventLabel}` : t.noEventsForMonth}
              </p>
              <p className="mt-1 text-xs font-medium text-[#0a0a3a]/70">
                {t.allTimesIn} {data?.timezone}
              </p>
            </div>

            {!eventsForSelectedDate.length ? (
              <div className="rounded-2xl border border-dashed border-[#0a0a3a]/20 bg-[#eff6ff] p-8 text-center text-sm text-[#0a0a3a]/75">
                {t.noEventsForDate}
              </div>
            ) : (
              <div className="space-y-3 lg:max-h-[62vh] lg:overflow-y-auto lg:pr-1">
                {eventsForSelectedDate.map((event, index) => (
                  <article
                    key={`${event.date}-${event.time}-${event.currency}-${index}`}
                    className="rounded-2xl border border-[#0a0a3a]/10 bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="inline-flex items-center gap-2">
                        <span className="rounded-full bg-[#0a0a3a] px-3 py-1 text-xs font-bold tracking-wide text-white">
                          {event.currency}
                        </span>
                        <span className="text-sm font-semibold text-[#0a0a3a]">
                          {event.time} {data?.timezone}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-[#0a0a3a] sm:text-base">
                      {event.title?.[language] || event.title?.en}
                    </p>
                    {(event.forecast || event.previous) && (
                      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs sm:max-w-xs">
                        <div className="rounded-xl bg-[#0f52ba]/8 px-3 py-2">
                          <dt className="font-semibold text-[#0a0a3a]/65">{t.forecastLabel}</dt>
                          <dd className="mt-0.5 font-bold text-[#0a0a3a]">{event.forecast || '-'}</dd>
                        </div>
                        <div className="rounded-xl bg-[#0a0a3a]/6 px-3 py-2">
                          <dt className="font-semibold text-[#0a0a3a]/65">{t.previousLabel}</dt>
                          <dd className="mt-0.5 font-bold text-[#0a0a3a]">{event.previous || '-'}</dd>
                        </div>
                      </dl>
                    )}
                  </article>
                ))}
              </div>
            )}

            {(selectedWeekCaption.length > 0 || selectedWeekDisclaimer || selectedWeekHashtags) && (
              <div className="mt-4 rounded-2xl border border-[#0a0a3a]/10 bg-[#eff6ff] p-4 text-xs text-[#0a0a3a]/75 sm:text-sm">
                {selectedWeekCaption.map((caption) => (
                  <p key={caption} className="font-medium">
                    {caption}
                  </p>
                ))}
                {selectedWeekDisclaimer && (
                  <p className="mt-2">
                    <span className="font-semibold">{t.disclaimerLabel}:</span> {selectedWeekDisclaimer}
                  </p>
                )}
                {selectedWeekHashtags && (
                  <p className="mt-2 break-words font-semibold text-[#0f52ba]">{selectedWeekHashtags}</p>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

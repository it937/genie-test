'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Select, { components } from 'react-select'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ChevronDown,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Calculator/CalculatorTranslations'
import {
  FOREX_INSTRUMENTS,
  PLATFORM_FACTORS,
  USD_CONVERSION_RATES,
} from './calculatorData'

const TAB_ORDER = ['pnl', 'lotSize', 'margin']
const ACCOUNT_BALANCE_OPTIONS = ['6000', '15000', '25000', '50000', '100000', '200000', '300000']

const initialForms = {
  pnl: {
    instrument: '',
    tradeType: '',
    entryPrice: '',
    exitPrice: '',
    lotSize: '',
  },
  lotSize: {
    instrument: '',
    accountBalance: '',
    riskPercentage: '',
    entryPrice: '',
    exitPrice: '',
  },
  swap: {
    platform: '',
    instrument: '',
    tradeType: '',
    lotSize: '',
    from: '',
    to: '',
  },
  margin: {
    leverage: '',
    accountBalance: '',
    instrument: '',
    exchangeRateUsd: '',
    lotSize: '',
  },
}

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ChevronDown size={16} className="text-[#8e7cb9]" />
  </components.DropdownIndicator>
)

const toNumber = (value) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : NaN
}

const formatLocalDateInput = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const getUsdRateForQuote = (instrument) => USD_CONVERSION_RATES[instrument?.quote] || 1

const isForexInstrument = (instrument) =>
  Boolean(USD_CONVERSION_RATES[instrument?.base] && USD_CONVERSION_RATES[instrument?.quote] && instrument?.symbol?.length === 6)

const getForexBaseToUsdRate = (instrument, marketPrice) => {
  if (instrument.base === 'USD') return 1
  if (instrument.quote === 'USD') return marketPrice
  return marketPrice * getUsdRateForQuote(instrument)
}

const getMarginNotionalValue = (instrument, lotSize, marketPrice) => {
  if (isForexInstrument(instrument)) {
    return instrument.contractSize * lotSize * getForexBaseToUsdRate(instrument, marketPrice)
  }

  return instrument.contractSize * lotSize * marketPrice * getUsdRateForQuote(instrument)
}

const formatMoney = (value, language) =>
  new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0)

const formatNumber = (value, language, digits = 2) =>
  new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0)

const countSwapNights = (fromValue, toValue) => {
  if (!fromValue || !toValue) return 0

  const from = new Date(`${fromValue}T00:00:00`)
  const to = new Date(`${toValue}T00:00:00`)

  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime()) || to <= from) return 0

  let cursor = new Date(from)
  let total = 0

  while (cursor < to) {
    cursor.setDate(cursor.getDate() + 1)
    total += cursor.getDay() === 3 ? 3 : 1
  }

  return total
}

const getSwapPoints = (platform, instrumentKey, tradeType) => {
  const instrument = FOREX_INSTRUMENTS[instrumentKey]
  if (!instrument) return 0
  const factor = PLATFORM_FACTORS[platform] || 1
  return instrument.baseSwap[tradeType] * factor
}

const buildSelectStyles = (isArabic) => ({
  control: (base, state) => ({
    ...base,
    minHeight: '56px',
    borderRadius: '18px',
    borderColor: state.isFocused ? '#7c3aed' : '#ebe6f7',
    boxShadow: state.isFocused ? '0 0 0 4px rgba(124, 58, 237, 0.08)' : 'none',
    backgroundColor: '#ffffff',
    paddingInline: 8,
    direction: isArabic ? 'rtl' : 'ltr',
    '&:hover': { borderColor: '#d9d0ef' },
  }),
  valueContainer: (base) => ({
    ...base,
    paddingInline: 6,
  }),
  placeholder: (base) => ({
    ...base,
    color: '#9b94ae',
    fontWeight: 500,
  }),
  singleValue: (base) => ({
    ...base,
    color: '#17033d',
    fontWeight: 700,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  menu: (base) => ({
    ...base,
    borderRadius: '18px',
    padding: 6,
    overflow: 'hidden',
    boxShadow: '0 20px 45px rgba(24, 2, 72, 0.14)',
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: '14px',
    backgroundColor: state.isSelected ? '#ede7ff' : state.isFocused ? '#f7f3ff' : '#fff',
    color: '#180248',
    fontWeight: state.isSelected ? 700 : 500,
    cursor: 'pointer',
  }),
})

const Field = ({ label, hint, children, language }) => (
  <div className="grid gap-3 md:grid-cols-[minmax(0,220px)_1fr] md:items-center">
    <div className={`flex items-center gap-2 text-[15px] font-extrabold text-[#180248] md:text-lg ${language === 'ar' ? 'md:justify-end' : ''}`}>
      <span>{label}</span>
      {hint ? (
        <span title={hint} className="text-[#b0a7c8]">
          <CircleHelp size={15} />
        </span>
      ) : null}
    </div>
    {children}
  </div>
)

const ResultMetric = ({ label, value, emphasis = false }) => (
  <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/65 px-4 py-3">
    <span className="text-sm font-semibold text-[#665b87]">{label}</span>
    <span className={`text-sm font-extrabold ${emphasis ? 'text-[#5b10bd]' : 'text-[#180248]'}`}>{value}</span>
  </div>
)

const ValidationMessage = ({ message }) => (
  <div className="mt-4 rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold text-[#b91c1c]">
    {message}
  </div>
)

const CalendarRangePicker = ({
  value,
  onChange,
  language,
  t,
}) => {
  const isArabic = language === 'ar'
  const locale = isArabic ? 'ar-EG' : 'en-US'
  const [open, setOpen] = useState(false)
  const [viewDate, setViewDate] = useState(() => new Date())
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const fromDate = value.from ? new Date(`${value.from}T00:00:00`) : null
  const toDate = value.to ? new Date(`${value.to}T00:00:00`) : null

  const monthLabel = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(viewDate)

  const days = useMemo(() => {
    const start = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1)
    const end = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0)
    const prefix = start.getDay()
    const items = []

    for (let index = 0; index < prefix; index += 1) {
      items.push(null)
    }

    for (let day = 1; day <= end.getDate(); day += 1) {
      items.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), day))
    }

    return items
  }, [viewDate])

  const nights = countSwapNights(value.from, value.to)

  const displayValue = value.from && value.to
    ? `${new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' }).format(fromDate)} - ${new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' }).format(toDate)}`
    : t.placeholders.selectDates

  const isSameDay = (left, right) =>
    left && right &&
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()

  const isBetween = (day) => {
    if (!fromDate || !toDate || !day) return false
    return day > fromDate && day < toDate
  }

  const handleDayClick = (day) => {
    if (!day) return
    const isoValue = formatLocalDateInput(day)

    if (!value.from || (value.from && value.to)) {
      onChange({ from: isoValue, to: '' })
      return
    }

    if (new Date(`${isoValue}T00:00:00`) < new Date(`${value.from}T00:00:00`)) {
      onChange({ from: isoValue, to: value.from })
      return
    }

    onChange({ from: value.from, to: isoValue })
  }

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-14 w-full items-center justify-between rounded-[18px] border border-[#ebe6f7] bg-white px-4 py-3 text-left shadow-[0_10px_30px_rgba(24,2,72,0.05)] transition hover:border-[#d9d0ef]"
      >
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#f4efff] p-2 text-[#6b21c8]">
            <CalendarDays size={16} />
          </span>
          <div>
            <div className="text-sm font-bold text-[#180248]">{displayValue}</div>
            <div className="text-xs text-[#8f87a5]">
              {nights > 0 ? `${formatNumber(nights, language, 0)} ${t.calendar.nights}` : t.calendar.pickRange}
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={`absolute z-30 mt-3 w-full min-w-[300px] rounded-[24px] border border-white/70 bg-white p-4 shadow-[0_24px_60px_rgba(24,2,72,0.18)] ${isArabic ? 'right-0' : 'left-0'}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setViewDate((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))}
                className="rounded-full border border-[#eee8f8] p-2 text-[#180248] transition hover:bg-[#f8f4ff]"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="text-sm font-extrabold text-[#180248]">{monthLabel}</div>
              <button
                type="button"
                onClick={() => setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))}
                className="rounded-full border border-[#eee8f8] p-2 text-[#180248] transition hover:bg-[#f8f4ff]"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="mb-3 grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#9b92b3]">
              {t.calendar.weekdays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (!day) {
                  return <div key={`blank-${index}`} className="h-10" />
                }

                const isStart = isSameDay(day, fromDate)
                const isEnd = isSameDay(day, toDate)
                const inRange = isBetween(day)

                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => handleDayClick(day)}
                    className={`h-10 rounded-2xl text-sm font-bold transition ${
                      isStart || isEnd
                        ? 'bg-gradient-to-r from-[#180248] to-[#7b21d1] text-white shadow-[0_12px_24px_rgba(123,33,209,0.26)]'
                        : inRange
                          ? 'bg-[#efe7ff] text-[#5b10bd]'
                          : 'text-[#180248] hover:bg-[#f7f2ff]'
                    }`}
                  >
                    {new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(day)}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#faf7ff] px-4 py-3">
              <div className="text-xs text-[#7d7497]">
                {value.from || 'yyyy/mm/dd'} - {value.to || 'yyyy/mm/dd'}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-[#180248] to-[#7b21d1] px-4 py-2 text-xs font-bold text-white"
              >
                {t.buttons.applyRange}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

const CalculatorHub = ({ activeTab = 'pnl' }) => {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const isArabic = language === 'ar'
  const selectStyles = useMemo(() => buildSelectStyles(isArabic), [isArabic])

  const [forms, setForms] = useState(initialForms)
  const [results, setResults] = useState({})

  const instrumentOptions = useMemo(
    () =>
      Object.values(FOREX_INSTRUMENTS).map((instrument) => ({
        value: instrument.symbol,
        label: instrument.label,
      })),
    []
  )

  const tradeTypeOptions = [
    { value: 'buy', label: t.options.buy },
    { value: 'sell', label: t.options.sell },
  ]

  const platformOptions = [
    { value: 'mt4', label: t.options.mt4 },
    { value: 'mt5', label: t.options.mt5 },
    { value: 'ctrader', label: t.options.ctrader },
    { value: 'matchTrader', label: t.options.matchTrader },
  ]

  const leverageOptions = [
    '10', '20', '25', '50', '100', '200', '300', '400', '500',
  ].map((v) => ({ value: v, label: `1:${v}` }))

  const currentSwapPoints = useMemo(
    () => getSwapPoints(forms.swap.platform, forms.swap.instrument, forms.swap.tradeType),
    [forms.swap.instrument, forms.swap.platform, forms.swap.tradeType]
  )

  useEffect(() => {
    setResults((current) => ({
      ...current,
      swap: calculateSwap(forms.swap, language, t),
    }))
  }, [forms.swap, language, t, currentSwapPoints])

  useEffect(() => {
    const instrument = forms.margin.instrument

    if (!instrument) {
      setForms((current) => ({
        ...current,
        margin: {
          ...current.margin,
          exchangeRateUsd: '',
        },
      }))
      return undefined
    }

    const instrumentConfig = FOREX_INSTRUMENTS[instrument]

    if (!instrumentConfig) {
      return undefined
    }

    if (instrument.length !== 6) {
      setForms((current) => ({
        ...current,
        margin: {
          ...current.margin,
          exchangeRateUsd: String(instrumentConfig.referencePrice || ''),
        },
      }))
      return undefined
    }

    let ignore = false

    const loadRate = async () => {
      try {
        const response = await fetch(`/api/forex?symbol=${instrument}`)
        const data = await response.json()

        if (!ignore && !data.error && data.price) {
          setForms((current) => ({
            ...current,
            margin: {
              ...current.margin,
              exchangeRateUsd: String(data.price),
            },
          }))
        }
        if (!ignore && (data.error || !data.price)) {
          setForms((current) => ({
            ...current,
            margin: {
              ...current.margin,
              exchangeRateUsd: String(instrumentConfig.referencePrice || ''),
            },
          }))
        }
      } catch {
        if (!ignore) {
          setForms((current) => ({
            ...current,
            margin: {
              ...current.margin,
              exchangeRateUsd: String(instrumentConfig.referencePrice || ''),
            },
          }))
        }
      }
    }

    loadRate()

    return () => {
      ignore = true
    }
  }, [forms.margin.instrument])

  const handleInputChange = (tab, field, value) => {
    setForms((current) => ({
      ...current,
      [tab]: {
        ...current[tab],
        [field]: value,
      },
    }))
  }

  const handleRangeChange = (value) => {
    setForms((current) => ({
      ...current,
      swap: {
        ...current.swap,
        ...value,
      },
    }))
  }

  const resetActiveTab = () => {
    setForms((current) => ({
      ...current,
      [activeTab]: initialForms[activeTab],
    }))
    setResults((current) => ({
      ...current,
      [activeTab]: undefined,
    }))
  }

  const resetAll = () => {
    setForms(initialForms)
    setResults({})
  }

  const calculate = () => {
    const nextResult = {
      pnl: calculatePnl(forms.pnl, language, t),
      lotSize: calculateLotSize(forms.lotSize, language, t),
      swap: calculateSwap(forms.swap, language, t),
      margin: calculateMargin(forms.margin, language, t),
    }

    setResults((current) => ({
      ...current,
      [activeTab]: nextResult[activeTab],
    }))
  }

  const activeResult = results[activeTab]
  const hasCalculatedResult = Boolean(activeResult)
  const resultTone = activeTab === 'pnl'
    ? activeResult?.tone || 'neutral'
    : hasCalculatedResult
      ? 'calculated'
      : 'default'

  const resultCardClassName = resultTone === 'profit'
    ? 'bg-[linear-gradient(180deg,#f3fff8_0%,#bdf7d1_100%)] shadow-[0_22px_44px_rgba(16,185,129,0.18)] ring-1 ring-[#8de7b1]'
    : resultTone === 'loss'
      ? 'bg-[linear-gradient(180deg,#fff7f7_0%,#ffc9cf_100%)] shadow-[0_22px_44px_rgba(239,68,68,0.18)] ring-1 ring-[#ffb1bc]'
      : resultTone === 'calculated'
        ? 'bg-[linear-gradient(180deg,#fff8fd_0%,#ffd6f1_52%,#d9c2ff_100%)] shadow-[0_22px_44px_rgba(168,85,247,0.24)] ring-1 ring-[#efb7ff]'
        : 'bg-[#f2f1f6]'

  const resultTitleClassName = resultTone === 'profit'
    ? 'text-[#047857]'
    : resultTone === 'loss'
      ? 'text-[#b91c1c]'
      : resultTone === 'calculated'
        ? 'text-[#7c2bbd]'
        : 'text-[#180248]'

  const resultAmountClassName = resultTone === 'profit'
    ? 'text-[#047857]'
    : resultTone === 'loss'
      ? 'text-[#b91c1c]'
      : resultTone === 'calculated'
        ? 'text-[#5b10bd]'
        : 'text-[#180248]'

  const activeValidationMessage = activeResult?.validationMessage || ''

  return (
    <section
      className="relative z-20 -mt-[12vh] overflow-visible bg-transparent px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[50px] bg-[#f5f5f5] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[50px] bg-white px-4 py-5 shadow-[0_18px_55px_rgba(24,2,72,0.08)] sm:px-6 lg:px-8 lg:py-8"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">
              <div className="space-y-3">
                {activeTab === 'pnl' ? (
                  <PnlFields
                    form={forms.pnl}
                    onChange={handleInputChange}
                    instrumentOptions={instrumentOptions}
                    tradeTypeOptions={tradeTypeOptions}
                    t={t}
                    language={language}
                    selectStyles={selectStyles}
                  />
                ) : null}

                {activeTab === 'lotSize' ? (
                  <LotSizeFields
                    form={forms.lotSize}
                    onChange={handleInputChange}
                    instrumentOptions={instrumentOptions}
                    t={t}
                    language={language}
                    selectStyles={selectStyles}
                  />
                ) : null}

                {activeTab === 'swap' ? (
                  <SwapFields
                    form={forms.swap}
                    onChange={handleInputChange}
                    onRangeChange={handleRangeChange}
                    instrumentOptions={instrumentOptions}
                    tradeTypeOptions={tradeTypeOptions}
                    platformOptions={platformOptions}
                    t={t}
                    language={language}
                    swapPoints={currentSwapPoints}
                    selectStyles={selectStyles}
                  />
                ) : null}

                {activeTab === 'margin' ? (
                  <MarginFields
                    form={forms.margin}
                    onChange={handleInputChange}
                    instrumentOptions={instrumentOptions}
                    leverageOptions={leverageOptions}
                    t={t}
                    language={language}
                    selectStyles={selectStyles}
                  />
                ) : null}
              </div>

              <div className="flex flex-col gap-4">
                <div
                  className={`rounded-[28px] px-5 py-6 shadow-inner min-h-[300px] transition-all duration-500 ${resultCardClassName}`}
                >
                  <div className="flex flex-col text-center">
                    <div className={`text-sm font-extrabold ${resultTitleClassName}`}>
                      {activeTab === 'pnl' && activeResult?.resultLabel ? activeResult.resultLabel : t.result.title}
                    </div>
                    <div className={`mt-2 text-2xl font-black ${resultAmountClassName}`}>
                    {activeResult?.headline || (activeTab === 'lotSize' ? formatNumber(0, language) : formatMoney(0, language))}
                    </div>
                  </div>

                  {activeTab === 'swap' && activeResult?.metrics?.length ? (
                    <div className="mt-6 space-y-3">
                      {activeResult.metrics.map((metric) => (
                        <ResultMetric
                          key={metric.label}
                          label={metric.label}
                          value={metric.value}
                          emphasis={metric.emphasis}
                        />
                      ))}
                    </div>
                  ) : null}
                  {activeTab === 'swap' && !activeResult?.metrics?.length ? (
                    <div className="mt-6 space-y-3">
                      <div className="rounded-2xl bg-white/65 px-4 py-3 text-sm font-semibold text-[#665b87]">
                        {t.result.swapRate}: 0.00 {t.units.points}
                      </div>
                      <div className="rounded-2xl bg-white/65 px-4 py-3 text-sm font-semibold text-[#665b87]">
                        {t.result.swapNights}: 0
                      </div>
                    </div>
                  ) : null}
                  {activeValidationMessage ? <ValidationMessage message={activeValidationMessage} /> : null}
                </div>

                <button type="button" onClick={calculate} className="cta mx-auto w-full max-w-[180px]">
                  {t.buttons.calculate}
                </button>
                <div className="mx-auto flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={resetActiveTab}
                    className="text-sm font-bold text-[#6b21c8] transition hover:text-[#180248]"
                  >
                    {t.buttons.reset}
                  </button>
                  <button
                    type="button"
                    onClick={resetAll}
                    className="text-sm font-bold text-[#6b21c8] transition hover:text-[#180248]"
                  >
                    {t.buttons.resetAll}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SelectField = ({ options, value, onChange, placeholder, styles, searchPlaceholder }) => (
  <Select
    isSearchable
    options={options}
    value={options.find((option) => option.value === value) || null}
    onChange={(selected) => onChange(selected?.value || '')}
    placeholder={placeholder}
    filterOption={(option, inputValue) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      option.value.toLowerCase().includes(inputValue.toLowerCase())
    }
    noOptionsMessage={() => searchPlaceholder || placeholder}
    styles={styles}
    components={{ DropdownIndicator }}
  />
)

const NumberInput = ({ value, onChange, placeholder, disabled = false }) => (
  <input
    type="number"
    step="any"
    value={value}
    disabled={disabled}
    onChange={(event) => onChange(event.target.value)}
    placeholder={placeholder}
    className={`min-h-14 w-full rounded-[18px] border border-[#ebe6f7] px-4 py-3 text-base font-bold text-[#180248] shadow-[0_10px_30px_rgba(24,2,72,0.05)] outline-none transition placeholder:font-medium placeholder:text-[#a098b7] focus:border-[#7c3aed] focus:ring-4 focus:ring-[#7c3aed]/10 ${disabled ? 'bg-[#f6f4fa] text-[#82799d]' : 'bg-white'}`}
  />
)

const PnlFields = ({ form, onChange, instrumentOptions, tradeTypeOptions, t, language, selectStyles }) => (
  <>
    <Field label={t.labels.instrument} language={language}>
      <SelectField
        options={instrumentOptions}
        value={form.instrument}
        onChange={(value) => onChange('pnl', 'instrument', value)}
        placeholder={t.placeholders.selectInstrument}
        searchPlaceholder={t.placeholders.searchInstrument}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.tradeType} language={language}>
      <SelectField
        options={tradeTypeOptions}
        value={form.tradeType}
        onChange={(value) => onChange('pnl', 'tradeType', value)}
        placeholder={t.placeholders.selectTradeType}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.entryPrice} language={language}>
      <NumberInput value={form.entryPrice} onChange={(value) => onChange('pnl', 'entryPrice', value)} placeholder={t.placeholders.enterEntryPrice} />
    </Field>
    <Field label={t.labels.exitPrice} language={language}>
      <NumberInput value={form.exitPrice} onChange={(value) => onChange('pnl', 'exitPrice', value)} placeholder={t.placeholders.enterExitPrice} />
    </Field>
    <Field label={t.labels.lotSize} language={language}>
      <NumberInput value={form.lotSize} onChange={(value) => onChange('pnl', 'lotSize', value)} placeholder={t.placeholders.enterLotSize} />
    </Field>
  </>
)

const LotSizeFields = ({ form, onChange, instrumentOptions, t, language, selectStyles }) => (
  <>
    <Field label={t.labels.instrument} language={language}>
      <SelectField
        options={instrumentOptions}
        value={form.instrument}
        onChange={(value) => onChange('lotSize', 'instrument', value)}
        placeholder={t.placeholders.selectInstrument}
        searchPlaceholder={t.placeholders.searchInstrument}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.accountBalance} hint={t.result.riskAmount} language={language}>
      <NumberInput value={form.accountBalance} onChange={(value) => onChange('lotSize', 'accountBalance', value)} placeholder={t.placeholders.enterAccountBalance} />
    </Field>
    <Field label={t.labels.riskPercentage} language={language}>
      <NumberInput value={form.riskPercentage} onChange={(value) => onChange('lotSize', 'riskPercentage', value)} placeholder={t.placeholders.enterRiskPercentage} />
    </Field>
    <Field label={t.labels.entryPrice} language={language}>
      <NumberInput value={form.entryPrice} onChange={(value) => onChange('lotSize', 'entryPrice', value)} placeholder={t.placeholders.enterEntryPrice} />
    </Field>
    <Field label={t.labels.exitPrice} language={language}>
      <NumberInput value={form.exitPrice} onChange={(value) => onChange('lotSize', 'exitPrice', value)} placeholder={t.placeholders.enterExitPrice} />
    </Field>
  </>
)

const SwapFields = ({ form, onChange, onRangeChange, instrumentOptions, tradeTypeOptions, platformOptions, t, language, swapPoints, selectStyles }) => (
  <>
    <Field label={t.labels.platform} language={language}>
      <SelectField
        options={platformOptions}
        value={form.platform}
        onChange={(value) => onChange('swap', 'platform', value)}
        placeholder={t.placeholders.selectPlatform}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.instrument} language={language}>
      <SelectField
        options={instrumentOptions}
        value={form.instrument}
        onChange={(value) => onChange('swap', 'instrument', value)}
        placeholder={t.placeholders.selectInstrument}
        searchPlaceholder={t.placeholders.searchInstrument}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.tradeType} language={language}>
      <SelectField
        options={tradeTypeOptions}
        value={form.tradeType}
        onChange={(value) => onChange('swap', 'tradeType', value)}
        placeholder={t.placeholders.selectTradeType}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.swapPoints} hint={t.helper.swapPointsReadonly} language={language}>
      <NumberInput value={String(Number(swapPoints.toFixed(2)))} onChange={() => {}} placeholder={t.placeholders.enterValue} disabled />
    </Field>
    <Field label={t.labels.lotSize} language={language}>
      <NumberInput value={form.lotSize} onChange={(value) => onChange('swap', 'lotSize', value)} placeholder={t.placeholders.enterLotSize} />
    </Field>
    <Field label={t.labels.tradePeriod} language={language}>
      <CalendarRangePicker value={{ from: form.from, to: form.to }} onChange={onRangeChange} language={language} t={t} />
    </Field>
  </>
)

const MarginFields = ({ form, onChange, instrumentOptions, leverageOptions, t, language, selectStyles }) => (
  <>
    <Field label={t.labels.leverage} language={language}>
      <SelectField
        options={leverageOptions}
        value={form.leverage}
        onChange={(value) => onChange('margin', 'leverage', value)}
        placeholder={t.placeholders.selectLeverage}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.accountBalance} language={language}>
      <NumberInput value={form.accountBalance} onChange={(value) => onChange('margin', 'accountBalance', value)} placeholder={t.placeholders.enterAccountBalance} />
    </Field>
    <Field label={t.labels.instrument} language={language}>
      <SelectField
        options={instrumentOptions}
        value={form.instrument}
        onChange={(value) => onChange('margin', 'instrument', value)}
        placeholder={t.placeholders.selectInstrument}
        searchPlaceholder={t.placeholders.searchInstrument}
        styles={selectStyles}
      />
    </Field>
    <Field label={t.labels.exchangeRateUsd} hint={t.helper.exchangeRateDescription} language={language}>
      <NumberInput value={form.exchangeRateUsd} onChange={() => {}} placeholder={t.placeholders.enterExchangeRateUsd} disabled />
    </Field>
    <Field label={t.labels.lotSize} language={language}>
      <NumberInput value={form.lotSize} onChange={(value) => onChange('margin', 'lotSize', value)} placeholder={t.placeholders.enterLotSize} />
    </Field>
  </>
)

const calculatePnl = (form, language, t) => {
  const instrument = FOREX_INSTRUMENTS[form.instrument]
  const entryPrice = toNumber(form.entryPrice)
  const exitPrice = toNumber(form.exitPrice)
  const lotSize = toNumber(form.lotSize)

  if (!instrument || entryPrice <= 0 || exitPrice <= 0 || lotSize <= 0) {
    return { headline: formatMoney(0, language), metrics: [] }
  }

  const direction = form.tradeType === 'buy' ? 1 : -1
  const quoteDelta = (exitPrice - entryPrice) * direction
  const pnlInQuote = quoteDelta * instrument.contractSize * lotSize
  const pnlUsd = pnlInQuote * getUsdRateForQuote(instrument)

  return {
    headline: formatMoney(pnlUsd, language),
    resultLabel: pnlUsd > 0 ? t.result.profit : pnlUsd < 0 ? t.result.loss : t.result.noProfitOrLoss,
    tone: pnlUsd > 0 ? 'profit' : pnlUsd < 0 ? 'loss' : 'neutral',
    metrics: [],
  }
}

const calculateLotSize = (form, language, t) => {
  const instrument = FOREX_INSTRUMENTS[form.instrument]
  const balance = toNumber(form.accountBalance)
  const riskPercentage = toNumber(form.riskPercentage)
  const entryPrice = toNumber(form.entryPrice)
  const exitPrice = toNumber(form.exitPrice)

  if (!instrument) {
    return {
      headline: formatMoney(0, language),
      metrics: [],
      validationMessage: t.result.instrumentRequired,
    }
  }

  if (riskPercentage < 1 || riskPercentage > 100 || !Number.isFinite(riskPercentage)) {
    return {
      headline: formatMoney(0, language),
      metrics: [],
      validationMessage: t.result.riskPercentageRange,
    }
  }

  if (balance <= 0 || entryPrice <= 0 || exitPrice <= 0 || !Number.isFinite(balance) || !Number.isFinite(entryPrice) || !Number.isFinite(exitPrice)) {
    return {
      headline: formatMoney(0, language),
      metrics: [],
      validationMessage: t.result.positiveValuesRequired,
    }
  }

  if (entryPrice === exitPrice) {
    return {
      headline: formatMoney(0, language),
      metrics: [],
      validationMessage: t.result.entryExitDifferent,
    }
  }

  const riskAmount = balance * (riskPercentage / 100)
  const stopDistance = Math.abs(entryPrice - exitPrice)
  const lossPerLotUsd = stopDistance * instrument.contractSize * getUsdRateForQuote(instrument)
  const suggestedLotSize = riskAmount / lossPerLotUsd
  return {
    headline: `${formatNumber(suggestedLotSize, language, 2)} ${t.units.lots}`,
    metrics: [],
  }
}

const calculateSwap = (form, language, t) => {
  const instrument = FOREX_INSTRUMENTS[form.instrument]
  const lotSize = toNumber(form.lotSize)
  const swapPoints = getSwapPoints(form.platform, form.instrument, form.tradeType)
  const chargedNights = countSwapNights(form.from, form.to)

  if (!instrument || lotSize <= 0) {
    return { headline: formatMoney(0, language), metrics: [] }
  }

  const swapUsdPerNight = swapPoints * instrument.pipSize * instrument.contractSize * lotSize * getUsdRateForQuote(instrument)
  const totalSwap = swapUsdPerNight * chargedNights

  return {
    headline: formatMoney(totalSwap, language),
    metrics: [
      { label: t.result.overnightSwap, value: formatMoney(totalSwap, language), emphasis: true },
      { label: t.result.swapRate, value: `${formatNumber(swapPoints, language, 2)} ${t.units.points}` },
      { label: t.result.swapNights, value: `${formatNumber(chargedNights, language, 0)}` },
    ],
  }
}

const calculateMargin = (form, language, t) => {
  const instrument = FOREX_INSTRUMENTS[form.instrument]
  const leverage = toNumber(form.leverage)
  const balance = toNumber(form.accountBalance)
  const marketPrice = toNumber(form.exchangeRateUsd)
  const lotSize = toNumber(form.lotSize)

  if (!instrument || leverage <= 0 || balance <= 0 || marketPrice <= 0 || lotSize <= 0) {
    return { headline: formatMoney(0, language), metrics: [] }
  }

  const notionalValue = getMarginNotionalValue(instrument, lotSize, marketPrice)
  const requiredMargin = notionalValue / leverage

  return {
    headline: formatMoney(requiredMargin, language),
    metrics: [],
  }
}

export default CalculatorHub
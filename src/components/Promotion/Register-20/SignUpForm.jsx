'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, LoaderCircle, X } from 'lucide-react'
import Link from 'next/link'
import Select from 'react-select'
import { useLanguage } from '@/context/LanguageContext'
import { DEVICE_ID_STORAGE_KEY } from '@/lib/cookieConsent'
import translations from '@/translations/Promotion/Register20/SignUpFormTranslations'

const EMAIL_CHECK_DEBOUNCE_MS = 700
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DEFAULT_COUNTRY = 'US'

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(255,255,255,0.95)',
    border: state.isFocused
      ? '2px solid #7c3aed'
      : '1px solid rgba(24, 2, 72, 0.2)',
    borderRadius: '0.75rem',
    minHeight: '44px',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(124, 58, 237, 0.1)' : 'none',
    transition: 'all 0.2s ease',
    '&:hover': { borderColor: '#7c3aed' }
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    zIndex: 9999,
    borderRadius: '0.75rem',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    overflow: 'hidden'
  }),
  menuList: (provided) => ({ ...provided, padding: '8px' }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#7c3aed'
      : state.isFocused
        ? '#f3e8ff'
        : 'transparent',
    color: state.isSelected ? '#fff' : '#1f2937',
    borderRadius: '0.5rem',
    padding: '10px 12px',
    margin: '2px 0',
    cursor: 'pointer',
    transition: 'all 0.15s ease'
  }),
  placeholder: (provided) => ({ ...provided, color: '#9ca3af' }),
  singleValue: (provided) => ({ ...provided, color: '#1f2937' })
}

export default function TradingBonusHero() {
  const { language } = useLanguage()
  const t = translations[language]
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'

  const [countryOptions, setCountryOptions] = useState([])
  const [isLoadingCountries, setIsLoadingCountries] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    countryOfResidence: '',
    otp: ''
  })
  const [emailStatus, setEmailStatus] = useState('idle')
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [notification, setNotification] = useState({ show: false, message: '', title: '', tone: 'error' })
  const [deviceId, setDeviceId] = useState('')
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)
  const [otpStatusMessage, setOtpStatusMessage] = useState('')
  const [otpStatusTone, setOtpStatusTone] = useState('neutral')
  const [otpRequestId, setOtpRequestId] = useState(null)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otpVerificationResult, setOtpVerificationResult] = useState(null)
  const [resendCountdown, setResendCountdown] = useState(0)
  const otpRefs = useRef([])
  const checkedEmailRef = useRef('')
  const abortControllerRef = useRef(null)
  const emailCheckTimeoutRef = useRef(null)
  const verifiedOtpCodeRef = useRef('')
  const selectedCountry = countryOptions.find((country) => country.value === formData.countryOfResidence) || null
  const telephonePrefix = formData.countryCode.replace('+', '')
  const countryCodeDisplayValue = selectedCountry?.phoneCode
    ? `${selectedCountry.label} (${selectedCountry.phoneCode})`
    : ''
  const isOtpVerifiedState = otpVerified || Boolean(otpVerificationResult)

  const showNotification = ({ title, message, tone = 'error' }) => {
    setNotification({
      show: true,
      title,
      message,
      tone
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'email') {
      checkedEmailRef.current = ''
      setEmailErrorMessage('')
      setNotification((prev) => ({ ...prev, show: false }))
      setOtpStatusMessage('')
      setOtpStatusTone('neutral')
      setOtpRequestId(null)
      setOtpVerified(false)
      setOtpVerificationResult(null)
      verifiedOtpCodeRef.current = ''
      setResendCountdown(0)
      setFormData((prev) => ({ ...prev, email: value, otp: '' }))
      if (!EMAIL_REGEX.test(value.trim())) {
        setEmailStatus('idle')
      }
      return
    }

    if (name === 'firstName') {
      setOtpStatusMessage('')
      setOtpStatusTone('neutral')
    }

    if (name === 'countryCode') {
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const updateOtp = (value) => {
    const normalizedValue = value.replace(/\D/g, '').slice(0, 6)
    if (normalizedValue !== formData.otp) {
      setOtpVerified(false)
      setOtpVerificationResult(null)
      verifiedOtpCodeRef.current = ''
      if (normalizedValue.length < 6) {
        setOtpStatusTone('neutral')
      }
    }

    setFormData((prev) => ({ ...prev, otp: normalizedValue }))
    return normalizedValue
  }

  const focusOtpInput = (index) => {
    const input = otpRefs.current[index]
    if (input) {
      input.focus()
      input.select()
    }
  }

  const handleOtpChange = (index, rawValue) => {
    const sanitizedValue = rawValue.replace(/\D/g, '')

    if (!sanitizedValue) {
      const nextOtp = formData.otp.padEnd(6, ' ').split('')
      nextOtp[index] = ''
      updateOtp(nextOtp.join(''))
      return
    }

    const nextOtp = formData.otp.padEnd(6, ' ').split('')

    if (sanitizedValue.length > 1) {
      sanitizedValue.slice(0, 6 - index).split('').forEach((digit, offset) => {
        nextOtp[index + offset] = digit
      })
      const updatedOtp = updateOtp(nextOtp.join(''))
      focusOtpInput(Math.min(updatedOtp.length, 5))
      return
    }

    nextOtp[index] = sanitizedValue
    updateOtp(nextOtp.join(''))
    focusOtpInput(Math.min(index + 1, 5))
  }

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      const otpDigits = formData.otp.padEnd(6, ' ').split('')

      if (otpDigits[index]) {
        otpDigits[index] = ''
        updateOtp(otpDigits.join(''))
        if (index > 0) {
          focusOtpInput(index - 1)
        }
        return
      }

      if (index > 0) {
        otpDigits[index - 1] = ''
        updateOtp(otpDigits.join(''))
        focusOtpInput(index - 1)
      }
      return
    }

    if (e.key === 'Delete') {
      e.preventDefault()
      const otpDigits = formData.otp.padEnd(6, ' ').split('')
      otpDigits[index] = ''
      updateOtp(otpDigits.join(''))
      return
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault()
      focusOtpInput(index - 1)
    }

    if (e.key === 'ArrowRight' && index < 5) {
      e.preventDefault()
      focusOtpInput(index + 1)
    }
  }

  const handleOtpPaste = (index, e) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const digits = pastedText.replace(/\D/g, '')

    if (!digits) {
      return
    }

    const nextOtp = formData.otp.padEnd(6, ' ').split('')
    digits.slice(0, 6 - index).split('').forEach((digit, offset) => {
      nextOtp[index + offset] = digit
    })

    const updatedOtp = updateOtp(nextOtp.join(''))
    focusOtpInput(Math.min(updatedOtp.length, 5))
  }

  const checkEmailAvailability = async (emailToCheck) => {
    if (!deviceId || !EMAIL_REGEX.test(emailToCheck)) {
      return
    }

    if (checkedEmailRef.current === emailToCheck) {
      return
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    const controller = new AbortController()
    abortControllerRef.current = controller
    setEmailStatus('checking')
    setEmailErrorMessage('')

    try {
      const response = await fetch('/api/auth/email-exists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: emailToCheck,
          userType: 2,
          deviceId,
          timeZone: userTimeZone,
          telephone: formData.phoneNumber.trim(),
          telephonePrefix
        }),
        signal: controller.signal
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || t.emailCheckFailed)
      }

      checkedEmailRef.current = emailToCheck

      if (data.exists) {
        setEmailStatus('exists')
        setEmailErrorMessage(t.emailExists)
        showNotification({
          title: t.emailExistsTitle,
          message: t.emailExists
        })
        return
      }

      setNotification((prev) => ({ ...prev, show: false }))
      setEmailStatus('available')
    } catch (error) {
      if (error.name === 'AbortError') {
        return
      }

      setEmailStatus('error')
      setEmailErrorMessage(error.message || t.emailCheckFailed)
    }
  }

  const handleEmailBlur = () => {
    const trimmedEmail = formData.email.trim().toLowerCase()

    if (emailCheckTimeoutRef.current) {
      clearTimeout(emailCheckTimeoutRef.current)
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail) || checkedEmailRef.current === trimmedEmail) {
      return
    }

    checkEmailAvailability(trimmedEmail)
  }

  const handleSendOtp = async () => {
    const trimmedFirstName = formData.firstName.trim()
    const trimmedEmail = formData.email.trim().toLowerCase()

    if (!trimmedFirstName) {
      showNotification({
        title: t.otpSendFailedTitle,
        message: t.firstNameRequired
      })
      return
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      showNotification({
        title: t.otpSendFailedTitle,
        message: t.enterValidEmail
      })
      return
    }

    if (!deviceId) {
      showNotification({
        title: t.otpSendFailedTitle,
        message: t.otpSendFailed
      })
      return
    }

    if (emailStatus !== 'available') {
      showNotification({
        title: t.otpSendFailedTitle,
        message: emailStatus === 'exists' ? t.emailExists : t.emailMustBeVerified
      })
      return
    }

    setIsSendingOtp(true)
    setOtpStatusMessage('')
    setOtpStatusTone('neutral')

    try {
      const response = await fetch('/api/otp/send-mobile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: trimmedEmail,
          firstName: trimmedFirstName,
          deviceId,
          timeZone: userTimeZone,
          telephone: formData.phoneNumber.trim(),
          telephonePrefix
        })
      })

      const data = await response.json()
      const sendOtpPayload = data?.result?.result || data?.result || null
      const sendOtpMessage = data?.result?.message || data?.message || ''
      const isSendOtpSuccessful =
        response.ok &&
        sendOtpPayload &&
        sendOtpPayload.id &&
        sendOtpPayload.email &&
        sendOtpMessage === 'OTP sent successfully to email'

      if (!isSendOtpSuccessful) {
        throw new Error(data.message || t.otpSendFailed)
      }

      setOtpStatusMessage(sendOtpMessage || t.otpSent)
      setOtpStatusTone('neutral')
      setOtpRequestId(sendOtpPayload.id)
      setOtpVerified(false)
      setOtpVerificationResult(null)
      setResendCountdown(30)
      verifiedOtpCodeRef.current = ''
      updateOtp('')
      showNotification({
        title: t.otpSentTitle,
        message: sendOtpMessage || t.otpSent,
        tone: 'success'
      })
      focusOtpInput(0)
    } catch (error) {
      setOtpStatusMessage('')
      showNotification({
        title: t.otpSendFailedTitle,
        message: error.message || t.otpSendFailed
      })
    } finally {
      setIsSendingOtp(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submitRegistration = async () => {
      if (!formData.firstName.trim()) {
        showNotification({
          title: t.submit,
          message: t.firstNameRequired
        })
        return
      }

      if (!formData.lastName.trim()) {
        showNotification({
          title: t.submit,
          message: t.lastNameRequired
        })
        return
      }

      if (!EMAIL_REGEX.test(formData.email.trim().toLowerCase()) || emailStatus !== 'available') {
        showNotification({
          title: t.submit,
          message: emailStatus === 'exists' ? t.emailExists : t.emailMustBeVerified
        })
        return
      }

      if (!formData.countryCode || !formData.phoneNumber.trim()) {
        showNotification({
          title: t.submit,
          message: t.phoneRequired
        })
        return
      }

      if (!formData.countryOfResidence) {
        showNotification({
          title: t.submit,
          message: t.countryRequired
        })
        return
      }

      if (!otpVerified && !otpVerificationResult) {
        showNotification({
          title: t.otpVerifyFailedTitle,
          message: t.otpVerificationRequired
        })
        return
      }

      const verificationId = otpVerificationResult?.id
      const verifiedOtpId = otpVerificationResult?.otpId
      const countryName = selectedCountry?.label || ''

      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        telephone: formData.phoneNumber.trim(),
        telephonePrefix,
        countryIso: formData.countryOfResidence,
        country: countryName,
        otpId: verifiedOtpId,
        verificationId,
        deviceId,
        timeZone: userTimeZone
      }

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()


      if (!response.ok) {
        throw new Error(data.message || t.registrationFailed)
      }

      const token = data?.result?.token || data?.token

      if (!token) {
        throw new Error(t.registrationTokenMissing)
      }

      showNotification({
        title: t.submit,
        message: data.message || t.registrationSuccess,
        tone: 'success'
      })

      window.location.href = `https://client.geniefx.com/register-live-trading-account-F2?token=${encodeURIComponent(token)}`
    }

    submitRegistration().catch((error) => {
      showNotification({
        title: t.errorTitle,
        message: error.message || t.registrationFailed
      })
    }).finally(() => {
      setIsSubmitting(false)
    })
  }

  useEffect(() => {
    if (resendCountdown <= 0) {
      return
    }

    const intervalId = setInterval(() => {
      setResendCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [resendCountdown])

  useEffect(() => {
    const verifyOtp = async () => {
      if (!otpRequestId || formData.otp.length !== 6 || !deviceId) {
        return
      }

      if (verifiedOtpCodeRef.current === formData.otp) {
        return
      }

      setIsVerifyingOtp(true)
      setOtpStatusMessage(t.verifyingOTP)
      setOtpStatusTone('neutral')

      try {
        const response = await fetch('/api/otp/verify-mobile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            id: otpRequestId,
            code: formData.otp,
            email: formData.email.trim().toLowerCase(),
            deviceId,
            timeZone: userTimeZone,
            telephone: formData.phoneNumber.trim(),
            telephonePrefix
          })
        })

        const data = await response.json()
        const verificationPayload = data?.result?.result || data?.result || null
        const verificationMessage = data?.result?.message || data?.message || ''
        const isVerificationSuccessful =
          response.ok &&
          verificationPayload &&
          verificationPayload.id &&
          verificationPayload.otpId &&
          verificationPayload.isEmailVerified === true &&
          verificationMessage === 'OTP verified successfully'

        if (!isVerificationSuccessful) {
          throw new Error(data.message || t.otpVerifyFailed)
        }

        verifiedOtpCodeRef.current = formData.otp
        setOtpVerified(true)
        setOtpVerificationResult(verificationPayload)
        setResendCountdown(0)
        setOtpStatusMessage(t.otpVerified)
        setOtpStatusTone('success')
        showNotification({
          title: t.otpVerifiedTitle,
          message: t.otpVerified,
          tone: 'success'
        })
      } catch (error) {
        verifiedOtpCodeRef.current = ''
        setOtpVerified(false)
        setOtpVerificationResult(null)
        setOtpStatusMessage(error.message || t.otpVerifyFailed)
        setOtpStatusTone('error')
        showNotification({
          title: t.otpVerifyFailedTitle,
          message: error.message || t.otpVerifyFailed
        })
      } finally {
        setIsVerifyingOtp(false)
      }
    }

    verifyOtp()
  }, [
    deviceId,
    formData.email,
    formData.otp,
    formData.phoneNumber,
    otpRequestId,
    t.otpVerified,
    t.otpVerifiedTitle,
    t.otpVerifyFailed,
    t.otpVerifyFailedTitle,
    t.verifyingOTP,
    telephonePrefix,
    userTimeZone
  ])

  useEffect(() => {
    const loadCountries = async () => {
      setIsLoadingCountries(true)

      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd')
        const data = await response.json()

        const countries = data
          .filter((country) => country?.cca2 && country?.name?.common)
          .map((country) => {
            const root = country?.idd?.root || ''
            const suffixes = country?.idd?.suffixes || []
            const phoneCode = root && suffixes.length > 0 ? `${root}${suffixes[0]}` : root

            return {
              value: country.cca2,
              label: country.name.common,
              flag: country.flags?.svg || country.flags?.png || '',
              phoneCode
            }
          })
          .sort((a, b) => a.label.localeCompare(b.label))

        setCountryOptions(countries)
      } catch (error) {
        console.error('Failed to load countries:', error)
        setCountryOptions([])
      } finally {
        setIsLoadingCountries(false)
      }
    }

    loadCountries()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const existingDeviceId = window.localStorage.getItem(DEVICE_ID_STORAGE_KEY)

    if (existingDeviceId) {
      setDeviceId(existingDeviceId)
      return
    }

    const nextDeviceId = crypto.randomUUID()
    window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, nextDeviceId)
    setDeviceId(nextDeviceId)
  }, [])

  useEffect(() => {
    if (countryOptions.length === 0) {
      return
    }

    const detectCountry = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json')
        const data = await response.json()
        const detectedCountry = (data.country_code || DEFAULT_COUNTRY).toUpperCase()
        const selectedDetectedCountry = countryOptions.find((country) => country.value === detectedCountry)

        if (!selectedDetectedCountry) {
          return
        }

        setFormData((prev) => ({
          ...prev,
          countryOfResidence: prev.countryOfResidence || selectedDetectedCountry.value,
          countryCode: prev.countryCode || selectedDetectedCountry.phoneCode
        }))
      } catch (error) {
        const fallbackCountry = countryOptions.find((country) => country.value === DEFAULT_COUNTRY)

        if (!fallbackCountry) {
          return
        }

        setFormData((prev) => ({
          ...prev,
          countryOfResidence: prev.countryOfResidence || fallbackCountry.value,
          countryCode: prev.countryCode || fallbackCountry.phoneCode
        }))
      }
    }

    detectCountry()
  }, [countryOptions])

  useEffect(() => {
    const trimmedEmail = formData.email.trim().toLowerCase()

    if (!deviceId || !trimmedEmail) {
      setEmailStatus('idle')
      setEmailErrorMessage('')
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      return
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailStatus('idle')
      setEmailErrorMessage('')
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      return
    }

    if (checkedEmailRef.current === trimmedEmail) {
      return
    }

    emailCheckTimeoutRef.current = setTimeout(() => {
      checkEmailAvailability(trimmedEmail)
    }, EMAIL_CHECK_DEBOUNCE_MS)

    return () => {
      if (emailCheckTimeoutRef.current) {
        clearTimeout(emailCheckTimeoutRef.current)
      }
    }
  }, [deviceId, formData.email, formData.phoneNumber, t.emailCheckFailed, t.emailExists, telephonePrefix, userTimeZone])

  useEffect(() => {
    if (!notification.show) {
      return
    }

    const timeoutId = setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }))
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [notification.show])

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      if (emailCheckTimeoutRef.current) {
        clearTimeout(emailCheckTimeoutRef.current)
      }
    }
  }, [])

  const staggerParent = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const inputVariant = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <section
      className='relative w-full bg-cover bg-center bg-no-repeat py-20 px-6 md:px-12 lg:px-20 overflow-hidden'
      style={{ backgroundImage: "url('/homepage/Homepage-02.webp')" }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: notification.show ? 1 : 0,
          x: notification.show ? 0 : 30,
          pointerEvents: notification.show ? 'auto' : 'none'
        }}
        transition={{ duration: 0.25 }}
        className='fixed top-6 right-6 z-50 w-[min(24rem,calc(100vw-2rem))]'
      >
        <div className={`rounded-2xl border bg-white shadow-xl ${
          notification.tone === 'success' ? 'border-green-200' : 'border-red-200'
        }`}>
          <div className='flex items-start gap-3 p-4'>
            <div className={`mt-0.5 rounded-full p-2 ${
              notification.tone === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {notification.tone === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            </div>
            <div className='flex-1'>
              <p className='text-sm font-semibold text-[#180248]'>{notification.title}</p>
              <p className='mt-1 text-sm text-gray-600'>{notification.message}</p>
            </div>
            <button
              type='button'
              onClick={() => setNotification((prev) => ({ ...prev, show: false }))}
              className='rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600'
              aria-label={t.closeNotification}
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      <div className='hidden md:block absolute bottom-0 right-0 w-full max-w-4xl pointer-events-none z-0'>
        <img
          src='/promotion/register/Register-02.webp'
          alt='mobile trading'
          className='w-full max-w-none translate-x-20 md:translate-x-32 lg:translate-x-40 scale-110 md:scale-125 origin-bottom-right'
        />
      </div>

      <div className='relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-4 md:mt-10'>
        <div className='lg:col-span-5 flex flex-col items-start md:items-center text-center space-y-4 relative z-20 mt-0 md:mt-16 lg:order-2'>
          <div className='text-center space-y-2'>
            <h2 className='text-white/90 text-lg md:text-xl font-normal italic'>{t.tradeSmarter}</h2>
            <h2 className='text-4xl md:text-5xl max-w-md mx-auto font-extrabold banner-heading-gradient italic'>
              {t.bonusTitle}
            </h2>
          </div>
          <motion.div className='grid grid-cols-2 gap-4 px-0 md:px-0'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className='relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5d02a0] via-[#0a0137] to-[#0a0137] text-white font-bold flex items-center justify-center p-4 text-base md:text-md'
            >
              <span className='relative z-10 text-center'>
                <span className='font-medium'>{t.minDeposit.split(':')[0]}: </span>
                <span className='font-bold'>{t.minDeposit.split(': ')[1]}</span>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className='relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5d02a0] via-[#0a0137] to-[#0a0137] text-white font-bold flex items-center justify-center p-4 text-base md:text-md'
            >
              <span className='relative z-10 text-center'>
                <span className='font-medium'>{t.maxBonus.split(':')[0]}: </span>
                <span className='font-bold'>{t.maxBonus.split(': ')[1]}</span>
              </span>
            </motion.div>
          </motion.div>
          <div className='max-w-md text-center'>
            <p className='text-gray-400 italic text-sm md:text-base'>
              {t.limitedOffer}<span className='font-bold'>{t.standardAccount}</span>
            </p>
            <Link
              href='/pdf/20-Terms-and-Conditions-LR.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 inline-flex items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]'
            >
              {t.termsApply}
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='lg:col-span-7 bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-purple-100 lg:order-1'
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='border-b border-gray-200 pb-4'
          >
            <h2 className='text-3xl font-bold text-[#180248] mb-1'>{t.createAccount}</h2>
            <p className='text-gray-600 text-sm'>{t.startTradingBonus}</p>
          </motion.div>

          {/* Progress indicator */}
          {(() => {
            const currentStep = isSubmitting ? 3 : otpRequestId ? 2 : 1
            const steps = language === 'ar'
              ? ['بياناتك', 'التحقق', 'ابدأ التداول']
              : ['Your Details', 'Verify Phone', 'Start Trading']
            return (
              <div className='flex items-center mt-5 mb-2'>
                {steps.map((label, idx) => {
                  const step = idx + 1
                  const isActive = currentStep === step
                  const isDone = currentStep > step
                  return (
                    <div key={step} className='flex items-center flex-1 last:flex-none'>
                      <div className='flex flex-col items-center'>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${isDone ? 'bg-green-500 text-white' : isActive ? 'bg-[#7102ba] text-white' : 'bg-gray-200 text-gray-400'}`}>
                          {isDone ? '✓' : step}
                        </div>
                        <span className={`text-[10px] mt-1 font-medium whitespace-nowrap ${isActive ? 'text-[#7102ba]' : isDone ? 'text-green-600' : 'text-gray-400'}`}>{label}</span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 mx-2 mb-4 transition-all duration-300 ${currentStep > step ? 'bg-green-500' : 'bg-gray-200'}`} />
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })()}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <motion.div variants={staggerParent} initial='hidden' whileInView='show' viewport={{ once: true }} className='space-y-5'>
              <motion.div variants={inputVariant} className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.firstNameLabel} <span className='text-red-500'>*</span></label>
                  <motion.input
                    required
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.lastNameLabel} <span className='text-red-500'>*</span></label>
                  <motion.input
                    required
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all'
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariant}>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.emailLabel} <span className='text-red-500'>*</span></label>
                <div className='relative'>
                  <motion.input
                    required
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    className={`w-full px-4 py-2.5 pr-12 rounded-xl bg-white border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all ${
                      emailStatus === 'exists' || emailStatus === 'error'
                        ? 'border-red-400'
                        : emailStatus === 'available'
                          ? 'border-green-500'
                          : 'border-gray-300'
                    }`}
                  />
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
                    {emailStatus === 'checking' && <LoaderCircle className='h-5 w-5 animate-spin text-[#180248]' />}
                    {emailStatus === 'available' && <CheckCircle2 className='h-5 w-5 text-green-600' />}
                  </div>
                </div>
                {(emailStatus === 'exists' || emailStatus === 'error') && (
                  <p className='mt-2 text-sm text-red-600'>{emailErrorMessage}</p>
                )}
              </motion.div>

              <motion.div variants={inputVariant} className='grid grid-cols-1 sm:grid-cols-[240px_minmax(0,1fr)] gap-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.countryCodeLabel} <span className='text-red-500'>*</span></label>
                  <input
                    type='text'
                    name='countryCode'
                    value={countryCodeDisplayValue}
                    readOnly
                    disabled
                    className='w-full px-4 py-2.5 rounded-xl bg-gray-100 border border-gray-300 text-[#180248] font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-80'
                    placeholder={isLoadingCountries ? t.countryLoading : t.countryCodePlaceholder}
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.phoneLabel} <span className='text-red-500'>*</span></label>
                  <motion.input
                    required
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    type='tel'
                    inputMode='tel'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder={t.phoneNumberPlaceholder}
                    className='w-full px-4 py-2.5 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all'
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariant}>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.countryResidenceLabel} <span className='text-red-500'>*</span></label>
                <Select
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={(option) => {
                    const nextCountry = countryOptions.find((country) => country.value === option?.value)
                    setFormData((prev) => ({
                      ...prev,
                      countryOfResidence: option?.value || '',
                      countryCode: nextCountry?.phoneCode || ''
                    }))
                  }}
                  styles={customSelectStyles}
                  placeholder={isLoadingCountries ? t.countryLoading : t.countryResidenceLabel}
                  isSearchable
                  isLoading={isLoadingCountries}
                  formatOptionLabel={({ label, flag }) => (
                    <div className='flex items-center gap-2'>
                      {flag && <img src={flag} alt='' className='w-5 h-5 rounded-sm' />}
                      <span>{label}</span>
                    </div>
                  )}
                />
              </motion.div>

              <motion.div variants={inputVariant} className='space-y-4'>
                <div className='flex items-center justify-between gap-4'>
                  <label className='block text-sm font-semibold text-gray-700'>{t.otpLabel} <span className='text-red-500'>*</span></label>
                  {otpStatusMessage && (
                    <span className={`text-xs font-medium ${
                      otpStatusTone === 'success'
                        ? 'text-green-600'
                        : otpStatusTone === 'error'
                          ? 'text-red-600'
                          : 'text-gray-500'
                    }`}>
                      {otpStatusMessage}
                    </span>
                  )}
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                  <motion.button
                    type='button'
                    onClick={handleSendOtp}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isOtpVerifiedState || isSendingOtp || isVerifyingOtp || !deviceId || emailStatus !== 'available' || (resendCountdown > 0 && otpRequestId !== null)}
                    className='w-full sm:w-auto sm:min-w-[170px] py-3 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-[#180248] text-white font-semibold hover:shadow-lg transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isVerifyingOtp ? (
                      <span className='inline-flex items-center gap-2'>
                        <LoaderCircle className='h-4 w-4 animate-spin' />
                        {t.verifyingLabel}
                      </span>
                    ) : isOtpVerifiedState ? (
                      t.verifiedLabel
                    ) : isSendingOtp ? (
                      t.sendingOTP
                    ) : resendCountdown > 0 && otpRequestId !== null ? (
                      `${t.resendOTPIn} ${resendCountdown}s`
                    ) : otpRequestId ? (
                      t.resendOTP
                    ) : (
                      t.sendOTP
                    )}
                  </motion.button>

                  <div className='flex-1'>
                    <div className='grid grid-cols-6 gap-2 sm:gap-3'>
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <motion.input
                          key={index}
                          whileHover={{ scale: 1.04 }}
                          whileFocus={{ scale: 1.04 }}
                          type='text'
                          inputMode='numeric'
                          maxLength={1}
                          value={formData.otp[index] || ''}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          onPaste={(e) => handleOtpPaste(index, e)}
                          onFocus={(e) => e.target.select()}
                          ref={(element) => {
                            otpRefs.current[index] = element
                          }}
                          className='aspect-square w-full rounded-xl bg-white border border-gray-300 text-center text-lg font-semibold text-[#180248] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                          aria-label={`${t.otpLabel} ${index + 1}`}
                          autoComplete={index === 0 ? 'one-time-code' : 'off'}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className='text-sm text-gray-500'>{t.otpHint}</p>
              </motion.div>
            </motion.div>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <motion.a
                href='https://client.geniefx.com/login'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='w-full sm:w-1/2 py-4 rounded-xl border-2 border-[#180248] text-[#180248] bg-white font-semibold hover:bg-gray-50 transition-all shadow-sm text-center'
              >
                {t.signIn}
              </motion.a>

              <motion.button
                type='submit'
                disabled={isSubmitting || !isOtpVerifiedState}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='w-full sm:w-1/2 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-[#180248] text-white font-semibold hover:shadow-lg transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? t.creating : t.createAccountButton}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

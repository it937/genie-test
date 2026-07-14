'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Liquidity/LiquidityLeadFormTranslations'

const initialFormData = {
  name: '',
  email: '',
  phoneNumber: '',
  country: ''
}

const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+]?[\d\s().-]{7,20}$/

export default function LiquidityLeadForm() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState(initialFormData)
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modal, setModal] = useState({
    open: false,
    type: 'success',
    title: '',
    message: ''
  })

  const labels = useMemo(() => ({
    name: t.name,
    email: t.email,
    phoneNumber: t.phoneNumber,
    country: t.country
  }), [t])

  function validateField(name, value) {
    const trimmedValue = value.trim()

    if (!trimmedValue) {
      return t.requiredField.replace('{field}', labels[name])
    }

    if (name === 'name') {
      if (trimmedValue.length < 2) {
        return t.nameTooShort
      }

      if (!namePattern.test(trimmedValue)) {
        return t.nameInvalid
      }
    }

    if (name === 'email' && !emailPattern.test(trimmedValue)) {
      return t.emailInvalid
    }

    if (name === 'phoneNumber') {
      const digitsOnly = trimmedValue.replace(/\D/g, '')

      if (digitsOnly.length < 7 || digitsOnly.length > 15 || !phonePattern.test(trimmedValue)) {
        return t.phoneInvalid
      }
    }

    if (name === 'country') {
      if (trimmedValue.length < 2) {
        return t.countryInvalid
      }

      if (!namePattern.test(trimmedValue)) {
        return t.countryInvalid
      }
    }

    return ''
  }

  function validateForm() {
    const nextErrors = {}

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)

      if (error) {
        nextErrors[key] = error
      }
    })

    setFieldErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    setSubmitError('')

    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }))
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target
    const error = validateField(name, value)

    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitError('')

    if (!validateForm()) {
      setModal({
        open: true,
        type: 'error',
        title: t.errorTitle,
        message: t.validationSummary
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-liquidity-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          page: 'liquidity',
          source: 'liquidity_lead_form'
        })
      })

      const data = await response.json()

      if (!response.ok || data.status !== 'success') {
        throw new Error(data.message || t.errorMessage)
      }

      setFormData(initialFormData)
      setFieldErrors({})
      setModal({
        open: true,
        type: 'success',
        title: t.successTitle,
        message: t.successMessage
      })
    } catch (error) {
      const message = error.message || t.errorMessage
      setSubmitError(message)
      setModal({
        open: true,
        type: 'error',
        title: t.errorTitle,
        message
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='liquidity-lead-form' className='bg-white px-4 py-10 sm:px-6 lg:px-8' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className='mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#180248]/8 bg-white shadow-[0_24px_70px_rgba(24,2,72,0.08)]'
      >
        <div className='grid gap-0 lg:grid-cols-[0.9fr_1.1fr]'>
          <div className='relative overflow-hidden bg-[linear-gradient(145deg,#460c63_0%,#220470_48%,#110236_100%)] px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10'>
            <div className='absolute inset-0 opacity-90'>
              <div className='absolute -top-10 left-0 h-40 w-40 rounded-full bg-white/8 blur-3xl' />
              <div className='absolute bottom-0 right-0 h-44 w-44 rounded-full bg-cyan-300/14 blur-3xl' />
              <div className='absolute inset-y-0 right-0 w-px bg-white/10' />
            </div>

            <div className='relative'>
              <h2 className={`mt-5 max-w-sm text-3xl font-extrabold text-white ${language === 'ar' ? 'py-3 leading-relaxed' : 'leading-tight'}`}>
                {t.heading}
              </h2>
              <p className={`mt-4 max-w-md text-sm font-medium text-white/78 md:text-base ${language === 'ar' ? 'leading-8' : 'leading-7'}`}>
                {t.description}
              </p>

              <div className='mt-8 space-y-4'>
                {[t.benefit1, t.benefit2, t.benefit3].map((benefit, index) => (
                  <div key={index} className='flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 shadow-sm ring-1 ring-white/10 backdrop-blur-sm'>
                    <div className='mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#460c63]'>
                      <svg viewBox='0 0 20 20' className='h-3.5 w-3.5 fill-current'>
                        <path d='M7.629 13.233 4.396 10l-1.06 1.06 4.293 4.294L16.664 6.32l-1.06-1.06-7.975 7.974Z' />
                      </svg>
                    </div>
                    <p className='text-sm font-medium text-white/85'>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='border-t border-[#180248]/8 bg-white px-6 py-8 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10'>
            <form onSubmit={handleSubmit} noValidate className='space-y-5'>
              {[
                { name: 'name', type: 'text', label: t.name, placeholder: t.namePlaceholder, autoComplete: 'name' },
                { name: 'email', type: 'email', label: t.email, placeholder: t.emailPlaceholder, autoComplete: 'email' },
                { name: 'phoneNumber', type: 'tel', label: t.phoneNumber, placeholder: t.phonePlaceholder, autoComplete: 'tel' },
                { name: 'country', type: 'text', label: t.country, placeholder: t.countryPlaceholder, autoComplete: 'country-name' }
              ].map(field => (
                <div key={field.name}>
                  <label htmlFor={field.name} className='mb-2 block text-sm font-semibold text-[#180248]'>
                    {field.label}
                    <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    aria-invalid={fieldErrors[field.name] ? 'true' : 'false'}
                    aria-describedby={fieldErrors[field.name] ? `${field.name}-error` : undefined}
                    className={`w-full rounded-2xl border bg-[#fbfbfe] px-4 py-3.5 text-sm font-medium text-[#180248] outline-none transition-all placeholder:text-[#180248]/35 focus:ring-4 ${
                      fieldErrors[field.name]
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                        : 'border-[#180248]/12 focus:border-[#460c63] focus:ring-[#460c63]/10'
                    }`}
                  />
                  {fieldErrors[field.name] && (
                    <p id={`${field.name}-error`} className='mt-2 text-sm font-medium text-red-500'>
                      {fieldErrors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div className='rounded-2xl bg-[#f7f2fb] px-4 py-3 text-sm font-medium text-[#180248]/70 ring-1 ring-[#460c63]/8'>
                {t.disclaimer}
              </div>

              {submitError && (
                <div className='rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600'>
                  {submitError}
                </div>
              )}

              <div className='pt-2'>
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                  whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all sm:w-auto ${
                    isSubmitting ? 'cursor-not-allowed bg-[#180248]/45 shadow-none' : 'cta'
                  }`}
                >
                  {isSubmitting ? t.submitting : t.submit}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm'
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className='w-full max-w-md rounded-[28px] bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)]'
            >
              <div className='text-center'>
                <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${
                  modal.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
                }`}>
                  {modal.type === 'success' ? (
                    <svg viewBox='0 0 24 24' className='h-8 w-8 fill-current'>
                      <path d='M9.55 18.001 3.85 12.3l1.4-1.4 4.3 4.3 9-9 1.4 1.4-10.4 10.4Z' />
                    </svg>
                  ) : (
                    <svg viewBox='0 0 24 24' className='h-8 w-8 fill-current'>
                      <path d='M11 7h2v7h-2V7Zm0 9h2v2h-2v-2Zm1-14C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z' />
                    </svg>
                  )}
                </div>
                <h3 className='text-2xl font-bold text-[#180248]'>{modal.title}</h3>
                <p className='mt-3 text-sm font-medium leading-7 text-[#180248]/70'>{modal.message}</p>
                <button
                  type='button'
                  onClick={() => setModal(prev => ({ ...prev, open: false }))}
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white ${
                    modal.type === 'success' ? 'bg-green-600' : 'bg-red-500'
                  }`}
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

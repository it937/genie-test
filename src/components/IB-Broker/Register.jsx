'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IBBroker/RegisterTranslations'

export default function RegisterBrokerForm() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    countryOfResidence: '',
    sendOTP: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const staggerParent = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const inputVariant = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <section className="bg-white py-8 mb-8 md:mb-16 px-4 sm:px-6 lg:px-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto rounded-3xl bg-[#f5f5f5] p-8 md:p-12 shadow-md"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-2xl md:text-3xl font-extrabold text-center mb-8 text-balance heading-gradient max-w-sm mx-auto ${language === 'ar' ? 'py-4' : ''}`}
        >
          {t.heading}
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={inputVariant}>
              <label className="block text-sm font-medium text-[#180248] mb-2">
                {t.firstName}<span className="text-red-500">*</span>
              </label>
              <motion.input whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-1 rounded-lg bg-white/80 border border-[#180248]/50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
            </motion.div>

            <motion.div variants={inputVariant}>
              <label className="block text-sm font-medium text-[#180248] mb-2">
                {t.lastName}<span className="text-red-500">*</span>
              </label>
              <motion.input whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-1 rounded-lg bg-white/80 border border-[#180248]/50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={inputVariant}>
              <label className="block text-sm font-medium text-[#180248] mb-2">
                {t.phoneNumber}<span className="text-red-500">*</span>
              </label>
              <motion.input whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-1 rounded-lg bg-white/80 border border-[#180248]/50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
            </motion.div>

            <motion.div variants={inputVariant}>
              <label className="block text-sm font-medium text-[#180248] mb-2">
                {t.email}<span className="text-red-500">*</span>
              </label>
              <motion.input whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-1 rounded-lg bg-white/80 border border-[#180248]/50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={inputVariant}>
              <label className="block text-sm font-medium text-[#180248] mb-2">
                {t.countryOfResidence}<span className="text-red-500">*</span>
              </label>
              <motion.input whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} type="text" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} className="w-full px-4 py-1 rounded-lg bg-white/80 border border-[#180248]/50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
            </motion.div>

            <motion.div variants={inputVariant}>
              <label className="block text-sm font-medium text-[#180248] mb-2">
                {t.sendOTP}<span className="text-red-500">*</span>
              </label>
              <motion.input whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} type="text" name="sendOTP" value={formData.sendOTP} onChange={handleChange} className="w-full px-4 py-1 rounded-lg bg-white/80 border border-[#180248]/50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" required />
            </motion.div>
          </div>

          <motion.div variants={inputVariant} className="space-y-3 pt-4">
            <p className="text-sm text-gray-500">{t.disclaimer}</p>
            <p className="text-sm text-gray-500">{t.note}</p>
          </motion.div>

          <div className="pt-0 flex justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 px-12 py-3 rounded-full text-white cta shadow-lg transition-transform"
            >
              {t.submit}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  )
}
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, FileText } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/ContactUs/ContactInfoTranslations'

export default function ContactInfoComponent() {
  const { language } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <div className='min-h-[50vh] flex items-center justify-center py-10' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='w-full max-w-5xl'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div 
            variants={headingVariants}
            className='text-center mb-12'
          >
            <h1 className={`text-2xl lg:text-3xl font-extrabold heading-gradient mb-3  ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
              {t.title}
            </h1>
            <p className='text-lg text-[#180248] font-medium'>
              {t.subtitle}
            </p>
          </motion.div>

          {/* 2x2 Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            
            {/* REGISTERED ADDRESS */}
            <motion.div variants={itemVariants} className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-7 h-7 text-blue-600' />
                </div>
                <h2 className='text-xl font-bold text-gray-900'>
                  {t.registeredAddress}
                </h2>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                {t.addressLine1}
                <br />
                {t.addressLine2}
              </p>
            </motion.div>

            {/* PHONE NUMBER */}
            <motion.div variants={itemVariants} className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Phone className='w-7 h-7 text-green-600' />
                </div>
                <h2 className='text-xl font-bold text-gray-900'>
                  {t.phoneNumber}
                </h2>
              </div>
              <a
                href='tel:+17585720090'
                className='text-gray-600 hover:text-green-600 transition-colors text-lg font-medium'
              >
                +1 758-572-0090
              </a>
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={itemVariants} className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-7 h-7 text-purple-600' />
                </div>
                <h2 className='text-xl font-bold text-gray-900'>{t.email}</h2>
              </div>
              <a
                href='mailto:geniefxit@gmail.com'
                className='text-gray-600 hover:text-purple-600 transition-colors text-lg font-medium break-all'
              >
                support@geniefx.com
              </a>
            </motion.div>

            {/* REGISTRATION NUMBER */}
            <motion.div variants={itemVariants} className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <FileText className='w-7 h-7 text-orange-600' />
                </div>
                <h2 className='text-xl font-bold text-gray-900'>
                  {t.registrationNumber}
                </h2>
              </div>
              <p className='text-gray-600 text-lg font-medium'>2025-00258</p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
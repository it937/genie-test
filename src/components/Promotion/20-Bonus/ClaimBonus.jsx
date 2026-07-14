'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Promotion/Promotion20/ClaimBonusTranslations'

export default function ClaimBonus() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const t = translations[language]
  const [isExpanded, setIsExpanded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const liveAccountUrl = pathname === '/promotion/20-bonus/pk'
    ? 'https://client.geniefx.com/register-live-trading-account-F1?partner_uuid=30E4A0AE-AEE7-45BA-B7D8-6B6D70487F54&pu=false&source=SalesRegistrationLink&utmSource=Canvas&commissionProfileId=32'
    : 'https://client.geniefx.com/register-live-trading-account-F1?partner_uuid=30E4A0AE-AEE7-45BA-B7D8-6B6D70487F54&pu=false&source=SalesRegistrationLink&utmSource=Canvas&commissionProfileId=32'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tradingAccountNumber: ''
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-20-bonus-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      await response.json()
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsModalOpen(true)
      setFormData({ name: '', email: '', tradingAccountNumber: '' })
      setIsExpanded(false)
      setIsChecked(false)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='claim-bonus-section' className='bg-white py-16 px-4 relative overflow-hidden' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      <div className='max-w-5xl mx-auto relative z-10'>
        <div className='bg-gradient-to-br from-[#52058a] via-[#220470] to-[#0b0237] rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 relative'>
          <div className='relative flex flex-col md:flex-row md:items-center md:justify-between p-8 md:p-10 gap-6'>
            <div className='flex-1'>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 mb-2 animate-pulse ${language === 'ar' ? 'py-4 leading-relaxed' : ''}`}>
                {t.title}
              </h2>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className='relative overflow-hidden group rounded-full px-8 py-4 banner-cta transition-all duration-300'
            >
              <span className='relative z-10 font-bold text-white text-lg'>
                {isExpanded ? t.closeForm : t.claimBonus}
              </span>
            </motion.button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className='overflow-hidden'
              >
                <div className='p-8 md:p-10 pt-0'>
                  <div className='h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-8'></div>

                  <div className='space-y-6'>
                    <div className='group'>
                      <label htmlFor='name' className='block text-purple-200 text-sm font-semibold mb-2'>{t.fullName}</label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-6 py-4 rounded-xl bg-purple-700/50 border-2 border-purple-500/30 text-white placeholder-white/80 focus:border-cyan-400 transition-all'
                        placeholder={t.fullName}
                      />
                    </div>

                    <div className='group'>
                      <label htmlFor='email' className='block text-purple-200 text-sm font-semibold mb-2'>{t.email}</label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-6 py-4 rounded-xl bg-purple-700/50 border-2 border-purple-500/30 text-white placeholder-white/80 focus:border-cyan-400 transition-all'
                        placeholder={t.email}
                      />
                    </div>

                    <div className='group'>
                      <label htmlFor='tradingAccountNumber' className='block text-purple-200 text-sm font-semibold mb-2'>{t.accountNumber}</label>
                      <input
                        type='text'
                        id='tradingAccountNumber'
                        name='tradingAccountNumber'
                        value={formData.tradingAccountNumber}
                        onChange={handleInputChange}
                        required
                        className='w-full px-6 py-4 rounded-xl bg-purple-700/50 border-2 border-purple-500/30 text-white placeholder-white/80 focus:border-cyan-400 transition-all'
                        placeholder={t.accountNumber}
                      />
                    </div>

                    <div className='flex items-start gap-3 mt-6 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20'>
                      <input
                        type='checkbox'
                        id='terms'
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className='w-5 h-5 mt-0.5 cursor-pointer accent-cyan-500'
                      />
                      <label htmlFor='terms' className='text-purple-200 text-sm cursor-pointer'>
                        {t.terms}
                      </label>
                    </div>

                    <div className='pt-4 flex flex-col md:flex-row justify-center gap-4'>
                      <motion.a
                        href={liveAccountUrl}
                        target='_blank'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='relative overflow-hidden group rounded-full px-8 py-4 bg-white transition-all border border-[#180248] flex items-center justify-center'
                      >
                        <span className='relative z-10 font-bold text-[#180248] text-lg'>{t.openAccount}</span>
                      </motion.a>

                      <motion.button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !isChecked}
                        className={`px-6 py-2 rounded-full font-semibold text-white border-2 transition-colors duration-300 relative overflow-hidden group
                          ${isSubmitting || !isChecked ? 'cursor-not-allowed opacity-50 border-gray-400' : 'border-cyan-400 hover:border-purple-400'}`}
                        style={{
                          boxShadow: isSubmitting || !isChecked ? 'none' : '0 0 20px rgba(34, 211, 238, 0.5)',
                          background: 'rgba(0, 0, 0, 0.3)'
                        }}
                      >
                        <span className={`relative z-10 font-bold ${isSubmitting || !isChecked ? 'text-gray-400' : 'text-white'} text-lg`}>
                          {isSubmitting ? t.submitting : t.submitClaim}
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='bg-gradient-to-br from-[#52058a] via-[#220470] to-[#0b0237] rounded-2xl p-8 md:p-10 max-w-md w-full shadow-2xl border border-purple-500/30 relative'
            >
              <div className='text-center relative z-10'>
                <div className='mb-6 flex justify-center'>
                  <div className='rounded-full bg-gradient-to-br from-cyan-500/20 to-green-500/20 p-4 border-2 border-green-400/50'>
                    <svg className='w-16 h-16 text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M5 13l4 4L19 7' />
                    </svg>
                  </div>
                </div>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-4'>
                  {t.successTitle}
                </h3>
                <p className='text-purple-200 mb-8 text-lg'>{t.successMessage}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(false)}
                  className='rounded-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold'
                >
                  {t.close}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

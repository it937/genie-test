'use client'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/PAMM/FAQSectionTranslations'

const FAQs = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const faqs = [
    { question: t.q1, answer: t.a1 },
    { question: t.q2, answer: t.a2 },
    { question: t.q3, answer: t.a3 },
    { question: t.q4, answer: t.a4 },
    { question: t.q5, answer: t.a5 },
    { question: t.q6, answer: t.a6 },
  ]

  return (
    <section className='w-full max-w-4xl mx-auto px-6 py-10' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className='text-3xl font-extrabold mb-8 text-center' style={{ color: '#5a287d' }}>
        {t.title}
      </h2>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} isLast={index === faqs.length - 1} />
        ))}
      </div>
    </section>
  )
}

const FAQItem = ({ faq, isLast }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border-b border-gray-300 ${isLast ? 'last:border-b-0' : ''}`}>
      <button
        className='w-full text-left p-4 flex justify-between items-center gap-4 hover:bg-purple-50 transition-all duration-200 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-md font-semibold text-[#5a287d]'>{faq.question}</span>
        <span className={`text-2xl font-light text-[#5a287d] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className='px-4 pb-4 text-gray-600 text-base leading-relaxed'>{faq.answer}</p>
      </div>
    </div>
  )
}

export default FAQs
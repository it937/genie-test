"use client";

import { useState } from "react";
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/AboutUs/FAQSectionTranslations'

const FAQs = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const faqs = [
    { question: t.faq1Question, answer: t.faq1Answer },
    { question: t.faq2Question, answer: t.faq2Answer },
    { question: t.faq3Question, answer: t.faq3Answer },
    { question: t.faq4Question, answer: t.faq4Answer },
    { question: t.faq5Question, answer: t.faq5Answer },
    { question: t.faq6Question, answer: t.faq6Answer },
    { question: t.faq7Question, answer: t.faq7Answer },
    { question: t.faq8Question, answer: t.faq8Answer },
    { question: t.faq9Question, answer: t.faq9Answer },
    { question: t.faq10Question, answer: t.faq10Answer },
    { question: t.faq11Question, answer: t.faq11Answer },
    { question: t.faq12Question, answer: t.faq12Answer },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8 md:py-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h2
        className="text-3xl font-extrabold mb-8 text-center"
        style={{ color: "#5a287d" }}
      >
        {t.faqs}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} isLast={index === faqs.length - 1} />
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 last:border-b-0">
      <button
        className="w-full text-left p-4 flex justify-between items-center gap-4 hover:bg-purple-50 transition-all duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.question}`}
      >
        <span className="text-md font-semibold text-[#5a287d]">
          {faq.question}
        </span>
        <span 
          className={`text-2xl font-light text-[#5a287d] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        id={`faq-answer-${faq.question}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-4 pb-4 text-gray-600 text-base leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQs;
'use client';

import { motion } from 'framer-motion';
import { Construction, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    badge: 'Policy Page',
    heading: 'Under Construction',
    description:
      'This policy page is being prepared and will be published with full content soon.',
  },
  ar: {
    badge: 'صفحة سياسة',
    heading: 'قيد الإنشاء',
    description:
      'تم تجهيز صفحة هذه السياسة وسيتم نشر محتواها الكامل قريبًا.',
  },
};

export default function UnderConstructionPolicyPage({ titleEn, titleAr }) {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const title = language === 'ar' ? titleAr : titleEn;

  return (
    <main
      className={`min-h-screen bg-[#180248] px-4 py-24 text-white ${
        language === 'ar' ? 'direction-rtl' : ''
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm"
        >
          <div className="relative overflow-hidden px-6 py-14 sm:px-10 sm:py-18">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(113,2,186,0.35),_transparent_35%)]" />

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium">
                <FileText className="h-4 w-4" />
                <span>{t.badge}</span>
              </div>

              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <Construction className="h-10 w-10" />
              </div>

              <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
                {title}
              </h1>

              <h2 className="mt-6 text-xl font-semibold text-white/95 sm:text-2xl">
                {t.heading}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                {t.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

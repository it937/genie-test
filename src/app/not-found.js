'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, SearchX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    eyebrow: '404 Error',
    title: 'Page not found',
    description:
      'The page you requested does not exist or may have been moved.',
    primaryCta: 'Go to homepage',
  },
  ar: {
    eyebrow: 'خطأ 404',
    title: 'الصفحة غير موجودة',
    description: 'الصفحة التي طلبتها غير موجودة أو ربما تم نقلها.',
    primaryCta: 'الذهاب إلى الرئيسية',
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <main
      className={`min-h-screen bg-[#180248] px-4 py-24 ${
        language === 'ar' ? 'direction-rtl' : ''
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/8 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm"
        >
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_32%),linear-gradient(135deg,#180248_0%,#2d1360_45%,#7102ba_100%)] px-8 py-14 text-white sm:px-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium">
                <SearchX className="h-4 w-4" />
                <span>{t.eyebrow}</span>
              </div>

              <div className="mt-8 text-7xl font-black leading-none sm:text-8xl">
                404
              </div>
              <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                {t.title}
              </h1>
            </div>

            <div className="flex items-center px-8 py-14 text-white sm:px-12">
              <div className="w-full">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 p-5 text-white">
                  <Home className="h-8 w-8" />
                </div>

                <p className="max-w-lg text-base leading-8 text-white/75">
                  {t.description}
                </p>

                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#180248] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {t.primaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

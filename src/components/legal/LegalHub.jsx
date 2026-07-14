'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Shield, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import footerTranslations from '@/translations/Footer/FooterTranslations';

const pageTranslations = {
  en: {
    badge: 'Legal Center',
    title: 'Legal & Policies',
    subtitle:
      'Find Genie’s policies, terms, disclosures, and official company documents in one place.',
    eyebrow: 'Official Documents',
    helper: 'Policies, terms, disclosures, and license records',
  },
  ar: {
    badge: 'المركز القانوني',
    title: 'القانون والسياسات',
    subtitle:
      'اعثر على سياسات Genie وشروطها وإفصاحاتها ومستندات الشركة الرسمية في مكان واحد.',
    eyebrow: 'المستندات الرسمية',
    helper: 'السياسات والشروط والإفصاحات وسجلات الترخيص',
  },
};

const legalLinks = (t) => [
  { href: '/policies/order-execution-policy', label: t.orderExecutionPolicy },
  { href: '/policies/conflict-of-interest-policy', label: t.conflictOfInterestPolicy },
  { href: '/policies/complaints-handling-policy', label: t.complaintsHandlingPolicy },
  { href: '/policies/ib-terms-and-conditions', label: t.ibTermsConditions },
  { href: '/policies/payment-terms-and-conditions', label: t.paymentTermsConditions },
  { href: '/policies/swap-free-terms-and-conditions', label: t.swapFreeTermsConditions },
  { href: '/policies/website-acceptance-use-policy', label: t.websiteAcceptableUsePolicy },
  { href: '/policies/website-terms-and-conditions', label: t.websiteTermsConditions },
  { href: '/policies/bonus-terms-and-conditions', label: t.bonusTermsConditions },
  {
    href: '/License/St_Lucia-Certificate-of-Incorporation-Documents-Genie_Ltd.pdf',
    label: t.stLuciaLicense,
    external: true,
  },
];

export default function LegalHub() {
  const { language } = useLanguage();
  const pageT = pageTranslations[language] || pageTranslations.en;
  const t = footerTranslations[language] || footerTranslations.en;
  const links = legalLinks(t);

  return (
    <main
      className={`min-h-screen bg-gradient-to-br from-[#f8f7fc] via-white to-[#f0eef8] ${
        language === 'ar' ? 'direction-rtl' : ''
      }`}
    >
      <section className="relative overflow-hidden bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#180248] px-4 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-15">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '46px 46px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium">
            <Shield className="h-4 w-4" />
            <span>{pageT.badge}</span>
          </div>

          <h1 className={`mb-5 text-3xl font-extrabold md:text-5xl ${language === 'ar' ? 'font-arabic' : ''}`}>
            {pageT.title}
          </h1>

          <p className={`mx-auto max-w-3xl text-sm leading-7 text-white/85 md:text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
            {pageT.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className={`${language === 'ar' ? 'text-right' : ''}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#180248]/45">
                {pageT.eyebrow}
              </p>
              <p className={`mt-2 text-sm text-[#180248]/70 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {pageT.helper}
              </p>
            </div>

            <div className="hidden rounded-full border border-[#180248]/10 bg-white/80 px-4 py-2 text-xs font-medium text-[#180248]/70 shadow-sm md:inline-flex md:items-center md:gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{links.length}</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {links.map((item, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="group relative flex h-full min-h-[130px] flex-col justify-between overflow-hidden rounded-2xl border border-[#180248]/10 bg-white/95 p-5 shadow-[0_20px_60px_rgba(24,2,72,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#180248]/20 hover:shadow-[0_24px_70px_rgba(24,2,72,0.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#5d38ad] opacity-80" />

                  <div className={`flex min-w-0 items-start gap-4 ${language === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#180248]/[0.06] text-[#180248] ring-1 ring-[#180248]/10">
                      <FileText className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#180248]/38">
                        {item.external ? 'PDF Document' : 'Policy Page'}
                      </p>
                      <span className={`block text-sm font-semibold leading-6 text-[#180248] md:text-base ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {item.label}
                      </span>
                    </div>
                  </div>

                  <div className={`mt-5 flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xs font-medium text-[#180248]/45">
                      {item.external ? 'Open document' : 'View details'}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#180248]/[0.05] text-[#180248]/55 transition-all duration-300 group-hover:bg-[#180248] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.div>
              );

              if (item.external) {
                return (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.href} href={item.href}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

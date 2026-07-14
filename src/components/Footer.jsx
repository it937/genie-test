'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import translations from '@/translations/Footer/FooterTranslations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const corePolicyLinks = [
    { href: "/policies/aml-policy", label: t.amlPolicy },
    { href: "/policies/privacy-policy", label: t.privacyPolicy },
    { href: "/policies/risk-statement", label: t.riskStatement },
    { href: "/policies/cookies-policy", label: t.cookiesPolicy },
    { href: "/policies/deposit-withdrawal-terms", label: t.depositWithdrawalTerms },
    { href: "/policies/terms-and-conditions", label: t.termsConditions },
  ];

  return (
    <footer className="bg-[url('/homepage/Homepage-02.webp')] bg-cover bg-center text-white py-12 relative" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Main Columns */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8 pt-4">
        {/* Company */}
        <div>
          <h3 className="font-bold mb-6 text-lg">{t.company}</h3>
          <ul className="space-y-3">
            <li><Link href="/about-us" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.aboutUs}</Link></li>
            <li><Link href="/contact-us" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.contactUs}</Link></li>
            <li><Link href="/holidays-schedule" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.holidaySchedule}</Link></li>
            <li><Link href="/ec" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.economicCalendar}</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.blogs}</Link></li>
            <li><Link href="/legal" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.legalPolicies}</Link></li>
          </ul>
        </div>

        {/* Platforms */}
        <div>
          <h3 className="font-bold mb-6 text-lg">{t.platforms}</h3>
          <ul className="space-y-3">
            <li><Link href="/mt5" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.mt5}</Link></li>
          <li><Link href="/calculator" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.calculator}</Link></li>
          </ul>
        </div>

        {/* Accounts */}
        <div>
          <h3 className="font-bold mb-6 text-lg">{t.accounts}</h3>
          <ul className="space-y-3">
            <li><Link href="/accounts/cent" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.cent}</Link></li>
            <li><Link href="/accounts/standard" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.standard}</Link></li>
            <li><Link href="/accounts/ecn" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.ecn}</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold mb-6 text-lg">{t.products}</h3>
          <ul className="space-y-3">
            <li><Link href="/market/forex" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.forex}</Link></li>
            <li><Link href="/market/indices" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.indices}</Link></li>
            <li><Link href="/market/shares" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.shares}</Link></li>
            <li><Link href="/market/commodities" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.commodities}</Link></li>
            <li><Link href="/market/metals" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.metals}</Link></li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-bold mb-6 text-lg">{t.partner}</h3>
          <ul className="space-y-3">
            <li><Link href="/ib" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.introducingBroker}</Link></li>
            <li><Link href="/liquidity" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.liquidity}</Link></li>
            <li><Link href="/pamm" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.pamm}</Link></li>
          </ul>
        </div>

        {/* Promotion */}
        <div>
          <h3 className="font-bold mb-6 text-lg">{t.promotion}</h3>
          <ul className="space-y-3">
            <li><Link href="/promotion/20-bonus" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.bonus20}</Link></li>
            <li><Link href="/trade-to-win" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.tradeToWin}</Link></li>
            <li><Link href="/ib-reward" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.loyaltyProgram}</Link></li>
            {/* <li><Link href="/promotion/register-20" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 block">{t.register}</Link></li> */}
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 px-4">
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-7xl mx-auto">
          <p className="text-xs leading-relaxed text-gray-400 text-justify">
            {t.disclaimer}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6">
        <div className="flex flex-col items-start gap-3 text-sm">
            <div className="flex items-center gap-4">
              <img src="/homepage/Genie-Logo.svg" alt="Genie Logo" className="h-10" />
              <span className="text-gray-400">{t.copyright}</span>
            </div>
            {/* <div className="text-sm text-gray-300 space-y-1">
              <p>{t.address}</p>
              <p>
                <span className="text-gray-400">Phone:</span>{' '}
                <a href="tel:+971588143643" className="hover:text-white transition-colors font-medium">
                  +971 58 814 3643
                </a>
              </p>
            </div> */}
          </div>

          <div className="flex space-x-6">
            <Link href="https://www.facebook.com/profile.php?id=61578166888617" target="_blank" aria-label="Facebook" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://www.instagram.com/genieltd.mena/" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/108384228/admin/page-posts/published/" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="https://www.tiktok.com/@geniefx_official?_r=1&_t=ZS-91ZxAA6o89f" target="_blank" aria-label="Tiktok" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <FaTiktok size={20} />
            </Link>
            <Link href="https://www.snapchat.com/add/geniefx?share_id=zPKrl4JO3ok&locale=en-GB" target="_blank" aria-label="Snapchat" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <FaSnapchatGhost size={20} />
            </Link>
            <Link href="https://x.com/geniefxofficial" target="_blank" aria-label="X" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <FaXTwitter size={20} />
            </Link>
            <Link href="https://www.youtube.com/@GenieFX_Official" target="_blank" aria-label="Youtube" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-300">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20"></div>

        <div className="py-6 flex flex-col items-center">
          <div className="hidden md:flex flex-wrap justify-center gap-x-8 text-sm text-gray-400">
            {corePolicyLinks.map((policy, index) => (
              <React.Fragment key={policy.href}>
                <Link
                  href={policy.href}
                  className="hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  {policy.label}
                </Link>
                {index < corePolicyLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="md:hidden flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-400">
            {corePolicyLinks.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                className="hover:text-white transition-colors duration-300"
              >
                {policy.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

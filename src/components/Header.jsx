'use client'

import { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Header/HeaderTranslations'
import FlagIcon from 'react-flagkit'

export default function Header () {
  const LIVE_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1'
  const DEMO_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1?p2=Demo&demo=true'

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isAccountsDropdownOpen, setIsAccountsDropdownOpen] = useState(false)
  const [isMarketsDropdownOpen, setIsMarketsDropdownOpen] = useState(false)
  const [isPromotionOpen, setIsPromotionOpen] = useState(false)
  const [isPartnerOpen, setIsPartnerOpen] = useState(false)
  const [isTradingDropdownOpen, setIsTradingDropdownOpen] = useState(false)
  const headerRef = useRef(null)
  const { language, setLanguage } = useLanguage()

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setIsAccountsDropdownOpen(false)
    setIsMarketsDropdownOpen(false)
    setIsPromotionOpen(false)
    setIsPartnerOpen(false)
    setIsTradingDropdownOpen(false)
  }

  // Toggle language dropdown
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  // Toggle accounts dropdown
  const toggleAccountsDropdown = () => {
    setIsAccountsDropdownOpen(!isAccountsDropdownOpen)
  }

  // Toggle markets dropdown
  const toggleMarketsDropdown = () => {
    setIsMarketsDropdownOpen(!isMarketsDropdownOpen)
  }

  // Handle language selection
  const selectLanguage = lang => {
    setLanguage(lang)
    setIsLanguageDropdownOpen(false)
  }

  // Handle scroll effect for background
  useEffect(() => {
    const findScrollableParent = element => {
      let parent = element?.parentElement
      while (parent) {
        const style = window.getComputedStyle(parent)
        const overflowY = style.overflowY
        if (overflowY === 'auto' || overflowY === 'scroll') {
          return parent
        }
        parent = parent.parentElement
      }
      return window
    }

    const handleScroll = event => {
      const target = event?.target || document.documentElement
      const scrollY = target.scrollTop || window.scrollY
      const scrolled = scrollY > 50
      setIsScrolled(scrolled)
    }

    const scrollableContainer = findScrollableParent(headerRef.current)
    scrollableContainer.addEventListener('scroll', handleScroll, {
      passive: true
    })

    handleScroll()

    return () => {
      scrollableContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const t = translations[language]

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full py-3 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled ? 'bg-[#0A1733]/95 shadow-lg' : 'bg-[#0A1733]/0'
        } ${language === 'ar' ? 'font-arabic' : ''}`}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/' className='block'>
                <Image
                  src='/homepage/20251107-184724.webp'
                  alt='Genie Logo'
                  width={90}
                  height={90}
                  className='md:w-[110px] md:h-auto white-svg hover:scale-105 transition-transform duration-300'
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>
              {/* Accounts Dropdown */}
              <div className='relative group'>
                <div className='flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium cursor-pointer'>
                  <span>{t.accounts}</span>
                  <FaChevronDown className='text-xs transition-transform duration-300 group-hover:rotate-180' />
                </div>
                <div className='absolute left-0 mt-3 w-44 bg-[#0A1733]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transform origin-top opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#7102ba]/30'>
                  <Link
                    href='/accounts/cent'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.cent}
                  </Link>
                  <Link
                    href='/accounts/standard'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.standard}
                  </Link>
                  <Link
                    href='/accounts/ecn'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.ecn}
                  </Link>
                </div>
              </div>

              {/* Markets Dropdown */}
              <div className='relative group'>
                <div className='flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium cursor-pointer'>
                  <span>{t.markets}</span>
                  <FaChevronDown className='text-xs transition-transform duration-300 group-hover:rotate-180' />
                </div>
                <div className='absolute left-0 mt-3 w-44 bg-[#0A1733]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transform origin-top opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#7102ba]/30'>
                  <Link
                    href='/market/commodities'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.commodities}
                  </Link>
                  <Link
                    href='/market/forex'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.forex}
                  </Link>
                  <Link
                    href='/market/indices'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.indices}
                  </Link>
                  <Link
                    href='/market/metals'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.metals}
                  </Link>
                  <Link
                    href='/market/shares'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.shares}
                  </Link>
                </div>
              </div>

              {/* Platform Link */}
              <Link
                href='/mt5'
                className='text-white hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium'
              >
                {t.platform}
              </Link>

              {/* Partner Dropdown */}
              <div className='relative group'>
                <div className='flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium cursor-pointer'>
                  <span>{t.partner}</span>
                  <FaChevronDown className='text-xs transition-transform duration-300 group-hover:rotate-180' />
                </div>
                <div className='absolute left-0 mt-3 w-44 bg-[#0A1733]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transform origin-top opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#7102ba]/30'>
                  <Link
                    href='/ib'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.introducingBroker}
                  </Link>
                  <Link
                    href='/liquidity'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.liquidity}
                  </Link>
                </div>
              </div>

              {/* Promotion Dropdown - Pulsating */}
              

              {/* Login Button */}
              <Link
                href='https://client.geniefx.com/login'
                target='_blank'
                className='login-btn px-6 py-2 rounded-full text-[#7102ba] text-sm font-bold border-2 border-[#7102ba] bg-white hover:bg-[#7102ba] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7102ba]/50 hover:scale-105'
              >
                {t.login}
              </Link>

              {/* Start Trading / Open Account Dropdown */}
              <div className='relative group'>
                <button
                  type='button'
                  className='trading-btn flex items-center gap-2 px-6 py-2 rounded-full text-white text-sm font-bold bg-gradient-to-r from-[#180248] to-[#7102ba] hover:from-[#7102ba] hover:to-[#180248] transition-all duration-300 shadow-lg shadow-[#7102ba]/50 hover:shadow-xl hover:shadow-[#7102ba]/70 hover:scale-105 relative min-w-[180px]'
                >
                  <span className='relative flex-1 text-center'>
                    {t.startTrading}
                  </span>
                  <FaChevronDown className='text-xs transition-transform duration-300 group-hover:rotate-180' />
                </button>

                <div className='absolute left-0 mt-3 w-52 bg-[#0A1733]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transform origin-top opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#7102ba]/30'>
                  <Link
                    href={LIVE_ACCOUNT_URL}
                    target='_blank'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.liveAccount}
                  </Link>
                  <Link
                    href={DEMO_ACCOUNT_URL}
                    target='_blank'
                    className='block px-5 py-3 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                  >
                    {t.demoAccount}
                  </Link>
                </div>
              </div>

              {/* Language Selector */}
              <div className='relative'>
                <button
                  onClick={toggleLanguageDropdown}
                  className='flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-[#7102ba]/20 transition-colors duration-300'
                >
                  <FlagIcon
                    country={language === 'en' ? 'GB' : 'AE'}
                    className='w-6 h-4 rounded-sm'
                  />
                  <span className='text-white text-sm font-medium'>
                    {t.language}
                  </span>
                </button>
                {isLanguageDropdownOpen && (
                  <div className='absolute right-0 mt-2 w-24 bg-[#0A1733]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transform origin-top animate-dropdown border border-[#7102ba]/30'>
                    <button
                      onClick={() => selectLanguage('en')}
                      className='flex items-center w-full px-4 py-2 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                    >
                      <FlagIcon
                        country='GB'
                        className='w-5 h-3 mr-2 rounded-sm'
                      />
                      EN
                    </button>
                    <button
                      onClick={() => selectLanguage('ar')}
                      className='flex items-center w-full px-4 py-2 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-sm transition-all duration-300'
                    >
                      <FlagIcon
                        country='AE'
                        className='w-5 h-3 mr-2 rounded-sm'
                      />
                      عربي
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center space-x-3'>
              <div className='relative'>
                <button
                  onClick={toggleLanguageDropdown}
                  className='flex items-center space-x-1 px-2 py-1 rounded-lg hover:bg-[#7102ba]/20 transition-colors duration-300'
                >
                  <FlagIcon
                    country={language === 'en' ? 'GB' : 'AE'}
                    className='w-5 h-3 rounded-sm'
                  />
                </button>
                {isLanguageDropdownOpen && (
                  <div
                    className={`absolute ${
                      language === 'ar' ? 'left-0' : 'right-0'
                    } mt-2 w-20 bg-[#0A1733]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transform origin-top animate-dropdown border border-[#7102ba]/30`}
                  >
                    <button
                      onClick={() => selectLanguage('en')}
                      className='flex items-center w-full px-3 py-2 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-xs transition-all duration-300'
                    >
                      <FlagIcon
                        country='GB'
                        className='w-4 h-2 mr-1 rounded-sm'
                      />
                      EN
                    </button>
                    <button
                      onClick={() => selectLanguage('ar')}
                      className='flex items-center w-full px-3 py-2 text-white hover:bg-gradient-to-r hover:from-[#180248] hover:to-[#7102ba] text-xs transition-all duration-300'
                    >
                      <FlagIcon
                        country='AE'
                        className='w-4 h-2 mr-1 rounded-sm'
                      />
                      عربي
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={toggleMenu}
                className='text-white p-2 hover:bg-[#7102ba]/20 rounded-lg transition-colors duration-300'
              >
                {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden fixed inset-0 top-[80px] z-[9999] animate-slideIn'>
          {/* Backdrop with blur */}
          <div 
            className='absolute inset-0 bg-black/60 backdrop-blur-md'
            onClick={closeMobileMenu}
          />
          
          {/* Menu Container */}
          <div className='relative h-full overflow-y-auto'>
            <div className='min-h-full bg-gradient-to-br from-[#0A1733] via-[#180248] to-[#7102ba] p-6'>
              <nav className='flex flex-col space-y-3'>
                {/* Accounts Dropdown Mobile */}
                <div className='glass-card rounded-2xl overflow-hidden'>
                  <button
                    onClick={toggleAccountsDropdown}
                    className='flex items-center justify-between w-full px-5 py-4 text-white hover:bg-white/10 transition-all duration-300 text-sm font-semibold'
                  >
                    <div className='flex items-center space-x-3'>
                      <span>{t.accounts}</span>
                    </div>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        isAccountsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isAccountsDropdownOpen && (
                    <div className='px-3 pb-3 mt-2 space-y-2 animate-slideDown'>
                      <Link
                        href='/accounts/cent'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.cent}
                      </Link>
                      <Link
                        href='/accounts/standard'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.standard}
                      </Link>
                      <Link
                        href='/accounts/ecn'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.ecn}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Markets Dropdown Mobile */}
                <div className='glass-card rounded-2xl overflow-hidden'>
                  <button
                    onClick={toggleMarketsDropdown}
                    className='flex items-center justify-between w-full px-5 py-4 text-white hover:bg-white/10 transition-all duration-300 text-sm font-semibold'
                  >
                    <div className='flex items-center space-x-3'>
                      <span>{t.markets}</span>
                    </div>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        isMarketsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isMarketsDropdownOpen && (
                    <div className='px-3 pb-3 mt-2 space-y-2 animate-slideDown'>
                      <Link
                        href='/market/commodities'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.commodities}
                      </Link>
                      <Link
                        href='/market/forex'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.forex}
                      </Link>
                      <Link
                        href='/market/indices'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.indices}
                      </Link>
                      <Link
                        href='/market/metals'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.metals}
                      </Link>
                      <Link
                        href='/market/shares'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.shares}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Platform Link */}
                <Link
                  href='/mt5'
                  onClick={closeMobileMenu}
                  className='glass-card rounded-2xl px-5 py-4 text-white hover:bg-white/10 transition-all duration-300 text-sm font-semibold flex items-center space-x-3'
                >
                  <span>{t.platform}</span>
                </Link>

                {/* Partner Dropdown Mobile */}
                <div className='glass-card rounded-2xl overflow-hidden'>
                  <button
                    onClick={() => setIsPartnerOpen(prev => !prev)}
                    className='flex items-center justify-between w-full px-5 py-4 text-white hover:bg-white/10 transition-all duration-300 text-sm font-semibold'
                  >
                    <div className='flex items-center space-x-3'>
                      <span>{t.partner}</span>
                    </div>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        isPartnerOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isPartnerOpen && (
                    <div className='px-3 pb-3 mt-2 space-y-2 animate-slideDown'>
                      <Link
                        href='/ib'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.introducingBroker}
                      </Link>
                      <Link
                        href='/liquidity'
                        onClick={closeMobileMenu}
                        className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10'
                      >
                        {t.liquidity}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Promotion Dropdown Mobile */}
                

                {/* Action Buttons */}
                <div className='pt-4 space-y-3'>
                  <Link
                    href='https://client.geniefx.com/login'
                    target='_blank'
                    onClick={closeMobileMenu}
                    className='block px-6 py-4 rounded-2xl text-[#7102ba] text-sm font-bold border-2 border-white bg-white hover:bg-transparent hover:text-white transition-all text-center shadow-lg shadow-white/20'
                  >
                    {t.login}
                  </Link>

                  <div className='glass-card rounded-2xl overflow-hidden border border-white/10'>
                    <button
                      type='button'
                      onClick={() => setIsTradingDropdownOpen(prev => !prev)}
                      className='flex items-center justify-between w-full px-6 py-4 text-white text-sm font-bold bg-gradient-to-r from-[#D4AF37] via-[#7102ba] to-[#180248] hover:shadow-2xl hover:shadow-[#7102ba]/50 transition-all animate-shimmer'
                    >
                      <span>{t.startTrading}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          isTradingDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isTradingDropdownOpen && (
                      <div className='px-3 pb-3 pt-2 space-y-2 animate-slideDown bg-[#0A1733]/40'>
                        <Link
                          href={LIVE_ACCOUNT_URL}
                          target='_blank'
                          onClick={closeMobileMenu}
                          className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10 text-center'
                        >
                          {t.liveAccount}
                        </Link>
                        <Link
                          href={DEMO_ACCOUNT_URL}
                          target='_blank'
                          onClick={closeMobileMenu}
                          className='block px-5 py-3 text-white/90 hover:text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7102ba]/30 hover:to-[#D4AF37]/30 rounded-xl text-sm transition-all duration-300 border border-white/10 text-center'
                        >
                          {t.demoAccount}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .promotion-glow {
          animation: promotionPulse 2s ease-in-out infinite;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8),
            0 0 20px rgba(255, 215, 0, 0.5);
        }

        @keyframes promotionPulse {
          0%,
          100% {
            color: #ffd700;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.8),
              0 0 20px rgba(255, 215, 0, 0.5);
          }
          50% {
            color: #ffa500;
            text-shadow: 0 0 20px rgba(255, 165, 0, 1),
              0 0 30px rgba(255, 165, 0, 0.7);
          }
        }

        .animate-dropdown {
          animation: dropdown 0.3s ease-out;
        }

        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px) scaleY(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }

        .white-svg {
          filter: brightness(0) invert(1);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(113, 2, 186, 0.2);
        }

        .animate-slideIn {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  )
}

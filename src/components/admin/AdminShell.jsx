'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FileText, Home, KeyRound, LogOut, Newspaper } from 'lucide-react'
import TradingBackgroundPaths from '@/components/ui/trading-background-paths'
import {
  ADMIN_IDLE_LIMIT_MS,
  authHeaders,
  clearAdminToken,
  getAdminToken,
} from './adminClientAuth'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/pdf', label: 'PDF Portal', icon: FileText },
  { href: '/admin/blogs', label: 'Blogs', icon: Newspaper },
  { href: '/admin/password', label: 'Password', icon: KeyRound },
]

export default function AdminShell({ children, title, subtitle }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)
  const idleTimerRef = useRef(null)

  const logout = useCallback(() => {
    clearAdminToken()
    router.replace('/admin/login')
  }, [router])

  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      window.clearTimeout(idleTimerRef.current)
    }

    idleTimerRef.current = window.setTimeout(logout, ADMIN_IDLE_LIMIT_MS)
  }, [logout])

  useEffect(() => {
    const token = getAdminToken()

    if (!token) {
      router.replace('/admin/login')
      return
    }

    async function validateSession() {
      try {
        const response = await fetch('/api/admin/me', {
          headers: authHeaders(),
          cache: 'no-store',
        })

        if (!response.ok) {
          logout()
          return
        }

        setIsReady(true)
        resetIdleTimer()
      } catch {
        logout()
      }
    }

    validateSession()
  }, [logout, resetIdleTimer, router])

  useEffect(() => {
    if (!isReady) {
      return
    }

    const events = ['click', 'keydown', 'mousemove', 'scroll', 'touchstart']

    events.forEach((eventName) => {
      window.addEventListener(eventName, resetIdleTimer, { passive: true })
    })

    return () => {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, resetIdleTimer)
      })

      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current)
      }
    }
  }, [isReady, resetIdleTimer])

  if (!isReady) {
    return (
      <main className='relative isolate min-h-screen overflow-hidden bg-[#180248] px-6 py-10 text-white'>
        <TradingBackgroundPaths />
        <div className='relative z-10 mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center'>
          <div className='rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold shadow-2xl backdrop-blur'>
            Checking admin session...
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='relative isolate min-h-screen overflow-hidden bg-[#180248] px-4 py-5 text-white md:px-8'>
      <TradingBackgroundPaths />

      <div className='relative z-10 mx-auto max-w-[1500px]'>
        <header className='mb-5 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl'>
          <div className='flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between'>
            <div className='flex items-center gap-3'>
              <img src='/homepage/Genie-Logo.svg' alt='Genie' className='h-9' />
              <div>
                <p className='text-xs uppercase tracking-[0.24em] text-white/55'>
                  Genie
                </p>
                <p className='font-bold'>Admin</p>
              </div>
            </div>

            <nav className='grid gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap'>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =
                item.href === '/admin'
                  ? pathname === item.href
                  : pathname?.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-white text-[#180248] shadow-lg'
                      : 'text-white/78 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              )
            })}
            </nav>

            <button
              type='button'
              onClick={logout}
              className='flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-white/85 transition hover:bg-white hover:text-[#180248]'
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </header>

        <section className='min-w-0'>
          <header className='mb-6 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl'>
            <p className='text-xs font-bold uppercase tracking-[0.35em] text-[#d9b8ff]'>
              Admin Panel
            </p>
            <h1 className='mt-3 text-3xl font-black tracking-tight md:text-4xl'>
              {title}
            </h1>
            {subtitle ? (
              <p className='mt-2 max-w-3xl text-sm leading-6 text-white/70'>
                {subtitle}
              </p>
            ) : null}
          </header>

          {children}
        </section>
      </div>
    </main>
  )
}

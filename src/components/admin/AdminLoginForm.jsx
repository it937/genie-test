'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockKeyhole } from 'lucide-react'
import { authHeaders, getAdminToken, setAdminToken } from './adminClientAuth'
import TradingBackgroundPaths from '@/components/ui/trading-background-paths'

export default function AdminLoginForm() {
  const router = useRouter()
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [error, setError] = useState('')
  const [isBusy, setIsBusy] = useState(false)

  useEffect(() => {
    const token = getAdminToken()

    if (!token) {
      return
    }

    async function validateSession() {
      const response = await fetch('/api/admin/me', {
        headers: authHeaders(),
        cache: 'no-store',
      })

      if (response.ok) {
        router.replace('/admin')
      }
    }

    validateSession()
  }, [router])

  async function handleSubmit(event) {
    event.preventDefault()
    setIsBusy(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Login failed.')
        return
      }

      setAdminToken(data.token)
      router.replace('/admin')
    } catch {
      setError('Unable to log in right now.')
    } finally {
      setIsBusy(false)
    }
  }

  return (
    <main className='relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#180248] px-4 py-10 text-white'>
      <TradingBackgroundPaths />
      <section className='relative z-10 w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-xl'>
        <div className='mb-7 flex items-center gap-3'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#180248]'>
            <LockKeyhole size={23} />
          </div>
          <div>
            <p className='text-xs font-bold uppercase tracking-[0.3em] text-[#d9b8ff]'>
              Genie
            </p>
            <h1 className='text-2xl font-black'>Admin Login</h1>
          </div>
        </div>

        <form className='space-y-5' onSubmit={handleSubmit}>
          <label className='block'>
            <span className='mb-2 block text-sm font-semibold text-white/82'>
              Username or Email
            </span>
            <input
              className='w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-[#180248] outline-none transition focus:ring-4 focus:ring-white/20'
              type='text'
              value={form.identifier}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  identifier: event.target.value,
                }))
              }
              autoComplete='username'
              required
            />
          </label>

          <label className='block'>
            <span className='mb-2 block text-sm font-semibold text-white/82'>
              Password
            </span>
            <input
              className='w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-[#180248] outline-none transition focus:ring-4 focus:ring-white/20'
              type='password'
              value={form.password}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
              autoComplete='current-password'
              required
            />
          </label>

          <button
            type='submit'
            disabled={isBusy}
            className='w-full rounded-xl bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#180248] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60'
          >
            {isBusy ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {error ? <p className='mt-4 text-sm text-[#ffd1d1]'>{error}</p> : null}
      </section>
    </main>
  )
}

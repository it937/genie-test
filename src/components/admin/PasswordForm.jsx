'use client'

import { useState } from 'react'
import { KeyRound } from 'lucide-react'
import AdminShell from './AdminShell'
import { authHeaders, setAdminToken } from './adminClientAuth'

export default function PasswordForm() {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [isBusy, setIsBusy] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('')
    setError('')

    if (form.newPassword !== form.confirmPassword) {
      setError('New password and confirmation do not match.')
      return
    }

    setIsBusy(true)

    try {
      const response = await fetch('/api/admin/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...authHeaders(),
        },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Unable to update password.')
        return
      }

      setAdminToken(data.token)
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setStatus(data.message || 'Password updated successfully.')
    } catch {
      setError('Unable to update password right now.')
    } finally {
      setIsBusy(false)
    }
  }

  return (
    <AdminShell
      title='Update Password'
      subtitle='Change the password for the current Mongo admin account.'
    >
      <section className='max-w-xl rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl'>
        <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#180248] to-[#7102ba] text-white'>
          <KeyRound size={23} />
        </div>

        <form className='space-y-5' onSubmit={handleSubmit}>
          {[
            ['currentPassword', 'Current Password'],
            ['newPassword', 'New Password'],
            ['confirmPassword', 'Confirm New Password'],
          ].map(([name, label]) => (
            <label key={name} className='block'>
              <span className='mb-2 block text-sm font-bold'>{label}</span>
              <input
                className='w-full rounded-xl border border-[#180248]/15 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7102ba]/15'
                type='password'
                value={form[name]}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    [name]: event.target.value,
                  }))
                }
                minLength={name === 'currentPassword' ? undefined : 8}
                required
              />
            </label>
          ))}

          <button
            type='submit'
            disabled={isBusy}
            className='w-full rounded-xl bg-gradient-to-r from-[#180248] to-[#7102ba] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60'
          >
            {isBusy ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        {error ? <p className='mt-4 text-sm text-red-600'>{error}</p> : null}
        {status ? (
          <p className='mt-4 text-sm font-semibold text-[#7102ba]'>{status}</p>
        ) : null}
      </section>
    </AdminShell>
  )
}

'use client'

import Link from 'next/link'
import { FileText, KeyRound, Newspaper } from 'lucide-react'
import AdminShell from './AdminShell'

const cards = [
  {
    href: '/admin/pdf',
    title: 'PDF Portal',
    description: 'Replace the live daily PDF used by the public download page.',
    icon: FileText,
  },
  {
    href: '/admin/blogs',
    title: 'Blogs',
    description: 'Create, edit, publish, and delete Mongo-backed blog posts.',
    icon: Newspaper,
  },
  {
    href: '/admin/password',
    title: 'Admin Password',
    description: 'Update the current Mongo admin account password securely.',
    icon: KeyRound,
  },
]

export default function AdminDashboard() {
  return (
    <AdminShell
      title='Dashboard'
      subtitle='Manage the live PDF, public blog content, and admin account access from one place.'
    >
      <div className='grid gap-5 md:grid-cols-3'>
        {cards.map((card) => {
          const Icon = card.icon

          return (
            <Link
              key={card.href}
              href={card.href}
              className='group rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl transition hover:-translate-y-1 hover:shadow-white/10'
            >
              <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#180248] to-[#7102ba] text-white'>
                <Icon size={24} />
              </div>
              <h2 className='text-xl font-black'>{card.title}</h2>
              <p className='mt-3 text-sm leading-6 text-[#180248]/70'>
                {card.description}
              </p>
              <p className='mt-6 text-sm font-bold text-[#7102ba] transition group-hover:text-[#180248]'>
                Open module
              </p>
            </Link>
          )
        })}
      </div>
    </AdminShell>
  )
}

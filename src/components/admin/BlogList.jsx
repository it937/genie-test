'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Edit3, Plus, Search, Trash2 } from 'lucide-react'
import AdminShell from './AdminShell'
import { authHeaders } from './adminClientAuth'

function formatDate(value) {
  if (!value) {
    return ''
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(value))
}

export default function BlogList() {
  const [blogs, setBlogs] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadBlogs() {
      try {
        const response = await fetch('/api/blogs?all=true', {
          headers: authHeaders(),
          cache: 'no-store',
        })

        if (!response.ok) {
          setError('Unable to load blogs.')
          return
        }

        setBlogs(await response.json())
      } catch {
        setError('Unable to load blogs.')
      } finally {
        setIsLoading(false)
      }
    }

    loadBlogs()
  }, [])

  const filteredBlogs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return blogs
    }

    return blogs.filter((blog) => {
      return [blog.slug, blog.content?.en?.title, blog.content?.ar?.title]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalizedQuery))
    })
  }, [blogs, query])

  async function deleteBlog(id) {
    const confirmed = window.confirm('Delete this blog? This cannot be undone.')

    if (!confirmed) {
      return
    }

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: authHeaders(),
      })

      if (!response.ok) {
        setError('Unable to delete blog.')
        return
      }

      setBlogs((current) => current.filter((blog) => blog._id !== id))
    } catch {
      setError('Unable to delete blog.')
    }
  }

  return (
    <AdminShell
      title='Blogs'
      subtitle='Manage public Mongo-backed blog posts and bilingual content.'
    >
      <section className='rounded-2xl border border-white/15 bg-white/95 p-5 text-[#180248] shadow-2xl'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='relative md:w-96'>
            <Search
              className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#180248]/45'
              size={18}
            />
            <input
              className='w-full rounded-xl border border-[#180248]/12 bg-[#f8f4ff] py-3 pl-11 pr-4 text-sm outline-none focus:ring-4 focus:ring-[#7102ba]/15'
              placeholder='Search by title or slug'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <Link
            href='/admin/blogs/new'
            className='inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#180248] to-[#7102ba] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-white'
          >
            <Plus size={18} />
            Add Blog
          </Link>
        </div>

        {error ? <p className='mt-4 text-sm text-red-600'>{error}</p> : null}

        <div className='mt-6 overflow-hidden rounded-xl border border-[#180248]/10'>
          {isLoading ? (
            <p className='p-5 text-sm text-[#180248]/65'>Loading blogs...</p>
          ) : filteredBlogs.length ? (
            <div className='divide-y divide-[#180248]/10'>
              {filteredBlogs.map((blog) => (
                <article
                  key={blog._id}
                  className='grid gap-4 p-4 md:grid-cols-[80px_1fr_auto]'
                >
                  <div className='h-20 w-20 overflow-hidden rounded-xl bg-[#efe7ff]'>
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt=''
                        className='h-full w-full object-cover'
                      />
                    ) : null}
                  </div>
                  <div className='min-w-0'>
                    <h2 className='truncate text-lg font-black'>
                      {blog.content?.en?.title || blog.slug}
                    </h2>
                    <p className='mt-1 truncate text-sm text-[#180248]/60'>
                      {blog.slug}
                    </p>
                    <p className='mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7102ba]'>
                      {blog.published ? 'Published' : 'Draft'} /{' '}
                      {formatDate(blog.createdAt)}
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Link
                      href={`/admin/blogs/edit/${blog._id}`}
                      className='rounded-xl border border-[#180248]/12 p-3 text-[#180248] transition hover:bg-[#180248] hover:text-white'
                      aria-label='Edit blog'
                    >
                      <Edit3 size={18} />
                    </Link>
                    <button
                      type='button'
                      onClick={() => deleteBlog(blog._id)}
                      className='rounded-xl border border-red-200 p-3 text-red-600 transition hover:bg-red-600 hover:text-white'
                      aria-label='Delete blog'
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className='p-5 text-sm text-[#180248]/65'>No blogs found.</p>
          )}
        </div>
      </section>
    </AdminShell>
  )
}

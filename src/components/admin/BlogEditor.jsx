'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BookOpen, Eye, ImageIcon, Save } from 'lucide-react'
import AdminShell from './AdminShell'
import { authHeaders } from './adminClientAuth'
import { htmlToText, textToHtml } from './blogFormat'

const emptyForm = {
  slug: '',
  image: '',
  published: true,
  author: 'Genie Ltd.',
  readingTime: '',
  excerpt: '',
  tags: '',
  seo: {
    metaTitle: '',
    metaDescription: '',
    ogImage: '',
    canonicalUrl: '',
  },
  content: {
    en: {
      title: '',
      body: '',
    },
    ar: {
      title: '',
      body: '',
    },
  },
}

export default function BlogEditor({ blogId }) {
  const router = useRouter()
  const isEditing = Boolean(blogId)
  const [savedBlogId, setSavedBlogId] = useState(blogId || '')
  const [form, setForm] = useState(emptyForm)
  const [activeLanguage, setActiveLanguage] = useState('en')
  const [previewLanguage, setPreviewLanguage] = useState('en')
  const [error, setError] = useState('')
  const [isBusy, setIsBusy] = useState(false)
  const [isLoading, setIsLoading] = useState(isEditing)

  useEffect(() => {
    if (!isEditing) {
      return
    }

    async function loadBlog() {
      try {
        const response = await fetch(`/api/blogs/${blogId}`, {
          headers: authHeaders(),
          cache: 'no-store',
        })

        if (!response.ok) {
          setError('Unable to load blog.')
          return
        }

        const blog = await response.json()
        setForm({
          slug: blog.slug || '',
          image: blog.image || '',
          published: blog.published !== false,
          author: blog.author || 'Genie Ltd.',
          readingTime: blog.readingTime || '',
          excerpt: blog.excerpt || '',
          tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
          seo: {
            metaTitle: blog.seo?.metaTitle || '',
            metaDescription: blog.seo?.metaDescription || '',
            ogImage: blog.seo?.ogImage || '',
            canonicalUrl: blog.seo?.canonicalUrl || '',
          },
          content: {
            en: {
              title: blog.content?.en?.title || '',
              body: htmlToText(blog.content?.en?.body || ''),
            },
            ar: {
              title: blog.content?.ar?.title || '',
              body: htmlToText(blog.content?.ar?.body || ''),
            },
          },
        })
      } catch {
        setError('Unable to load blog.')
      } finally {
        setIsLoading(false)
      }
    }

    loadBlog()
  }, [blogId, isEditing])

  function updateField(path, value) {
    setForm((current) => {
      const next = structuredClone(current)
      const keys = path.split('.')
      let target = next

      keys.slice(0, -1).forEach((key) => {
        target = target[key]
      })

      target[keys.at(-1)] = value
      return next
    })
  }

  function handleImageUpload(event) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      updateField('image', reader.result)

      if (!form.seo.ogImage) {
        updateField('seo.ogImage', reader.result)
      }
    }
    reader.readAsDataURL(file)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsBusy(true)
    setError('')

    const payload = {
      ...form,
      slug: form.slug.trim().replace(/^\/?blog\//, ''),
      tags: form.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
      seo: {
        ...form.seo,
        ogImage: form.seo.ogImage || form.image,
      },
      content: {
        en: {
          title: form.content.en.title.trim(),
          body: textToHtml(form.content.en.body),
        },
        ar: {
          title: form.content.ar.title.trim(),
          body: textToHtml(form.content.ar.body),
        },
      },
    }

    try {
      const activeBlogId = blogId || savedBlogId
      const response = await fetch(activeBlogId ? `/api/blogs/${activeBlogId}` : '/api/blogs', {
        method: activeBlogId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authHeaders(),
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Unable to save blog.')
        return
      }

      if (!activeBlogId && data?._id) {
        setSavedBlogId(data._id)
        window.history.replaceState(null, '', `/admin/blogs/edit/${data._id}`)
        setError('')
        return
      }

      router.push('/admin/blogs')
      router.refresh()
    } catch {
      setError('Unable to save blog right now.')
    } finally {
      setIsBusy(false)
    }
  }

  const preview = {
    title: form.content[previewLanguage].title,
    body: textToHtml(form.content[previewLanguage].body),
  }

  return (
    <AdminShell
      title={isEditing ? 'Edit Blog' : 'New Blog'}
      subtitle='Write bilingual blog content, upload a base64 image, and preview the rendered article before publishing.'
    >
      {isLoading ? (
        <div className='rounded-2xl border border-white/15 bg-white/95 p-6 text-sm text-[#180248]/65 shadow-2xl'>
          Loading blog...
        </div>
      ) : (
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]'>
            <section className='rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl md:p-8'>
              <div className='mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                <div>
                  <p className='text-xs font-black uppercase tracking-[0.28em] text-[#7102ba]'>
                    Content
                  </p>
                  <h2 className='mt-2 text-2xl font-black'>Write Blog</h2>
                </div>
                <div className='flex rounded-xl bg-[#f1e9ff] p-1'>
                  {[
                    ['en', 'English'],
                    ['ar', 'Arabic'],
                  ].map(([language, label]) => (
                    <button
                      key={language}
                      type='button'
                      onClick={() => {
                        setActiveLanguage(language)
                        setPreviewLanguage(language)
                      }}
                      className={`rounded-lg px-5 py-2 text-sm font-black ${
                        activeLanguage === language
                          ? 'bg-[#180248] text-white'
                          : 'text-[#180248]/65'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className='grid gap-5 lg:grid-cols-[1fr_220px]'>
                <TextInput
                  label={activeLanguage === 'ar' ? 'Arabic Title' : 'English Title'}
                  value={form.content[activeLanguage].title}
                  onChange={(value) =>
                    updateField(`content.${activeLanguage}.title`, value)
                  }
                  required={activeLanguage === 'en'}
                  dir={activeLanguage === 'ar' ? 'rtl' : undefined}
                />
                <TextInput
                  label='Slug'
                  value={form.slug}
                  onChange={(value) => updateField('slug', value)}
                  required
                />
              </div>

              <div className='mt-5 grid gap-5 md:grid-cols-2'>
                <TextInput
                  label='Author'
                  value={form.author}
                  onChange={(value) => updateField('author', value)}
                />
                <TextInput
                  label='Reading Time'
                  value={form.readingTime}
                  onChange={(value) => updateField('readingTime', value)}
                  placeholder='approximately 7 minutes'
                />
              </div>

              <div className='mt-5'>
                <TextArea
                  label='Excerpt'
                  value={form.excerpt}
                  onChange={(value) => updateField('excerpt', value)}
                  rows={3}
                />
              </div>

              <div className='mt-5'>
                <TextArea
                  label={activeLanguage === 'ar' ? 'Arabic Body' : 'English Body'}
                  value={form.content[activeLanguage].body}
                  onChange={(value) =>
                    updateField(`content.${activeLanguage}.body`, value)
                  }
                  required={activeLanguage === 'en'}
                  rows={15}
                  dir={activeLanguage === 'ar' ? 'rtl' : undefined}
                />
              </div>

              <div className='mt-6 rounded-2xl border border-[#180248]/10 bg-[#f8f4ff] p-5'>
                <div className='mb-3 flex items-center gap-2 text-sm font-black'>
                  <BookOpen size={18} />
                  Formatting Guide
                </div>
                <div className='grid gap-3 text-sm leading-6 text-[#180248]/72 md:grid-cols-2'>
                  <p>
                    Use <strong>## Heading</strong> for large headings and{' '}
                    <strong>### Heading</strong> for smaller headings.
                  </p>
                  <p>
                    Use <strong>**bold**</strong>, <strong>*italic*</strong>,
                    and lines beginning with <strong>- </strong> for lists.
                  </p>
                  <p>
                    Paste clean article sections without the word{' '}
                    <strong>Shape</strong>. Use comma-separated tags in SEO.
                  </p>
                </div>
              </div>
            </section>

            <aside className='space-y-6'>
              <section className='rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl'>
                <p className='text-xs font-black uppercase tracking-[0.28em] text-[#7102ba]'>
                  Publish
                </p>
                <label className='mt-5 flex items-center justify-between gap-3 rounded-xl border border-[#180248]/10 bg-[#f8f4ff] p-4 text-sm font-bold'>
                  Published
                  <input
                    type='checkbox'
                    checked={form.published}
                    onChange={(event) =>
                      updateField('published', event.target.checked)
                    }
                  />
                </label>

                {error ? <p className='mt-4 text-sm text-red-600'>{error}</p> : null}

                <button
                  type='submit'
                  disabled={isBusy}
                  className='mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#180248] to-[#7102ba] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60'
                >
                  <Save size={18} />
                  {isBusy ? 'Saving...' : 'Save Blog'}
                </button>
              </section>

              <section className='rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl'>
                <div className='mb-4 flex items-center gap-2 text-sm font-black'>
                  <ImageIcon size={18} />
                  Featured Image
                </div>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                  className='block w-full rounded-xl border border-dashed border-[#180248]/25 bg-[#f8f4ff] px-4 py-4 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[#180248] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-white'
                />

                {form.image ? (
                  <img
                    src={form.image}
                    alt=''
                    className='mt-4 aspect-[16/10] w-full rounded-xl object-cover'
                  />
                ) : (
                  <div className='mt-4 flex aspect-[16/10] items-center justify-center rounded-xl bg-[#f1e9ff] text-sm font-bold text-[#180248]/45'>
                    No image selected
                  </div>
                )}
              </section>

              <section className='rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl'>
                <p className='text-xs font-black uppercase tracking-[0.28em] text-[#7102ba]'>
                  SEO
                </p>
                <div className='mt-5 space-y-4'>
                  <TextInput
                    label='Meta Title'
                    value={form.seo.metaTitle}
                    onChange={(value) => updateField('seo.metaTitle', value)}
                  />
                  <TextInput
                    label='Canonical URL'
                    value={form.seo.canonicalUrl}
                    onChange={(value) => updateField('seo.canonicalUrl', value)}
                  />
                  <TextArea
                    label='Meta Description'
                    value={form.seo.metaDescription}
                    onChange={(value) =>
                      updateField('seo.metaDescription', value)
                    }
                    rows={4}
                  />
                  <TextInput
                    label='Tags'
                    value={form.tags}
                    onChange={(value) => updateField('tags', value)}
                    placeholder='Market Analysis, Gold, Forex'
                  />
                </div>
              </section>
            </aside>
          </div>

          <section className='rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl md:p-8'>
            <div className='mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
              <div>
                <div className='flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-[#7102ba]'>
                  <Eye size={17} />
                  Preview
                </div>
                <h2 className='mt-2 text-2xl font-black'>Rendered Blog Preview</h2>
              </div>
              <div className='flex rounded-xl bg-[#f1e9ff] p-1'>
                {['en', 'ar'].map((language) => (
                  <button
                    key={language}
                    type='button'
                    onClick={() => setPreviewLanguage(language)}
                    className={`rounded-lg px-5 py-2 text-sm font-black uppercase ${
                      previewLanguage === language
                        ? 'bg-[#180248] text-white'
                        : 'text-[#180248]/65'
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>

            <article
              className='blog-body rounded-2xl border border-[#180248]/10 bg-white p-6 shadow-inner md:p-8'
              dir={previewLanguage === 'ar' ? 'rtl' : 'ltr'}
            >
              <h1 className='mb-5 text-4xl font-black text-[#180248]'>
                {preview.title || 'Preview title'}
              </h1>
              {form.excerpt ? (
                <p className='text-lg font-semibold text-[#180248]/70'>
                  {form.excerpt}
                </p>
              ) : null}
              <div dangerouslySetInnerHTML={{ __html: preview.body }} />
            </article>
          </section>
        </form>
      )}
    </AdminShell>
  )
}

function TextInput({ label, value, onChange, required, dir, placeholder }) {
  return (
    <label className='block'>
      <span className='mb-2 block text-sm font-bold'>{label}</span>
      <input
        className='w-full rounded-xl border border-[#180248]/15 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7102ba]/15'
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        dir={dir}
        placeholder={placeholder}
      />
    </label>
  )
}

function TextArea({ label, value, onChange, required, rows = 8, dir }) {
  return (
    <label className='block'>
      <span className='mb-2 block text-sm font-bold'>{label}</span>
      <textarea
        className='w-full rounded-xl border border-[#180248]/15 bg-white px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7102ba]/15'
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        rows={rows}
        dir={dir}
      />
    </label>
  )
}

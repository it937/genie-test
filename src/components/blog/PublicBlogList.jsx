'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Clock, LoaderCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import translations from '@/translations/Blog/BlogTranslations'

const PAGE_SIZE = 9

function formatDate(value) {
  if (!value) {
    return ''
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(value))
}

export default function PublicBlogList() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const isArabic = language === 'ar'
  const [blogs, setBlogs] = useState([])
  const [hasMoreBlogs, setHasMoreBlogs] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [error, setError] = useState('')
  const loadMoreRef = useRef(null)

  const loadBlogs = useCallback(
    async ({ skip = 0, append = false } = {}) => {
      try {
        if (append) {
          setIsLoadingMore(true)
        } else {
          setIsLoading(true)
        }

        const response = await fetch(`/api/blogs?limit=${PAGE_SIZE}&skip=${skip}`)

        if (!response.ok) {
          setError(t.loadError)
          return
        }

        const data = await response.json()
        setBlogs((currentBlogs) =>
          append ? [...currentBlogs, ...(data.items || [])] : data.items || []
        )
        setHasMoreBlogs(Boolean(data.hasMore))
      } catch {
        setError(t.loadError)
      } finally {
        setIsLoading(false)
        setIsLoadingMore(false)
      }
    },
    [t.loadError]
  )

  useEffect(() => {
    setBlogs([])
    setHasMoreBlogs(false)
    loadBlogs()
  }, [language, loadBlogs])

  useEffect(() => {
    const target = loadMoreRef.current

    if (!target || isLoading || isLoadingMore || !hasMoreBlogs) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadBlogs({ skip: blogs.length, append: true })
        }
      },
      { rootMargin: '360px 0px' }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [blogs.length, hasMoreBlogs, isLoading, isLoadingMore, loadBlogs])

  const visibleBlogs = useMemo(() => {
    return blogs
  }, [blogs])

  return (
    <main
      className='min-h-screen overflow-hidden bg-[#10002f] text-[#180248]'
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <HeroGeometric
        badge={t.eyebrow}
        title1={t.title}
        title2={isArabic ? 'Genie' : 'Insights'}
        description={t.description}
        dir={isArabic ? 'ar' : 'ltr'}
      />

      <section className='relative -mt-20 min-h-[calc(100vh-420px)] px-4 pb-20 pt-0 sm:px-6 lg:px-8'>
        <div className='absolute inset-x-0 top-20 bottom-0 rounded-t-[2.5rem] bg-[linear-gradient(180deg,#fbf7ff_0%,#f4edff_62%,#fbf8ff_100%)] shadow-[0_-24px_80px_rgba(24,2,72,0.14)]' />
        <div className='relative mx-auto max-w-6xl rounded-[2rem] border border-[#180248]/10 bg-[#fbf7ff]/88 p-3 shadow-[0_30px_100px_rgba(24,2,72,0.12)] backdrop-blur-xl sm:p-5'>
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
            >
              {Array.from({ length: 9 }, (_, index) => (
                <motion.div
                  key={index}
                  className='min-h-[320px] rounded-2xl border border-[#180248]/10 bg-[#f6f0ff] p-6 shadow-xl'
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{
                    duration: 1.6,
                    delay: index * 0.06,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <LoaderCircle className='mb-8 animate-spin text-[#7102ba]' />
                  <div className='mb-4 h-5 w-2/3 rounded-full bg-[#180248]/12' />
                  <div className='mb-3 h-4 w-full rounded-full bg-[#180248]/10' />
                  <div className='h-4 w-4/5 rounded-full bg-[#180248]/10' />
                </motion.div>
              ))}
            </motion.div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className='rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-700 shadow-xl'
            >
              {error}
            </motion.div>
          ) : visibleBlogs.length ? (
            <>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {visibleBlogs.map((blog) => {
                  const content = blog.content?.[language] || blog.content?.en

                  return (
                    <motion.div
                      key={blog._id}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className='h-full'
                    >
                      <Link
                        href={`/blog/${blog.slug}`}
                        className='group flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#180248] via-[#7102ba] to-[#22d3ee] p-[1px] text-white shadow-[0_24px_70px_rgba(24,2,72,0.16)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(24,2,72,0.24)]'
                      >
                        <div className='flex h-full flex-col overflow-hidden rounded-[15px] bg-[#fffafd]'>
                          <div className='relative aspect-[16/10] overflow-hidden bg-[#2b1165]'>
                            {blog.image ? (
                              <img
                                src={blog.image}
                                alt=''
                                className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                              />
                            ) : (
                              <div className='flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(192,132,252,0.4),transparent_35%),linear-gradient(135deg,#180248,#7102ba)] text-sm font-black uppercase tracking-[0.3em] text-white/50'>
                                {t.fallbackImageText}
                              </div>
                            )}
                            <div className='absolute inset-0 bg-gradient-to-t from-[#180248]/40 to-transparent' />
                          </div>

                          <div
                            className={`flex flex-1 flex-col bg-[#fffafd] p-6 ${
                              isArabic ? 'text-right' : 'text-left'
                            }`}
                          >
                            <div
                              className={`mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#7102ba]/80 ${
                                isArabic ? 'justify-end' : 'justify-start'
                              }`}
                            >
                              <span className='inline-flex items-center gap-2'>
                                <CalendarDays size={15} />
                                {formatDate(blog.createdAt)}
                              </span>
                              {blog.readingTime ? (
                                <span className='inline-flex items-center gap-2 rounded-full bg-[#7102ba]/[0.08] px-2.5 py-1 text-[#180248]/75'>
                                  <Clock size={14} />
                                  {blog.readingTime}
                                </span>
                              ) : null}
                            </div>
                            <h2
                              className='line-clamp-3 text-2xl font-black leading-tight text-[#180248]'
                              dir={language === 'ar' ? 'rtl' : 'ltr'}
                            >
                              {content?.title || blog.slug}
                            </h2>

                            {blog.excerpt ? (
                              <p className='mt-4 line-clamp-3 text-sm font-medium leading-6 text-[#180248]/68'>
                                {blog.excerpt}
                              </p>
                            ) : null}

                            <span
                              className={`mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-[#7102ba] ${
                                isArabic ? 'self-end' : 'self-start'
                              }`}
                            >
                              {t.readMore}
                              <ArrowRight
                                size={17}
                                className={isArabic ? 'rotate-180' : ''}
                              />
                            </span>
                            {Array.isArray(blog.tags) && blog.tags.length ? (
                              <div
                                className={`mt-5 flex flex-wrap gap-2 ${
                                  isArabic ? 'justify-end' : 'justify-start'
                                }`}
                              >
                                {blog.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className='rounded-full bg-[#180248]/[0.06] px-3 py-1 text-xs font-bold text-[#180248]/70 ring-1 ring-[#180248]/10'
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div ref={loadMoreRef} className='mt-10 flex min-h-12 justify-center'>
                {hasMoreBlogs ? (
                  <div className='inline-flex items-center gap-3 rounded-full border border-[#180248]/10 bg-[#fffafd] px-5 py-3 text-sm font-bold text-[#180248]/70 shadow-lg'>
                    <LoaderCircle className='animate-spin text-[#7102ba]' size={18} />
                    {t.loading}
                  </div>
                ) : (
                  <div className='h-1 w-12 rounded-full bg-[#180248]/15' />
                )}
                </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className='rounded-2xl border border-[#180248]/10 bg-[#fffafd] p-10 text-center shadow-2xl'
            >
              <p className='text-xs font-bold uppercase tracking-[0.32em] text-[#d9b8ff]'>
                {t.noBlogEyebrow}
              </p>
              <h2 className='mt-3 text-3xl font-black text-[#180248]'>
                {t.noBlogTitle}
              </h2>
              <p className='mx-auto mt-3 max-w-xl text-sm leading-6 text-[#180248]/65'>
                {t.noBlogDescription}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}

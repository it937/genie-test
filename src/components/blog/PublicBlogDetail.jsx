'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { GeometricBlogBackground } from '@/components/ui/shape-landing-hero'
import translations from '@/translations/Blog/BlogTranslations'

const RELATED_PAGE_SIZE = 4

function formatDate(value) {
  if (!value) {
    return ''
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(value))
}

function RelatedBlogCard({ blog, language, isArabic, t }) {
  const content = blog.content?.[language] || blog.content?.en

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className='group block rounded-2xl border border-[#180248]/10 bg-[#fffafd] p-3 shadow-[0_14px_34px_rgba(24,2,72,0.08)] transition hover:-translate-y-1 hover:border-[#7102ba]/30 hover:shadow-[0_20px_48px_rgba(24,2,72,0.14)]'
    >
      <div className='grid grid-cols-[86px_1fr] gap-3'>
        <div className='overflow-hidden rounded-xl bg-[#2b1165]'>
          {blog.image ? (
            <img
              src={blog.image}
              alt=''
              className='h-24 w-full object-cover transition duration-500 group-hover:scale-105'
            />
          ) : (
            <div className='flex h-24 items-center justify-center bg-gradient-to-br from-[#180248] via-[#7102ba] to-[#22d3ee] text-[10px] font-black uppercase tracking-[0.2em] text-white/55'>
              {t.fallbackImageText}
            </div>
          )}
        </div>

        <div className='min-w-0'>
          <p className='mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7102ba]'>
            {blog.readingTime ? (
              <>
                <Clock size={12} />
                {blog.readingTime}
              </>
            ) : (
              formatDate(blog.createdAt)
            )}
          </p>
          <h3
            dir={isArabic ? 'rtl' : 'ltr'}
            className='line-clamp-3 text-sm font-black leading-5 text-[#180248]'
          >
            {content?.title || blog.slug}
          </h3>
          <span className='mt-2 inline-flex items-center gap-1 text-xs font-black text-[#7102ba]'>
            {t.readNext}
            <ArrowUpRight size={13} className={isArabic ? '-rotate-90' : ''} />
          </span>
        </div>
      </div>
    </Link>
  )
}

function ShimmerBlock({ className = '' }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-white/[0.09] ${className}`}
      animate={{ opacity: [0.55, 0.95, 0.55] }}
      transition={{
        duration: 1.7,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className='absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent'
        animate={{ x: ['0%', '320%'] }}
        transition={{
          duration: 1.6,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
      />
    </motion.div>
  )
}

function BlogDetailLoadingSkeleton({ t, isArabic }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className='space-y-10'
      aria-label={t.loadingBlog}
    >
      <div className='mx-auto max-w-[1040px]'>
        <div className='mx-auto max-w-[880px] overflow-hidden rounded-[1.35rem] border border-white/14 bg-[#180248]/60 p-1 shadow-[0_26px_80px_rgba(0,0,0,0.34),0_0_42px_rgba(113,2,186,0.2)] backdrop-blur-xl'>
          <ShimmerBlock className='h-[220px] sm:h-[280px] lg:h-[540px]' />
        </div>

        <div className={`mx-auto mt-8 max-w-4xl ${isArabic ? 'text-right' : 'text-left'}`}>
          <div
            className={`mb-5 flex flex-wrap gap-3 ${
              isArabic ? 'justify-end' : 'justify-start'
            }`}
          >
            <ShimmerBlock className='h-9 w-36 rounded-full' />
            <ShimmerBlock className='h-9 w-28 rounded-full' />
          </div>

          <div className='space-y-3'>
            <ShimmerBlock className='h-9 w-full max-w-3xl' />
            <ShimmerBlock className='h-9 w-4/5 max-w-2xl' />
            <ShimmerBlock className='h-4 w-2/3 max-w-xl rounded-full' />
          </div>

          <div
            className={`mt-6 flex flex-wrap gap-3 ${
              isArabic ? 'justify-end' : 'justify-start'
            }`}
          >
            <ShimmerBlock className='h-9 w-28 rounded-full' />
            <ShimmerBlock className='h-8 w-24 rounded-full' />
            <ShimmerBlock className='h-8 w-20 rounded-full' />
          </div>
        </div>
      </div>

      <div className='grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start'>
        <div className='rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10'>
          <div className='mx-auto max-w-5xl space-y-4'>
            <ShimmerBlock className='h-7 w-2/5' />
            {Array.from({ length: 8 }, (_, index) => (
              <ShimmerBlock
                key={index}
                className={`h-4 rounded-full ${
                  index % 3 === 0 ? 'w-full' : index % 3 === 1 ? 'w-11/12' : 'w-4/5'
                }`}
              />
            ))}
            <ShimmerBlock className='mt-8 h-7 w-1/3' />
            {Array.from({ length: 6 }, (_, index) => (
              <ShimmerBlock
                key={`second-${index}`}
                className={`h-4 rounded-full ${index % 2 === 0 ? 'w-full' : 'w-10/12'}`}
              />
            ))}
          </div>
        </div>

        <aside className='space-y-5'>
          <div className='rounded-[1.5rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl'>
            <div className='mb-5 flex items-center gap-3'>
              <ShimmerBlock className='h-10 w-10 rounded-2xl' />
              <div className='flex-1 space-y-2'>
                <ShimmerBlock className='h-3 w-28 rounded-full' />
                <ShimmerBlock className='h-5 w-4/5 rounded-full' />
              </div>
            </div>
            <div className='grid gap-3'>
              <ShimmerBlock className='h-12 rounded-2xl' />
              <ShimmerBlock className='h-12 rounded-2xl' />
            </div>
          </div>

          <div className='rounded-[1.5rem] border border-white/12 bg-[#10002f]/70 p-5 shadow-2xl backdrop-blur-xl'>
            <div className='mb-4 space-y-2'>
              <ShimmerBlock className='h-3 w-28 rounded-full' />
              <ShimmerBlock className='h-6 w-36 rounded-full' />
            </div>
            <div className='grid gap-3'>
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className='grid grid-cols-[86px_1fr] gap-3 rounded-2xl border border-white/12 bg-white/[0.07] p-3'
                >
                  <ShimmerBlock className='h-24 rounded-xl' />
                  <div className='space-y-2'>
                    <ShimmerBlock className='h-3 w-20 rounded-full' />
                    <ShimmerBlock className='h-4 w-full rounded-full' />
                    <ShimmerBlock className='h-4 w-4/5 rounded-full' />
                    <ShimmerBlock className='h-3 w-24 rounded-full' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  )
}

export default function PublicBlogDetail() {
  const params = useParams()
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const isArabic = language === 'ar'
  const [blog, setBlog] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [relatedPage, setRelatedPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadBlog() {
      try {
        const [blogResponse, blogsResponse] = await Promise.all([
          fetch(`/api/blogs/${params.slug}`),
          fetch('/api/blogs?limit=13&skip=0'),
        ])

        if (!blogResponse.ok) {
          setError(t.blogNotFound)
          return
        }

        setBlog(await blogResponse.json())

        if (blogsResponse.ok) {
          const data = await blogsResponse.json()
          setBlogs(data.items || [])
        }
      } catch {
        setError(t.blogLoadError)
      } finally {
        setIsLoading(false)
      }
    }

    if (params?.slug) {
      loadBlog()
    }
  }, [params?.slug])

  const content = blog?.content?.[language] || blog?.content?.en
  const relatedBlogs = useMemo(() => {
    return blogs.filter((item) => item.slug !== blog?.slug)
  }, [blogs, blog?.slug])
  const relatedTotalPages = Math.max(
    1,
    Math.ceil(relatedBlogs.length / RELATED_PAGE_SIZE)
  )
  const visibleRelatedBlogs = useMemo(() => {
    const start = (relatedPage - 1) * RELATED_PAGE_SIZE
    return relatedBlogs.slice(start, start + RELATED_PAGE_SIZE)
  }, [relatedBlogs, relatedPage])

  useEffect(() => {
    setRelatedPage(1)
  }, [params?.slug, language])

  useEffect(() => {
    if (relatedPage > relatedTotalPages) {
      setRelatedPage(relatedTotalPages)
    }
  }, [relatedPage, relatedTotalPages])

  return (
    <main
      className='relative min-h-screen overflow-hidden bg-[#f4edff] text-[#180248]'
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <GeometricBlogBackground className='absolute bottom-auto h-[960px] lg:h-[1120px]' />

      <section className='relative px-4 pb-16 pt-24 sm:px-6 sm:pt-28 md:pt-24 lg:px-8'>
        <div className='absolute inset-x-0 top-[960px] bottom-0  bg-[linear-gradient(180deg,#fbf7ff_0%,#f4edff_58%,#fbf8ff_100%)] shadow-[0_-26px_90px_rgba(24,2,72,0.14)] lg:top-[1120px]' />
        <div className='mx-auto w-full max-w-[1560px]'>
          <Link
            href='/blog'
            className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/78 backdrop-blur transition hover:border-[#d9b8ff] hover:text-white'
          >
            <ArrowLeft size={17} className={isArabic ? 'rotate-180' : ''} />
            {t.backToBlogs}
          </Link>

          {isLoading ? (
            <BlogDetailLoadingSkeleton t={t} isArabic={isArabic} />
          ) : error ? (
            <div className='rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700 shadow-2xl'>
              {error}
            </div>
          ) : (
            <>
              <motion.header
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`mx-auto max-w-[1040px] ${isArabic ? 'text-right' : 'text-left'}`}
              >
                <div className='mx-auto max-w-[880px] overflow-hidden rounded-[1.35rem] border border-white/18 bg-[#180248]/70 shadow-[0_26px_80px_rgba(0,0,0,0.36),0_0_42px_rgba(113,2,186,0.22)]'>
                  <div className='overflow-hidden rounded-[1.35rem] bg-[#180248]'>
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt=''
                        className='mx-auto h-[220px] w-full object-cover sm:h-[280px] lg:h-[540px]'
                      />
                    ) : (
                      <div className='flex h-[220px] items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(192,132,252,0.38),transparent_34%),linear-gradient(135deg,#180248,#7102ba)] text-sm font-black uppercase tracking-[0.36em] text-white/50 sm:h-[280px] lg:h-[540px]'>
                        {t.fallbackImageText}
                      </div>
                    )}
                  </div>
                </div>

                <div className='mx-auto mt-8 max-w-4xl'>
                  <div
                    className={`mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#d9b8ff] ${
                      isArabic ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <span className='inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2'>
                      <CalendarDays size={15} />
                      {formatDate(blog.createdAt)}
                    </span>
                    {blog.readingTime ? (
                      <span className='inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2'>
                        <Clock size={15} />
                        {blog.readingTime}
                      </span>
                    ) : null}
                  </div>

                  <h1 className='text-2xl font-black leading-[1.16] tracking-tight text-white drop-shadow-[0_8px_26px_rgba(0,0,0,0.42)] sm:text-3xl md:text-4xl'>
                    {content?.title || blog.slug}
                  </h1>

                  {blog.excerpt ? (
                    <p className='mt-5 max-w-3xl text-sm font-semibold leading-7 text-white/72 md:text-base'>
                      {blog.excerpt}
                    </p>
                  ) : null}

                  <div
                    className={`mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/70 ${
                      isArabic ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {blog.author ? (
                      <span className='rounded-full bg-white/[0.07] px-4 py-2'>
                        {t.by} {blog.author}
                      </span>
                    ) : null}
                    {Array.isArray(blog.tags) && blog.tags.length ? (
                      blog.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className='rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-white/72'
                        >
                          {tag}
                        </span>
                      ))
                    ) : null}
                  </div>
                </div>
              </motion.header>

              <div className='relative mt-16 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start'>
                <motion.article
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className='overflow-hidden rounded-[1.75rem] border border-[#180248]/10 bg-[#fffafd] shadow-[0_18px_60px_rgba(24,2,72,0.1)]'
                >
                  <div
                    className='blog-article-body mx-auto max-w-5xl px-5 py-7 md:px-10 md:py-10 lg:px-14'
                    dangerouslySetInnerHTML={{ __html: content?.body || '' }}
                  />
                </motion.article>

                <aside className='space-y-5 xl:sticky xl:top-8'>
                  <div className='rounded-[1.5rem] border border-[#180248]/10 bg-[#fffafd] p-5 shadow-[0_18px_50px_rgba(24,2,72,0.1)]'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#d9b8ff] to-[#67e8f9] text-[#180248]'>
                        <BookOpen size={19} />
                      </div>
                      <div>
                        <p className='text-xs font-black uppercase tracking-[0.2em] text-[#7102ba]'>
                          {t.articleOverview}
                        </p>
                        <h2 className='text-lg font-black text-[#180248]'>
                          {t.latestInsightsDescription}
                        </h2>
                      </div>
                    </div>
                    <div className='grid gap-3 text-sm font-semibold text-[#180248]/68'>
                      <div className='flex items-center justify-between gap-4 rounded-2xl bg-[#f4edff] px-4 py-3'>
                        <span>{t.published}</span>
                        <span className='text-[#180248]'>{formatDate(blog.createdAt)}</span>
                      </div>
                      {blog.readingTime ? (
                        <div className='flex items-center justify-between gap-4 rounded-2xl bg-[#f4edff] px-4 py-3'>
                          <span>{t.readingTime}</span>
                          <span className='text-[#180248]'>{blog.readingTime}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {relatedBlogs.length ? (
                    <div className='rounded-[1.5rem] border border-[#180248]/10 bg-[#fffafd] p-5 shadow-[0_18px_50px_rgba(24,2,72,0.1)]'>
                      <div className='mb-4 flex items-end justify-between gap-4'>
                        <div>
                          <p className='text-xs font-black uppercase tracking-[0.2em] text-[#7102ba]'>
                            {t.latestInsights}
                          </p>
                          <h2 className='mt-1 text-xl font-black text-[#180248]'>
                            {t.allInsights}
                          </h2>
                        </div>
                        <Link href='/blog' className='text-[#7102ba] transition hover:text-[#180248]'>
                          <ArrowRight size={19} className={isArabic ? 'rotate-180' : ''} />
                        </Link>
                      </div>
                      <div className='grid gap-3'>
                        {visibleRelatedBlogs.map((item, index) => (
                          <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                          >
                            <RelatedBlogCard
                              blog={item}
                              language={language}
                              isArabic={isArabic}
                              t={t}
                            />
                          </motion.div>
                        ))}
                      </div>
                      {relatedTotalPages > 1 ? (
                        <div className='mt-4 flex items-center justify-between gap-3'>
                          <button
                            type='button'
                            onClick={() =>
                              setRelatedPage((page) => Math.max(1, page - 1))
                            }
                            disabled={relatedPage === 1}
                            className='rounded-full border border-[#180248]/10 bg-[#fbf7ff] px-3 py-2 text-xs font-black text-[#180248]/75 transition hover:border-[#7102ba]/30 hover:text-[#7102ba] disabled:cursor-not-allowed disabled:opacity-35'
                          >
                            {t.previous}
                          </button>
                          <span className='text-xs font-black text-[#180248]/50'>
                            {relatedPage} / {relatedTotalPages}
                          </span>
                          <button
                            type='button'
                            onClick={() =>
                              setRelatedPage((page) =>
                                Math.min(relatedTotalPages, page + 1)
                              )
                            }
                            disabled={relatedPage === relatedTotalPages}
                            className='rounded-full border border-[#180248]/10 bg-[#fbf7ff] px-3 py-2 text-xs font-black text-[#180248]/75 transition hover:border-[#7102ba]/30 hover:text-[#7102ba] disabled:cursor-not-allowed disabled:opacity-35'
                          >
                            {t.next}
                          </button>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </aside>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

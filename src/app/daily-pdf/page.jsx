import Link from 'next/link'
import { getStoredPdfInfo } from '@/lib/privatePdfStore'

export const metadata = {
  title: 'Daily PDF Download',
  robots: {
    index: false,
    follow: false,
  },
}

function formatDate(dateValue) {
  if (!dateValue) {
    return ''
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(dateValue))
}

export default async function DailyPdfPage() {
  const fileInfo = await getStoredPdfInfo()

  return (
    <main className='flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),linear-gradient(135deg,#180248_0%,#2d1360_45%,#7102ba_100%)] px-6 py-10 text-white'>
      <section className='w-full max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12'>
        <p className='text-xs uppercase tracking-[0.45em] text-[#d9b8ff]'>
          Daily File
        </p>
        <h1 className='mt-4 text-4xl font-black uppercase tracking-[0.14em] text-white md:text-5xl'>
          PDF Download
        </h1>
        <p className='mt-4 text-sm leading-7 text-white/68 md:text-base'>
          Use the button below to download the latest live PDF file.
        </p>

        {fileInfo.exists ? (
          <>
            <p className='mt-6 text-sm text-white/55'>
              Last updated: {formatDate(fileInfo.updatedAt)}
            </p>

            <Link
              href='/api/daily-pdf/download'
              className='mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-[#180248] transition hover:-translate-y-0.5'
            >
              Download PDF
            </Link>
          </>
        ) : (
          <p className='mt-8 text-sm leading-7 text-[#ffd1d1]'>
            No PDF is available right now. Please try again later.
          </p>
        )}
      </section>
    </main>
  )
}

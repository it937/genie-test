'use client'

import { useEffect, useState } from 'react'
import { Download, Eye, UploadCloud } from 'lucide-react'
import AdminShell from './AdminShell'
import { authHeaders } from './adminClientAuth'

function formatFileSize(size) {
  if (!size) {
    return '0 KB'
  }

  const sizeInKb = size / 1024
  return sizeInKb < 1024
    ? `${sizeInKb.toFixed(1)} KB`
    : `${(sizeInKb / 1024).toFixed(2)} MB`
}

function formatDate(dateValue) {
  if (!dateValue) {
    return 'Not uploaded yet'
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(dateValue))
}

export default function PdfManager() {
  const [fileInfo, setFileInfo] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [isBusy, setIsBusy] = useState(false)

  async function loadFileInfo() {
    const response = await fetch('/api/admin-pdf', {
      headers: authHeaders(),
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('Unable to load PDF info.')
    }

    const data = await response.json()
    setFileInfo(data.file)
  }

  useEffect(() => {
    loadFileInfo().catch(() => setError('Unable to load PDF info.'))
  }, [])

  async function handleUpload(event) {
    event.preventDefault()

    if (!selectedFile) {
      setError('Please choose a PDF file first.')
      setStatus('')
      return
    }

    setIsBusy(true)
    setError('')
    setStatus('')

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)

      const response = await fetch('/api/admin-pdf', {
        method: 'POST',
        headers: authHeaders(),
        body: formData,
      })
      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Upload failed.')
        return
      }

      setFileInfo(data.file)
      setSelectedFile(null)
      event.currentTarget.reset()
      setStatus('The live PDF has been replaced successfully.')
    } catch {
      setError('Unable to upload the PDF right now.')
    } finally {
      setIsBusy(false)
    }
  }

  async function previewPdf() {
    setError('')

    try {
      const response = await fetch('/api/admin-pdf/preview', {
        headers: authHeaders(),
      })

      if (!response.ok) {
        setError('Unable to preview the current PDF.')
        return
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      window.open(url, '_blank', 'noopener,noreferrer')
      window.setTimeout(() => URL.revokeObjectURL(url), 30000)
    } catch {
      setError('Unable to preview the current PDF.')
    }
  }

  return (
    <AdminShell
      title='PDF Portal'
      subtitle='Replace the single live PDF used by the public daily download page.'
    >
      <div className='grid gap-6 lg:grid-cols-[1fr_0.9fr]'>
        <section className='rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl'>
          <p className='text-xs font-black uppercase tracking-[0.28em] text-[#7102ba]'>
            Current File
          </p>

          {fileInfo?.exists ? (
            <div className='mt-5 space-y-3'>
              <h2 className='text-2xl font-black'>{fileInfo.name}</h2>
              <p className='text-sm text-[#180248]/70'>
                Size: {formatFileSize(fileInfo.size)}
              </p>
              <p className='text-sm text-[#180248]/70'>
                Last updated: {formatDate(fileInfo.updatedAt)}
              </p>

              <div className='flex flex-wrap gap-3 pt-3'>
                <button
                  type='button'
                  onClick={previewPdf}
                  className='inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#180248] to-[#7102ba] px-4 py-3 text-sm font-bold text-white'
                >
                  <Eye size={17} />
                  Preview
                </button>
                <a
                  href='/api/daily-pdf/download'
                  className='inline-flex items-center gap-2 rounded-xl border border-[#180248]/15 px-4 py-3 text-sm font-bold text-[#180248] transition hover:bg-[#180248] hover:text-white'
                >
                  <Download size={17} />
                  Public Download
                </a>
              </div>
            </div>
          ) : (
            <p className='mt-5 text-sm leading-6 text-[#180248]/70'>
              No live PDF is stored yet. Upload one to activate the public
              download button.
            </p>
          )}
        </section>

        <section className='rounded-2xl border border-white/15 bg-white/95 p-6 text-[#180248] shadow-2xl'>
          <p className='text-xs font-black uppercase tracking-[0.28em] text-[#7102ba]'>
            Replace File
          </p>
          <h2 className='mt-2 text-2xl font-black'>Upload New PDF</h2>

          <form className='mt-6 space-y-5' onSubmit={handleUpload}>
            <label className='block'>
              <span className='mb-2 block text-sm font-bold'>Select PDF</span>
              <input
                className='block w-full rounded-xl border border-dashed border-[#180248]/25 bg-[#f8f4ff] px-4 py-4 text-sm text-[#180248] file:mr-4 file:rounded-lg file:border-0 file:bg-[#180248] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-white'
                type='file'
                accept='application/pdf'
                onChange={(event) =>
                  setSelectedFile(event.target.files?.[0] || null)
                }
                required
              />
            </label>

            <button
              type='submit'
              disabled={isBusy}
              className='inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#180248] to-[#7102ba] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60'
            >
              <UploadCloud size={18} />
              {isBusy ? 'Uploading...' : 'Replace Live PDF'}
            </button>
          </form>

          {selectedFile ? (
            <p className='mt-4 text-sm text-[#180248]/65'>
              Selected file: {selectedFile.name}
            </p>
          ) : null}
          {error ? <p className='mt-4 text-sm text-red-600'>{error}</p> : null}
          {status ? (
            <p className='mt-4 text-sm font-semibold text-[#7102ba]'>{status}</p>
          ) : null}
        </section>
      </div>
    </AdminShell>
  )
}

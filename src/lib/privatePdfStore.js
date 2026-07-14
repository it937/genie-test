import { mkdir, readdir, readFile, stat, unlink, writeFile } from 'fs/promises'
import path from 'path'

const STORAGE_DIR = path.join(process.cwd(), 'storage', 'private-pdf')
const STORAGE_FILE_NAME = 'current.pdf'
const STORAGE_PATH = path.join(STORAGE_DIR, STORAGE_FILE_NAME)

export const DOWNLOAD_FILE_NAME = 'Daily Market Analysis.pdf'

async function ensureStorageDirectory() {
  await mkdir(STORAGE_DIR, { recursive: true })
}

export async function getStoredPdfInfo() {
  await ensureStorageDirectory()

  try {
    const fileStat = await stat(STORAGE_PATH)

    return {
      exists: true,
      name: DOWNLOAD_FILE_NAME,
      size: fileStat.size,
      updatedAt: fileStat.mtime.toISOString(),
    }
  } catch {
    return {
      exists: false,
      name: DOWNLOAD_FILE_NAME,
      size: 0,
      updatedAt: null,
    }
  }
}

export async function replaceStoredPdf(fileBuffer) {
  await ensureStorageDirectory()

  const existingFiles = await readdir(STORAGE_DIR)

  await Promise.all(
    existingFiles.map(async (fileName) => {
      const filePath = path.join(STORAGE_DIR, fileName)
      await unlink(filePath)
    })
  )

  await writeFile(STORAGE_PATH, fileBuffer)

  return getStoredPdfInfo()
}

export async function readStoredPdf() {
  await ensureStorageDirectory()
  const pdfBuffer = await readFile(STORAGE_PATH)
  return {
    buffer: pdfBuffer,
    name: DOWNLOAD_FILE_NAME,
  }
}

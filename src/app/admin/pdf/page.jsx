import PdfManager from '@/components/admin/PdfManager'

export const metadata = {
  title: 'Admin PDF Portal',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPdfPage() {
  return <PdfManager />
}

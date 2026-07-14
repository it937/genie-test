import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Admin PDF Portal',
  robots: {
    index: false,
    follow: false,
  },
}

export default function OpsPdfPortalPage() {
  redirect('/admin/pdf')
}

import PasswordForm from '@/components/admin/PasswordForm'

export const metadata = {
  title: 'Update Admin Password',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPasswordPage() {
  return <PasswordForm />
}

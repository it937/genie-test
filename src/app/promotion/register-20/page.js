import React from 'react'
import SignUpForm from '@/components/Promotion/Register-20/SignUpForm'
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Register for 20% Bonus',
  description:
    'Register for the Genie 20% bonus campaign and complete your signup to qualify for the promotion.',
  path: '/promotion/register-20',
  keywords: ['Genie register 20 bonus', 'bonus signup', 'trading promotion registration'],
});

const page = () => {
  return (
    <>
    <SignUpForm />
    </>
  )
}

export default page

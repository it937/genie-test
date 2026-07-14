import LegalHub from '@/components/legal/LegalHub';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Legal Policies',
  description:
    'Access Genie legal documents, trading policies, disclosures, and client agreement resources.',
  path: '/legal',
  keywords: ['Genie legal', 'broker policies', 'trading terms'],
});

export default function LegalPage() {
  return <LegalHub />;
}

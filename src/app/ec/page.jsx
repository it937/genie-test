import EconomicCalendarPage from '@/components/EC/EconomicCalendarPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Economic Calendar',
  description:
    'Track upcoming market-moving events with the Genie economic calendar for forex and global markets.',
  path: '/ec',
  keywords: ['economic calendar', 'Genie calendar', 'market events'],
});

export default function ECPage() {
  return <EconomicCalendarPage />;
}

import { absoluteUrl } from '@/lib/seo'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/models/Blog'

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' },

  // Depth-1 commercial pages
  { path: '/about-us', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/calculator', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact-us', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ec', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/holidays-schedule', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ib', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ib-reward', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/legal', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/liquidity', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/mt5', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/trade-to-win', priority: 0.9, changeFrequency: 'weekly' },

  // Depth-2: account types
  { path: '/accounts/cent', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/accounts/ecn', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/accounts/standard', priority: 0.75, changeFrequency: 'weekly' },

  // Depth-2: markets
  { path: '/market/commodities', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/market/forex', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/market/indices', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/market/metals', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/market/shares', priority: 0.75, changeFrequency: 'weekly' },

  // Depth-2: promotions (/promotion/register-20 excluded — registration flow)
  { path: '/promotion/20-bonus', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/promotion/20-bonus/pk', priority: 0.6, changeFrequency: 'weekly' },

  // Depth-2: legal policies
  { path: '/policies/aml-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/bonus-terms-and-conditions', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/complaints-handling-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/conflict-of-interest-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/cookies-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/deposit-withdrawal-terms', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/ib-terms-and-conditions', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/order-execution-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/payment-terms-and-conditions', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/privacy-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/risk-statement', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/swap-free-terms-and-conditions', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/terms-and-conditions', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/website-acceptance-use-policy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/policies/website-terms-and-conditions', priority: 0.6, changeFrequency: 'monthly' },
]

export default async function sitemap() {
  const lastModified = new Date()

  const staticEntries = staticRoutes.map(route => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  let blogEntries = []
  try {
    await connectDB()
    const blogs = await Blog.find({ published: { $ne: false } })
      .select('slug updatedAt')
      .lean()

    blogEntries = blogs.map(blog => ({
      url: absoluteUrl(`/blog/${blog.slug}`),
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  } catch {
    // DB unavailable at build time — blog slugs will be absent from this sitemap run
  }

  return [...staticEntries, ...blogEntries]
}

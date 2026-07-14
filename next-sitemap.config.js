/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://geniefx.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  exclude: [
    // Admin panel — never indexed
    '/admin',
    '/admin/*',
    '/admin/blogs',
    '/admin/blogs/*',
    '/admin/login',
    '/admin/password',
    '/admin/pdf',
    '/admin/pdf/*',

    // Internal operations portals
    '/daily-pdf',
    '/daily-pdf/*',
    '/ops-pdf-portal',
    '/ops-pdf-portal/*',

    // Registration / auth flows
    '/promotion/register-20',

    // API and infra
    '/api/*',
    '/404',
    '/500',
    '/_next/*',
    '/server-sitemap*',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/blogs',
          '/admin/login',
          '/admin/password',
          '/admin/pdf',
          '/daily-pdf',
          '/ops-pdf-portal',
          '/promotion/register-20',
          '/api/',
        ],
      },
    ],
    // App Router serves sitemap dynamically at /sitemap.xml — reference it here
    // so robots.txt always includes it even when next-sitemap generates 0 static pages
    additionalSitemaps: ['https://geniefx.com/sitemap.xml'],
  },

  // Priority and changefreq by path depth and keywords
  transform: async (config, path) => {
    const slashCount = (path.match(/\//g) || []).length
    let priority = 0.6
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (slashCount === 1) {
      // Depth-1: /forex, /about-us, /accounts — core commercial pages
      priority = 0.9
      changefreq = 'weekly'
    } else if (slashCount === 2) {
      // Depth-2: /accounts/ecn, /market/forex, /policies/privacy-policy
      priority = 0.75
      changefreq = 'weekly'
    } else {
      // Depth-3+: blog posts, nested promo paths
      priority = 0.6
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },

  // Dynamic route /blog/[slug] — fetches published slugs from the production API
  additionalPaths: async () => {
    const res = await fetch('https://geniefx.com/api/blogs')
    if (!res.ok) return []
    const blogs = await res.json()
    const items = Array.isArray(blogs) ? blogs : blogs.items ?? []
    return items
      .filter(b => b.published !== false && b.slug)
      .map(b => ({
        loc: `/blog/${b.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: b.updatedAt ? new Date(b.updatedAt).toISOString() : new Date().toISOString(),
      }))
  },
}

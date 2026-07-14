import mongoose from 'mongoose'

const LocalizedContentSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
  },
  { _id: false }
)

const SeoSchema = new mongoose.Schema(
  {
    metaTitle: String,
    metaDescription: String,
    ogImage: String,
    canonicalUrl: String,
  },
  { _id: false }
)

const BlogSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, required: true, trim: true },
    image: String,
    published: { type: Boolean, default: true },
    author: { type: String, default: 'Genie Ltd.' },
    readingTime: String,
    excerpt: String,
    tags: [String],
    seo: SeoSchema,
    content: {
      en: LocalizedContentSchema,
      ar: LocalizedContentSchema,
    },
  },
  { timestamps: true }
)

BlogSchema.index({ published: 1, createdAt: -1 })
BlogSchema.index({ createdAt: -1 })

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)

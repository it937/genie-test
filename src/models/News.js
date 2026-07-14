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

const NewsSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, required: true, trim: true },
    image: String,
    published: { type: Boolean, default: true },
    seo: SeoSchema,
    content: {
      en: LocalizedContentSchema,
      ar: LocalizedContentSchema,
    },
  },
  { timestamps: true }
)

export default mongoose.models.News || mongoose.model('News', NewsSchema)

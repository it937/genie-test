import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema(
  {
    docType: String,
    username: { type: String, trim: true, lowercase: true },
    email: { type: String, trim: true, lowercase: true },
    password: String,
    passwordHash: mongoose.Schema.Types.Mixed,
    role: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, collection: 'genie' }
)

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema)

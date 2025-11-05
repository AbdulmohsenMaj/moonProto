import mongoose from "mongoose";

// Subdocument schema for reference/documentation; runtime uses Mixed to allow legacy strings
const FavoriteSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    name: { type: String },
    image: { type: String },
    price: { type: Number },
    addedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema(
  {
    // OAuth fields (optional for email/password users)
    provider: { type: String },
    providerId: { type: String },
    
    // Common fields
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    role: { type: String, enum: ['admin', 'client'], default: 'client' },
    // Favorites: allow mixed entries (legacy strings and new objects)
    favorites: [{ type: mongoose.Schema.Types.Mixed }],
    
    // Email/password authentication fields
    password: { type: String, select: false }, // Only required for email/password users
    authType: { type: String, enum: ['oauth', 'email'], required: true }
  },
  { timestamps: true }
);

// Compound index for OAuth users (only when both provider and providerId exist)
UserSchema.index({ provider: 1, providerId: 1 }, { unique: true, sparse: true });

// Validation: OAuth users must have provider and providerId
UserSchema.pre('save', function(next) {
  if (this.authType === 'oauth') {
    if (!this.provider || !this.providerId) {
      return next(new Error('OAuth users must have provider and providerId'));
    }
    // OAuth users don't need password
    this.password = undefined;
  } else if (this.authType === 'email') {
    // Only enforce password requirement when the password is being modified
    if (this.isModified('password') && !this.password) {
      return next(new Error('Email users must have a password'));
    }
    // Email users don't need OAuth fields
    this.provider = this.provider || 'none';
    this.providerId = this.providerId || undefined;
  }
  next();
});

// Ensure model is recompiled in dev when schema changes
if (mongoose.models.User) {
  try {
    // Mongoose v7+
    mongoose.deleteModel?.("User");
  } catch (e) {
    // Fallback for older versions
    try { delete mongoose.models.User; } catch {}
  }
}
const User = mongoose.model("User", UserSchema);

export default User;
import mongoose from "mongoose";

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
    if (!this.password) {
      return next(new Error('Email users must have a password'));
    }
    // Email users don't need OAuth fields
    this.provider = undefined;
    this.providerId = undefined;
  }
  next();
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
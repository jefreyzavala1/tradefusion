const mongoose = require("mongoose")
const { Schema } = mongoose
const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    clerkId: { type: String, required: true },
    watchlist: [],
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model("User", userSchema)

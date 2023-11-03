const mongoose1 = require("mongoose")
const { Schema } = mongoose1
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

module.exports = mongoose1.model("User", userSchema)

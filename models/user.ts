
const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    clerkId: { type: String, required: true },
    watchlist: [{ type: Schema.Types.ObjectId, ref: "Watchlist" }],
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model("User", userSchema)

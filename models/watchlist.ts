const watchListSchema = new Schema({
  list: [],
  user: { type: Schema.Types.ObjectId, ref: "User" },
})
module.exports = mongoose.model("WatchList", watchListSchema)

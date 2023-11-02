const stockSchema = new Schema({
  stockName: String,
  stockSymbol: String,
  price: String,
  description: String,
})
const watchListSchema = new Schema({
  list: [stockSchema],
  user: { type: Schema.Types.ObjectId, ref: "User" },
})
module.exports = mongoose.model("Watchlist", watchListSchema)

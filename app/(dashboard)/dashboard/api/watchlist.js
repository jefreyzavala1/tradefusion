const Watchlist = require("../../../../models/watchlist")
const { getUserByClerkId } = require("../../../../utils/auth")

const addToWatchlist = async (clerkId, stockData) => {
  try {
    const user = await getUserByClerkId()
    if (user) {
      if (!user.watchlist) {
        user.watchlist = new Watchlist({ list: [] })
      }
      user.watchlist.list.push(stockData)
      await user.save()
    }
  } catch (error) {
    console.error("Error adding to watchlist", error)
  }
}

const removeFromWatchlist = async (clerkId, stockSymbol) => {
  try {
    const user = await getUserByClerkId()
    if (user && user.watchlist) {
      user.watchlist.list = user.watchlist.list.filter(
        (stock) => stock.symbol !== stockSymbol,
      )
    }
    await user.save()
  } catch (error) {
    console.log("Error removing from watchlist", error)
  }
}

module.exports = {
  addToWatchlist,
  removeFromWatchlist,
}

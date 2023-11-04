const addToWatchlist = async (userId, stockData) => {
  console.log("THis is your user:", userId)
  // const user = await User.findOne({ clerkId: userId })
  //   if (user) {
  //     if (!user.watchlist) {
  //       user.watchlist = []
  //     }
  //     user.watchlist.push(stockData)
  //     await user.save()
  //   }
  // } catch (error) {
  //   console.error("Error adding to watchlist", error)
  // }
}

// const removeFromWatchlist = async (clerkId, stockSymbol) => {
//   try {
//     const user = await getUserByClerkId()
//     if (user && user.watchlist) {
//       user.watchlist.list = user.watchlist.list.filter(
//         (stock) => stock.symbol !== stockSymbol,
//       )
//     }
//     await user.save()
//   } catch (error) {
//     console.log("Error removing from watchlist", error)
//   }
// }

module.exports = {
  addToWatchlist,
  // removeFromWatchlist,
}

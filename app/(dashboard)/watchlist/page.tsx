import { useEffect, useState } from "react"
import { getUserByClerkId } from "@/utils/auth"
// import { removeFromWatchlist } from "../dashboard/api/watchlist"

// async function fetchWatchlistData() {
//   try {
//     const user = await getUserByClerkId()
//     if (user && user.watchlist) {
//       const watchlistData = user.watchlist.list
//       return watchlistData
//     }
//     return []
//   } catch (error) {
//     console.error("Error fetching watchlist data:", error)
//   }
// }
const WatchListPage = () => {
  //   const [watchlistData, setWatchlistData] = useState([])
  //   useEffect(() => {
  //     fetchWatchlistData().then((data) => {
  //       setWatchlistData(data)
  //     })
  //   }, [watchlistData])

  //   const handleremoveFromWatchlist = async (stocksymbol) => {
  //     try {
  //       await removeFromWatchlist(stocksymbol)
  //       const updatedData = await fetchWatchlistData()
  //       setWatchlistData(updatedData)
  //     } catch (error) {
  //       console.error("Error removing from watchlist", error)
  //     }
  //   }

  return (
    <div>
      <h2>Welcome to your Watchlist</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {watchlistData.map((stock) => (
            <tr key={stock.stockSymbol}>
              <td>{stock.stockSymbol}</td>
              <td>{stock.stockName}</td>
              <td>{stock.price}</td>
              <td>{stock.description}</td>
              <td>
                <button
                  onClick={() => handleremoveFromWatchlist(stock.stockSymbol)}
                >
                  Remove from Watchlist
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}
export default WatchListPage

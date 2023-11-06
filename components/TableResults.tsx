"use client"
import { useState, useEffect } from "react"
import { addToWatchlist } from "../app/(dashboard)/dashboard/api/watchlist"
import User, { IUser } from "../models/user"
const TableResults = ({ searchTerm, isLoggedIn }: any) => {
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(false)
  console.log("Is user loggedIN", isLoggedIn)
  useEffect(() => {
    const getSearchTermData = async (symbol: any) => {
      try {
        const apiKey = process.env.API_KEY
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=OP6PGZW57RGMZETY`,
        )

        if (response.ok) {
          const data = await response.json()
          console.log(data)
          const timeSeries = data["Time Series (5min)"]

          const symbol = searchTerm.symbol
          const name = searchTerm.name

          // console.log(timeSeries)
          const latestData: any = Object.values(timeSeries)[0]
          const price = parseFloat(latestData["1. open"])
          const low = parseFloat(latestData["3. low"])
          const high = parseFloat(latestData["2. high"])

          const newStockData = {
            symbol,
            name,
            price,
            low,
            high,
          }

          setSearchData((prevStockData): any => [
            ...prevStockData,
            newStockData,
          ])
        } else {
          console.error("API request to alpha vantage failed")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getSearchTermData(searchTerm.symbol)
  }, [searchTerm])

  const handleAddToWatchList = async (stock: any) => {
    // const {userId}= await auth();
    // await addToWatchlist(userId,stock)
    // const user = await User.findOne({ clerkId: isLoggedIn })
    // console.log("YOU ARE BALLING HERE", user)
    console.log("you want to add this stock to your watchlist?", stock)
  }
  return (
    <div className="absolute mt-80">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Low</th>
            <th className="px-4 py-2">High</th>
            {isLoggedIn && <th className="px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {searchData.map((stock: any, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{stock.symbol}</td>
              <td className="px-4 py-2">{stock.name}</td>
              <td className="px-4 py-2">{stock.price}</td>
              <td className="px-4 py-2">{stock.low}</td>
              <td className="px-4 py-2">{stock.high}</td>
              {isLoggedIn && (
                <td className="px-4 py-2">
                  <div>
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                      onClick={() => handleAddToWatchList(stock)}
                    >
                      Add to watchlist
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableResults

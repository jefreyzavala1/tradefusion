import { useState, useEffect } from "react"
import { addToWatchlist } from "../app/(dashboard)/dashboard/api/watchlist"
import { auth } from "@clerk/nextjs"
const TableResults = ({ searchTerm, isLoggedIn }) => {
  console.log("is user loggedin:", isLoggedIn)
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getSearchTermData = async (symbol) => {
      try {
        const apiKey = process.env.API_KEY
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`,
        )

        if (response.ok) {
          const data = await response.json()
          console.log(data)
          const timeSeries = data["Time Series (5min)"]

          const symbol = searchTerm.symbol
          const name = searchTerm.name

          // console.log(timeSeries)
          const latestData = Object.values(timeSeries)[0]
          const price = parseFloat(latestData["1. open"])
          const low = parseFloat(latestData["3. low"])
          const high = parseFloat(latestData["2. high"])

          const stockData = {
            symbol,
            name,
            price,
            low,
            high,
          }
          console.log(stockData)
          setSearchData([...stockData])
        } else {
          console.error("API request to alpha vantage failed")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getSearchTermData(searchTerm.symbol)
  }, [searchTerm])

  const handleAddToWatchList = async (stock) => {
    // const {userId}= await auth();
    // await addToWatchlist(userId,stock)
  }
  return (
    <div className="absolute mt-40">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Low</th>
            <th>High</th>
          </tr>
        </thead>
        <tbody>
          {searchData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td>{stock.low}</td>
              <td>{stock.high}</td>
              {
                <td>
                  {isLoggedIn && (
                    <div>
                      <button onClick={() => handleAddToWatchList(stock)}>
                        Add to watchlist
                      </button>
                    </div>
                  )}
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableResults

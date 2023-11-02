import { useState, useEffect } from "react"

const TableResults = ({ searchTerm }) => {
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getSearchTermData = async (searchTerm) => {
      try {
        const apiKey = process.env.API_KEY
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchTerm.symbol}&interval=5min&apikey=${apiKey}`,
        )

        if (response.ok) {
          const data = await response.json()
          const timeSeries = data["Time Series (5min)"]

          const symbol = searchTerm.symbol
          const name = searchTerm.name

          console.log(symbol, name)

          // const latestData = Object.values(timeSeries)[0]
          // const price = parseFloat(latestData["1. open"])
          // const low = parseFloat(latestData["3. low"])
          // const high = parseFloat(latestData["2. high"])

          const stockData = {
            symbol,
            name,
          }
          console.log(stockData)
          setSearchData([stockData])
        } else {
          console.error("API request to alpha vantage failed")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    getSearchTermData(searchTerm)
  }, [searchTerm])
  return (
    <div className="absolute mt-40">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {searchData.map((stock, index) => {
            ;<tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableResults

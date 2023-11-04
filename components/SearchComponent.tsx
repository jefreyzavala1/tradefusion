"use client"
import { useState } from "react"
import TableResults from "./TableResults"
export default function SearchComponent({ isLoggedIn }: any) {
  const [inputSearch, setInputSearch] = useState("")
  const [searchTerm, setSearchTerm] = useState({
    symbol: "AAPL",
    name: "Apple Inc",
  })
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const handleInputChange = (evt: any) => {
    const inputValue = evt.target.value
    setInputSearch(evt.target.value)
    if (inputValue.length >= 2) {
      getSuggestions(inputValue)
    } else {
      setSuggestions([])
    }
  }

  const getSuggestions = async (keyword: String) => {
    setLoading(true)
    try {
      const apiKey = process.env.API_KEY
      const response = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=OP6PGZW57RGMZETY`,
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        const bestMatches = data.bestMatches || []
        const stockSuggestions = bestMatches.map((match: any) => ({
          symbol: match["1. symbol"],
          name: match["2. name"],
        }))
        setSuggestions(stockSuggestions)
      } else {
        console.error("API request to alpha vantage failed")
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
    setLoading(false)
  }

  const handleSuggestionClick = (selectedSymbol: any, name: any) => {
    // setInputSearch(selectedSymbol)
    const selection = { symbol: selectedSymbol, name: name }
    setSearchTerm(selection)
    setSuggestions([])
    setInputSearch("")
  }
  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul className="absolute mt-9 p-2 w-[240px] top-14 bg-white border border-gray-300 rounded shadow-lg z-10">
        {suggestions.map((suggestion: any) => (
          <li
            className="cursor-pointer hover:bg-gray-100 p-2"
            key={suggestion.symbol}
            onClick={() =>
              handleSuggestionClick(suggestion.symbol, suggestion.name)
            }
          >
            {suggestion.name} ({suggestion.symbol})
          </li>
        ))}
      </ul>
    )
  }
  const handleSearchSubmit = async (evt: any) => {
    evt.preventDefault()
    setLoading(true)
  }
  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="search"
        className="border border-gray-300 rounded p-2 mr-2 focus:outline-none focus:ring focus:border-blue-500"
        value={inputSearch}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Search
      </button>
      {/* {loading ? "Searching..." : "Search"} */}
      {renderSuggestions()}
      {/* <h1>You are searching: {searchTerm}</h1> */}
      <TableResults searchTerm={searchTerm} isLoggedIn={isLoggedIn} />
    </form>
  )
}

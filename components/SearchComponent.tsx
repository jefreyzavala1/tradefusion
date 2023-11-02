'use client'
import {useState} from 'react'
export default function SearchComponent(){

    const [inputSearch, setInputSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [suggestions,setSuggestions] = useState([])


    const handleInputChange = (evt:any)=>{
        const inputValue = evt.target.value
        setInputSearch(evt.target.value)
        if(inputValue.length >=2){
            getSuggestions(inputValue)
        }else{
            setSuggestions([])
        }
    }

    const getSuggestions = async(keyword:String)=>{
        setLoading(true)
        try{
            const apiKey = process.env.API_KEY
            const response = await fetch(
                `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`
              );
              if(response.ok){
                const data = await response.json();
                console.log(data)
                const bestMatches = data.bestMatches || [];
                const stockSuggestions = bestMatches.map((match:any)=>({
                    symbol:match['1. symbol'],
                    name:match['2. name']
                }))
                setSuggestions(stockSuggestions)
              }else {
                console.error('API request to alpha vantage failed')
              }

        }catch(error){
            console.error('Error fetching data:',error)
        }
        setLoading(false)
    }
    // const handleSearchSubmit = async (evt:any)=>{
    //     evt.preventDefault();
    //     //const search = await
    //     setLoading(true)
    //     try{
    //         // const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${inputSearch}&interval=5min&apikey=${process.env.API_KEY}`)


    //     }catch(error){
    //         console.error('API request failed')
    //     }
    //     setLoading(false);
    //     setInputSearch('')

    // }
    const handleSuggestionClick = (selectedSymbol:any)=>{
        setInputSearch(selectedSymbol);
        setSuggestions([])
    }
    const renderSuggestions = () => {
        if (suggestions.length === 0) {
          return null;
        }
        return (
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.symbol} onClick={() => handleSuggestionClick(suggestion.symbol)}>
                {suggestion.name} ({suggestion.symbol})
              </li>
            ))}
          </ul>
        );
      };
    const handleSearchSubmit = async(evt)=>{
        evt.preventDefault();
        setLoading(true)
    }
    return(
        <form onSubmit = {handleSearchSubmit} className='flex items-center'>
            <input type="text"  placeholder="search" className="border border-gray-300 rounded p-2 mr-2 focus:outline-none focus:ring focus:border-blue-500" value={inputSearch} onChange={handleInputChange}/>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200'>Search</button>
            {loading ? 'Searching...':'Search'}
            {renderSuggestions()}
        </form>
        
    )
}
'use client'
import { useEffect, useState } from "react"
import { getWatchlist,removeFromList} from "@/utils/api"

const WatchListPage = () => {
  const [watchlist,setWatchlist] = useState([])
  const [retrieveData,setRetrieveDate] = useState(false)
  const [loading,setLoading] = useState(true)

useEffect(()=>{
  const fetchWatchlistData = async ()=>{
  const data = await getWatchlist();
  if(data){
    const arrayData = data.watchlist;
    setWatchlist(arrayData)

  }
  }
  fetchWatchlistData()
},[])

const handleRemoveFromWatchList = async (stock:any)=>{
  const updatedList = await removeFromList(stock);
  if(updatedList){
    setWatchlist(updatedList.watchlist)
  }
}
  return (
    <>
    <h2 className="text-center">Welcome to you watchlist:</h2>
    <div className="absolute mt-35 left-150">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Low</th>
            <th className="px-4 py-2">High</th>
           <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>

          {watchlist.length==0?null:watchlist.map((stock: any, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{stock.symbol}</td>
              <td className="px-4 py-2">{stock.name}</td>
              <td className="px-4 py-2">{stock.price}</td>
              <td className="px-4 py-2">{stock.low}</td>
              <td className="px-4 py-2">{stock.high}</td>
                <td className="px-4 py-2">
                  <div>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-lg"
                      onClick={() => handleRemoveFromWatchList(stock)}
                    >
                      Remove from watchlist
                    </button>
                  </div>
                </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
export default WatchListPage

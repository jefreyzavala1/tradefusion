

const createURL = (path:any)=>window.location.origin + path
export const fetcher = (...args: [RequestInfo, RequestInit]) =>
  fetch(...args).then((res) => res.json());

export const addToWatchlist = async (data:any)=>{
const res = await fetch(
    new Request(createURL('/api/watchlist'),{
        method:'POST',
        body:JSON.stringify(data),
    })
)
if(res.ok){
    return res.json()
}else{
    throw new Error('Something went wrong on API server!')
}
}

export const getWatchlist = async ()=>{
    const res = await fetch(
        new Request(createURL('/api/watchlist'),{
            method:'GET'
        })
    )
    if(res.ok){
        console.log('YOU ARE HERE')
        return res.json()
    }
    else{
        throw new Error('Something went wrong on API server')
    }
}

export const removeFromList = async (data:any)=>{
    const res = await fetch(
        new Request(createURL('/api/watchlist')),{
        method:"DELETE",
        body:JSON.stringify(data)
         } )
    if(res.ok){
        return res.json()
    }else{
        throw new Error('Something went wrong on API server')
    }
}
import {update} from "@/utils/actions"
import { getUserByClerkId } from "@/utils/auth"
import User from "@/models/user"
import { NextResponse } from "next/server"
import { error } from "console"

export const POST = async (request:Request)=>{
    const data = await request.json()
    const user = await getUserByClerkId()//failing here
    const watchlist = user?.watchlist.push(data)
    await user?.save()

// update(['/dashboard'])
return NextResponse.json({data:watchlist})
}

export const GET = async()=>{
    const user = await getUserByClerkId()
    return NextResponse.json({watchlist:user?.watchlist})
}

export const DELETE = async(request:Request)=>{
    try{
    const data = await request.json();
    const user = await getUserByClerkId()
    if(!user){
        return NextResponse.error()
    }
    const updatedWatchlist = user?.watchlist.filter((stock) => stock.symbol !== data.symbol); 

    user.watchlist = updatedWatchlist

    await user.save()
    return NextResponse.json({watchlist:updatedWatchlist})
}catch{
    console.error("Error processing delete request",error)
}
}
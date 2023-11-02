import Link from "next/link"
import { redirect } from "next/navigation";
import Button from "@/components/Button"
import SearchComponent from "@/components/SearchComponent";
import {auth} from "@clerk/nextjs"
import { useState } from "react"
const DashboardPage = async ()=>{
    const {userId} = await auth();
    let href = userId?'/watchlist':'/new-user'
    
    
    return(
        <div>
        <div className="flex justify-around">
         <SearchComponent/>
    <Link href={href}>
    <button className="">Watchlist</button>
    </Link>    
    </div>
    <div className="border mt-8 pl-16">
    <TableResults searchData = {searchData}/>
    </div>
    </div>
    )
}

export default DashboardPage;
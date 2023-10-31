'use client'
import Link from "next/link"
import { redirect } from "next/navigation";
import Button from "@/components/Button"
import SearchComponent from "@/components/SearchComponent";
import {auth} from "@clerk/nextjs"
import { useState } from "react"
const DashboardPage = ()=>{
    const [searchInput,setSearchInput] = useState('')
    
    return(
        <div>
        <div className="flex justify-around">
         <SearchComponent searchInput={searchInput} setSearchInput={setSearchInput}/>
    <Link href="/watchlist">
    <button className="">Watchlist</button>
    </Link>    
    </div>
    <div className="border mt-8 pl-16">{searchInput}</div>
    </div>
    )
}

export default DashboardPage;
'use client'
import Link from "next/link"
import {redirect} from "next/navigation"
import {auth} from "@clerk/nextjs"
export default function Button(){
    return (
    <Link href="/watchlist">
    <button>Watchlist</button>
    </Link>    
    )
}


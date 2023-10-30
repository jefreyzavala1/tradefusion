import Link from "next/link"
import { redirect } from "next/navigation";
import Button from "../../../components/Button"
import {auth} from "@clerk/nextjs"
const DashboardPage = ()=>{

    
    return(
        <div>
         <div>Welcome to dash board</div>
    <Link href="/watchlist">
    <button>Watchlist</button>
    </Link>    
    </div>
    )
}

export default DashboardPage;
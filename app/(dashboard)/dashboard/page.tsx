import { redirect } from "next/navigation";
import Button from "../../../components/Button"
import {auth} from "@clerk/nextjs"
const DashboardPage = ()=>{

    
    return(
        <div>
         <div>Welcome to dash board</div>
    <Button></Button>
    </div>
    )
}

export default DashboardPage;
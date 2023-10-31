import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

const DashboardLayout = ({children})=>{
    return (
        <div className="h-screen w-screen relative">
        <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
            <Link href="/dashboard">
          <h1 className="border text-center">Trade Fusion</h1>
          </Link>
        </aside>
        <div className="ml-[200px]">
          
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton></UserButton>
          </div>
          <div>{children}</div>
        </div>
      </div>
    )
}

export default DashboardLayout
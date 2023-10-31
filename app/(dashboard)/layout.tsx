import { UserButton } from "@clerk/nextjs"

const DashboardLayout = ({children})=>{
    return (
        <div className="h-screen w-screen relative">
        <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
          Trade Fusion
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
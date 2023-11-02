import Link from "next/link"
import SearchComponent from "@/components/SearchComponent"
import { auth } from "@clerk/nextjs"

const DashboardPage = async () => {
  const { userId } = await auth()
  let href = userId ? "/watchlist" : "/new-user"

  return (
    <div>
      <div className="flex justify-around mt-5">
        <SearchComponent />
        <Link href={href}>
          <button className="text-xl hover:text-blue-500">Watchlist</button>
        </Link>
      </div>
      <div className="border mt-8 pl-16">
        {/* <TableResults searchData = {searchData}/> */}
      </div>
    </div>
  )
}

export default DashboardPage

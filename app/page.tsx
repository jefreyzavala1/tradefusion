import Link from "next/link";
export default async function Home() {
  return (
    <>
    <div className="w-screen h-screen bg-white/80 flex justify-center items-center">
    <div className="w-screen max-w-screen-md mx-auto">
      <div className="text-blue-500">
        <h1 className="text-6xl mb-4">Stock Insight Pro: Uniting Investors with data-driven decisions.</h1>
        <p className="text-2xl text-blue-300 mb-4">
          Your gateway to social trade inc financial metrics and market insights.
        </p>
      </div>
      <div>
        <Link href={'/dashboard'}>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-xl text-white">get started</button>
        </Link>
      </div>
    </div>
  </div>
  </>
  )
}

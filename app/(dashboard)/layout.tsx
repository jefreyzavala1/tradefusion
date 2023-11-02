import Article from "@/components/Article";
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { v4 as uuidv4 } from 'uuid';

const getArticles = async ()=>{
//     let  articles:any = []
//     const apikey = '5758a10a6508d31862e6b634571646a0';
//     const category = 'technology';
//     const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=5&apikey=' + apikey;

// try{
//     const response = await fetch(url)
//     const data = await response.json()
//     articles = data.articles;
// }catch(error){
//     console.error('Error fetching data:',error)
// }
// return articles
'use strict';
var request = require('request');
const apiKey = process.env.API_KEY
let articles = []
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${apiKey}&sort=LATEST&limit=5`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'request',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP request failed with status: ${response.status}`);
    }

    const data = await response.json();
    articles = data.feed
  } catch (error) {
    console.error('Error:', error);
  }

  return articles;

}
const DashboardLayout = async ({children}:any)=>{
       let articles:any = await getArticles();
    
    return (

        <div className="h-screen w-screen relative">
        <aside className="absolute w-[250px] top-0 left-0 h-full border-r border-black/10 " >
            <Link href="/dashboard">
          <h1 className="border text-center text-blue-500 font-medium">Trade Fusion</h1>
          </Link>
        
        <div className="h-full overflow-y-auto">
    {/* {articles.slice(0,5).map((article:any) => (
  <Article key={uuidv4()}article={article} />
      ))} */}
      </div>
        </aside>
        <div className="ml-[250px]">
          
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton afterSignOutUrl="/dashboard"></UserButton>
          </div>
          <div>{children}</div>
        </div>
      </div>
    )
}

export default DashboardLayout
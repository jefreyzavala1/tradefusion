import Link from "next/link";

export default function Article(article:any){
   
    return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-2">{article.article.title}</h3>
        <p className="text-gray-600">{article.article.summary}</p>
        <Link href={article.article.url}>
     <img src={article.article.banner_image} className="mt-2 rounded-lg w-full h-auto"></img>
        </Link>
    </div>
    )
}
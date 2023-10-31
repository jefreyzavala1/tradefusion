export default function Article(article:any){
    return (
    <div>
        <h3>{article.article.title}</h3>
        <p>{article.article.description}</p>
     <img src={article.article.image}></img>

    </div>
    )
}
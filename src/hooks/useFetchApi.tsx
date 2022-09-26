import { useEffect, useState } from "react"

const token = process.env.VITE_API_NEWS_KEY


export const useFetchApi = () => {
    const [news, setNews] = useState<any>([])

const fetchData = async () => {
    await fetch(`https://newsapi.org/v2/everything?q=nanny&apiKey=${token}&pageSize=3`)
    .then((data) => data.json())
    .then((data) => setNews(data.articles))
    .catch((err) => console.log(err))
   
}

useEffect(() => {
    fetchData()
}, [])

    return {
        news
    };

}
import React, { useEffect, useState } from "react";
import CardNews from "../components/CardNews";
import Axios from "axios";

interface NewsArticle {
  title : string;
  description : string;
  urlToImage : string;
  content: string;
}

export default function Home() {
  const [newsList, setNewsList] = useState<NewsArticle[]>([]);

  const fetchNews = async () => {
    let res = await Axios.get(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.REACT_APP_API_KEY}`);
    if (res.data.status === 'ok') {
      setNewsList(res.data.articles);
    }
  }
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="p-5 bg-blue-200 min-h-screen">
      <div className="flex items-center justify-center mb-5">
        <h1 className="font-bold text-3xl text-gray-700">Today's News</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newsList.map((val, idx) => (
          <CardNews
            key={idx}
            title={val.title}
            urlToImage={val.urlToImage}
            description={val.description}
            content={val.content}
            data={val}
          />
        ))}
      </div>
    </div>
  );
}

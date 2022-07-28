import "./newsComp.scss";

// import { NewsCards } from "../";
import NewsCards from "../NewsCard/NewsCards";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Locale Base
// import { rate } from "../../db";

function NewsComp() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=945a306942164c8997a3b9779513029c"
      );

      setNews(res.data.articles);
      console.log(res.data.articles);
    };
    getNews();
  }, []);

  return (
    <div className="news-wrap">
      {news.map((item, idx) => (
        // <NewsCards
        // urlToImage={item.urlToImage}
        //   url={item.url}
        //   publishedAt={item.publishedAt}
        //   title={item.title}
        //   description={item.description}
        // />;
        <NewsCards
          urlToImage={item.urlToImage}
          url={item.url}
          publishedAt={item.publishedAt}
          title={item.title}
          description={item.description}
          key={idx + item.title}
        />
      ))}
    </div>
  );
}

export default NewsComp;

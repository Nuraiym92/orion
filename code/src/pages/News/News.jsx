import React from "react";
import "./news.scss";
import NewsComp from "../../components/newsComp/NewsComp";

// import { NewsCards } from "../../components";

// Data Base
// import { newsPosts } from "../../db";

function News() {
  return (
    <div className="news">
      <div className="container">
        <div className="news-heading">
          <h1>Последние новости</h1>
          <p>Интервью, статьи и публикации наших экспертов.</p>
        </div>
        <NewsComp />
        {/* <div className="news-wrap">
          {newsPosts.map((newsPost, idx) => {
            return (
              <NewsComp
                newsImg={newsPost.imgUrl}
                newsDate={newsPost.date}
                newsTitle={newsPost.title}
                newsPost={newsPost.post}
                newsLikes={newsPost.likes}
                newsComments={newsPost.comment}
                newsShare={newsPost.share}
                key={idx}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default News;

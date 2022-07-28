import "./news.scss";

import React from "react";

function News(props) {
  return (
    <div className="news">
      <div className="news__inner">
        <a className="news__inner-news" href={props.newsLink}>
          {props.newsDesc}
        </a>
        <span className="news__inner-time">
          Добавлено {props.newsTime} час назад
        </span>
      </div>
    </div>
  );
}

export default News;

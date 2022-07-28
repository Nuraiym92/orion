import "./news-card.scss";

import React from "react";

function NewsCards({ title, description, url, urlToImage, publishedAt }) {
  return (
    <div className="news-card">
      <img className="news-card-img" src={urlToImage} alt="" />
      <div className="news-card__desc">
        <p className="news-card__date">{publishedAt}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__txt">{description}</p>
      </div>
      <div className="news-card__det">
        <a
          className="news-card__det-link"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Читать далее..
        </a>
      </div>
    </div>
    /* <div className="news-card__det-inner">
          <div className="news-card__det-item">
            <p className="news-card__stat-count">
              <span className="news-card__stat-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 17.7917L8.7915 16.6917C4.49984 12.8 1.6665 10.2333 1.6665 7.08333C1.6665 4.51667 3.68317 2.5 6.24984 2.5C7.69984 2.5 9.0915 3.175 9.99984 4.24167C10.9082 3.175 12.2998 2.5 13.7498 2.5C16.3165 2.5 18.3332 4.51667 18.3332 7.08333C18.3332 10.2333 15.4998 12.8 11.2082 16.7L9.99984 17.7917Z"
                    fill="black"
                  />
                </svg>
              </span>{" "}
              {props.newsLikes}
            </p>
          </div>

          <div className="news-card__det-item">
            <p className="news-card__stat-count">
              <span className="news-card__stat-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6665 1.66602H3.33317C2.4165 1.66602 1.6665 2.41602 1.6665 3.33268V18.3327L4.99984 14.9993H16.6665C17.5832 14.9993 18.3332 14.2493 18.3332 13.3327V3.33268C18.3332 2.41602 17.5832 1.66602 16.6665 1.66602Z"
                    fill="black"
                  />
                </svg>
              </span>{" "}
              {props.newsComments}
            </p>
          </div>

          <div className="news-card__det-item">
            <p className="news-card__stat-count">
              {" "}
              <span className="news-card__stat-icon">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4946 13.1629C12.8218 13.1629 12.2199 13.432 11.7596 13.8537L5.44796 10.1306C5.49222 9.92424 5.52763 9.7179 5.52763 9.50259C5.52763 9.28728 5.49222 9.08094 5.44796 8.8746L11.6888 5.18738C12.1668 5.63594 12.7953 5.91405 13.4946 5.91405C14.9641 5.91405 16.1503 4.71189 16.1503 3.22265C16.1503 1.73341 14.9641 0.53125 13.4946 0.53125C12.0251 0.53125 10.8389 1.73341 10.8389 3.22265C10.8389 3.43796 10.8744 3.6443 10.9186 3.85065L4.67782 7.53787C4.1998 7.0893 3.57129 6.81119 2.87197 6.81119C1.4025 6.81119 0.216309 8.01335 0.216309 9.50259C0.216309 10.9918 1.4025 12.194 2.87197 12.194C3.57129 12.194 4.1998 11.9159 4.67782 11.4673L10.9806 15.1994C10.9363 15.3878 10.9098 15.5852 10.9098 15.7825C10.9098 17.2269 12.0694 18.4022 13.4946 18.4022C14.9198 18.4022 16.0795 17.2269 16.0795 15.7825C16.0795 14.3381 14.9198 13.1629 13.4946 13.1629Z"
                    fill="black"
                  />
                </svg>
              </span>{" "}
              {props.newsShare}
            </p>
          </div>
        </div>*/
  );
}

export default NewsCards;

/*const newsCard = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  props,
}) => {
  return (
    <div className="container">
      <div className="news-card">
        <img className="news-card-img" src={urlToImage} alt="" />
        <div className="news-card__desc">
          <p className="news-card__date">{publishedAt}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__txt">{description}</p>
        </div>
        <div className="news-card__det">
          <a className="news-card__det-link" href={url}>
            Читать далее..
          </a>
          <div className="news-card__det-inner">
            <div className="news-card__det-item">
              <p className="news-card__stat-count">
                <span className="news-card__stat-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99984 17.7917L8.7915 16.6917C4.49984 12.8 1.6665 10.2333 1.6665 7.08333C1.6665 4.51667 3.68317 2.5 6.24984 2.5C7.69984 2.5 9.0915 3.175 9.99984 4.24167C10.9082 3.175 12.2998 2.5 13.7498 2.5C16.3165 2.5 18.3332 4.51667 18.3332 7.08333C18.3332 10.2333 15.4998 12.8 11.2082 16.7L9.99984 17.7917Z"
                      fill="black"
                    />
                  </svg>
                </span>{" "}
                {props.newsLikes}
              </p>
            </div>

            <div className="news-card__det-item">
              <p className="news-card__stat-count">
                <span className="news-card__stat-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6665 1.66602H3.33317C2.4165 1.66602 1.6665 2.41602 1.6665 3.33268V18.3327L4.99984 14.9993H16.6665C17.5832 14.9993 18.3332 14.2493 18.3332 13.3327V3.33268C18.3332 2.41602 17.5832 1.66602 16.6665 1.66602Z"
                      fill="black"
                    />
                  </svg>
                </span>{" "}
                {props.newsComments}
              </p>
            </div>

            <div className="news-card__det-item">
              <p className="news-card__stat-count">
                {" "}
                <span className="news-card__stat-icon">
                  <svg
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4946 13.1629C12.8218 13.1629 12.2199 13.432 11.7596 13.8537L5.44796 10.1306C5.49222 9.92424 5.52763 9.7179 5.52763 9.50259C5.52763 9.28728 5.49222 9.08094 5.44796 8.8746L11.6888 5.18738C12.1668 5.63594 12.7953 5.91405 13.4946 5.91405C14.9641 5.91405 16.1503 4.71189 16.1503 3.22265C16.1503 1.73341 14.9641 0.53125 13.4946 0.53125C12.0251 0.53125 10.8389 1.73341 10.8389 3.22265C10.8389 3.43796 10.8744 3.6443 10.9186 3.85065L4.67782 7.53787C4.1998 7.0893 3.57129 6.81119 2.87197 6.81119C1.4025 6.81119 0.216309 8.01335 0.216309 9.50259C0.216309 10.9918 1.4025 12.194 2.87197 12.194C3.57129 12.194 4.1998 11.9159 4.67782 11.4673L10.9806 15.1994C10.9363 15.3878 10.9098 15.5852 10.9098 15.7825C10.9098 17.2269 12.0694 18.4022 13.4946 18.4022C14.9198 18.4022 16.0795 17.2269 16.0795 15.7825C16.0795 14.3381 14.9198 13.1629 13.4946 13.1629Z"
                      fill="black"
                    />
                  </svg>
                </span>{" "}
                {props.newsShare}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};*/

// export default newsCard;

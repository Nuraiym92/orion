import "./home.scss";
import "./Banner/Banner";
import Banner from "./Banner/Banner";
import HomeServices from "./HomeServices/Homeservices";
import Homeprice from "../HomePrice/Homeprice";
// import Form from "./Form/Form";
import Adverd from "./Adverd/Adverd";
// import FeedbackPage from "./FeedbackPage/FeedBackPage";

// Data base
import { cards } from "../../db";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__title-first">
        <hr />
        <h1> НАШИ ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ</h1>
      </div>
      <span className="home__second-title">
        <p>
          Мы готовы предоставить профессиональные услуги по разработке бизнес
          плана любого уровня сложности. Наши решения для бизнеса помогут решить
          любые задачи.
        </p>
      </span>
      <div className="home__cards">
        {cards.map((card, idx) => {
          return (
            <HomeServices
              cardTitle={card.title}
              cardImg={card.imgUrl}
              cardDescription={card.description}
              key={idx + card.title}
            />
          );
        })}
      </div>
      <Homeprice />

      <Adverd />

      {/* <Form /> */}

      {/* <FeedbackPage /> */}
    </div>
  );
}
export default Home;

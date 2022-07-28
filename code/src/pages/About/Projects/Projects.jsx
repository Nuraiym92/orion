import React from "react";
import "./projects.scss";
import Slider from "react-slick";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 1300,
    cssEase: "linear",
  };
  return (
    <div className="projects">
      <h3>Наши проекты</h3>
      <p>
        На сегодняшний день наши проекты применяются в развиващихся странах
        Европы, и в скандинавских странах.При этом мы сохраняем единство,
        которое позволяет даже маленьким офисам выполнять крупные проекты,
        привлекая коллег из других стран.
      </p>
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="https://images-ext-2.discordapp.net/external/E3bot6726MzfBzJ5kN3PScWsveYJ_TEZmBApe2T_AtE/%3Fixlib%3Drb-1.2.1%26q%3D60%26fm%3Djpg%26crop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26w%3D1200%26fit%3Dcrop%26auto%3Dformat%26h%3D630%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26blend-mode%3Dnormal%26blend-alpha%3D10%26blend-w%3D1%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26blend%3D000000/https/images.unsplash.com/photo-1542744095-fcf48d80b0fd?width=891&height=468"
              alt="image0"
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/executive-team-listening-to-contrary-views-from-colleague-picture-id1272326797?b=1&k=20&m=1272326797&s=170667a&w=0&h=w6C0-TcosB99KpFWncwoJd3D-zkVmb8RiDctBcX8xCw="
              alt="image1"
            />
          </div>
          <div>
            <img
              src="https://www.finanbi.ru/files/imagesarticle/2/3745.jpg"
              alt="image2"
            />
          </div>
          <div>
            <img
              src="https://fin-az.ru/assets/i/ai/4/3/6/i/2948812.jpg"
              alt="image3"
            />
          </div>
          <div>
            <img
              src="https://icpmconsulting.com.ua/image/1konsalting-dlja-biznesa.jpg"
              alt="image4"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDTGL--FoWwop3LL8pcaPSpnRjHAHxt2nHg&usqp=CAU"
              alt="image5"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZXRpbmclMjBidXNpbmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="image6"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVldGluZyUyMGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="image7"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;

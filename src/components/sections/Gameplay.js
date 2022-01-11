import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import frame from "../../assets/images/gameplay/frame.png";
import img1 from "../../assets/images/gameplay/img1.png";
import img2 from "../../assets/images/gameplay/img2.png";
import avt1 from "../../assets/images/gameplay/avt1.png";
import avt2 from "../../assets/images/gameplay/avt2.png";
import avt3 from "../../assets/images/gameplay/avt3.png";
import avt4 from "../../assets/images/gameplay/avt4.png";
import avt5 from "../../assets/images/gameplay/avt5.png";

const Gameplay = () => {
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsAutoPlay(true);
    }
  }, []);

  const listImg = [{ img: img1 }, { img: img2 }];
  const listAvt = [
    { img: avt1 },
    { img: avt2 },
    { img: avt3 },
    { img: avt4 },
    { img: avt5 },
  ];

  return (
    <section
      id="gameplay"
      className="Gameplay page-section d-flex flex-column align-items-center justify-content-center"
    >
      <div className="position-relative">
        <img
          src={frame}
          alt="gameplay"
          className="Gameplay-frame w-100 h-100 img-contain"
        />
        <div className="Gameplay-slide">
          <OwlCarousel
            loop={true}
            dots={true}
            responsive={{
              0: {
                items: 1,
              },
            }}
          >
            {listImg.map((item, id) => (
              <img
                src={item.img}
                key={id}
                alt="gameplay"
                className="w-100 h-100 img-cover"
              />
            ))}
          </OwlCarousel>
        </div>
      </div>

      <div className="Gameplay-listAvt container">
        <OwlCarousel
          loop={true}
          dots={false}
          autoplay={isAutoPlay}
          autoplayTimeout={3000}
          autoplayHoverPause={true}
          responsive={{
            0: {
              items: 1,
            },
            330: {
              items: 2,
            },
            500: {
              items: 3,
            },
            750: {
              items: 4,
            },
            1000: {
              items: 5,
            },
          }}
        >
          {listAvt.map((avt, id) => (
            <img
              key={id}
              src={avt.img}
              className="Gameplay-listAvt-avt img-contain"
              alt="avatar"
            />
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Gameplay;

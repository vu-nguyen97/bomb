import React from "react";
import OwlCarousel from "react-owl-carousel";

import resourceFarm from "../../assets/images/features/icon-farm.png";
import forging from "../../assets/images/features/icon-Forge.png";
import iconPVP from "../../assets/images/features/icon-PVP.png";
import iconPVE from "../../assets/images/features/icon-PVE.png";
import challenger from "../../assets/images/features/icon-challenger.png";

import parkUpper from "../../assets/images/features/park1.png";
import parkLower from "../../assets/images/features/park2.png";

const featureList = [
  {
    name: "Resource Farm",
    img: resourceFarm,
    content: "Farming from land and gainresource foranything.",
  },
  {
    name: "Item Craft",
    img: forging,
    content: "Crafting consum and powerful equipment items.",
  },
  {
    name: "PLAY TOGETHER",
    img: iconPVP,
    content: "Play with friends as ally or against each other in fight.",
  },
  {
    name: "Dungeon & Campaign",
    img: iconPVE,
    content:
      "Raid dungeons, deafeat powerful monsters and hunt for valuable treasures.",
  },
  {
    name: "SEASON CHALLENGER",
    img: challenger,
    content: "Completed Season Challenge to claim limited season reward",
  },
];

const Features = () => {
  return (
    <section className="Features page-section" id="features">
      <div className="Features-carousel">
        <OwlCarousel
          className="owl-theme"
          loop={true}
          dots={false}
          responsive={{
            0: {
              items: 1,
            },
            545: {
              items: 2,
            },
            790: {
              items: 3,
            },
            1048: {
              items: 4,
            },
            1535: {
              items: 5,
            },
          }}
        >
          {featureList.map((item, id) => (
            <div className="Features-item mx-auto text-font" key={id}>
              <div className="d-flex flex-column align-items-center">
                <div className="img-wrapper">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="Features-item-img img-contain"
                  />
                </div>
                <div className="Features-item-name mb-3 d-flex align-items-center">
                  <div className="h5 m-0 text-orange text-uppercase text-center">
                    {item.name}
                  </div>
                </div>
                <div className="custom-font-size px-1 text-center font-size-13">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>

      <div className="Features-park position-relative">
        <img src={parkUpper} className="w-100 img-contain" alt="park upper" />

        <div className="Features-contentUpper text-font">
          <div className="font-size-18">Bring to you</div>
          <div className="mt-3 h5 text-orange custom-text">
            <div>CLASSIC</div>
            <div>METAVERSE</div>
            <div>WORLD!</div>
          </div>
        </div>
      </div>

      <div className="position-relative">
        <img src={parkLower} className="w-100 img-contain" alt="park lower" />

        <div className="Features-contentLower text-font">
          <div className="font-size-18">Dear Friends!</div>

          <div className="mt-3">
            I'm waiting for you guys to join our world.
          </div>
          <div>Where we can farm, play, earn and get fun together.</div>
          <div className="mt-3">Farm. Forge. Arena. Dungeon. Hunt.</div>
          <div className="mt-3">
            All in one world Send this call to the world.
          </div>

          <div className="mt-5 text-end font-size-18">Uncle Qwan</div>
        </div>
      </div>
    </section>
  );
};

export default Features;

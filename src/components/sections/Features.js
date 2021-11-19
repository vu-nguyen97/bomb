import React from "react";
import ice from "../../assets/images/landing-page/ice.png";
import OwlCarousel from "react-owl-carousel";

const featureList = [
  {
    name: "Dungeon",
    img: ice,
    content: "Raid the dungeon to defeat monster and gain valuable treasures.",
  },
  {
    name: "Arena",
    img: ice,
    content: "Deploy your team in a fight for glory against another player.",
  },
  {
    name: "Breeding",
    img: ice,
    content: "Get your penguin a mate and make a whole new generation.",
  },
  {
    name: "Forging",
    img: ice,
    content: "Create powerful equipments and bring into the battle.",
  },
  {
    name: "Landlord",
    img: ice,
    content: "Get your own a land and become a truly king in your kingdom.",
    title: "(Coming soon)",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="Features page-section full-viewport d-flex align-items-center"
    >
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        <h2 className="mb-5 mt-0 text-center">Features</h2>

        <div>
          <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={10}
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
              <div className="Features-item mx-auto" key={id}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="Features-item-img"
                  />
                  <h4 className="mb-2">{item.name}</h4>
                  <div className="px-1">{item.content}</div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Features;

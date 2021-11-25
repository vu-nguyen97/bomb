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
    <section className="Features page-section full-viewport" id="features">
      <div className="Features-wrapper h-100">
        <div className="Features-metaverse h-100">
          <div className="metaverse-bg--lower" />

          <div className="container h-100 d-flex flex-column justify-content-around">
            <div className="reveal-from-bottom my-4">
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
                      <div className="px-1 text-center">{item.content}</div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>

            <div className="row mb-4">
              <div
                className="col-md-5 reveal-from-left"
                data-reveal-delay="200"
              >
                <div className="text-font h5">Bring the metaverse to you</div>
                <div className="mb-0">
                  <div>
                    Join in a world where every penguin is a warrior, fight for
                    glory and prosperous of their own kingdom.
                  </div>
                  <div className="mt-4">
                    Dungeon. Arena. Breed. Forge. Lanlord. All in one world.
                  </div>
                  <div className="mt-4">
                    Play and earn tokens, become a part of an evolution!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

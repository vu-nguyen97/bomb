import React from "react";
import dungeon from "../../assets/images/landing-page/features/dungeon.png";
import arena from "../../assets/images/landing-page/features/arena.png";
import breeding from "../../assets/images/landing-page/features/breeding.png";
import forging from "../../assets/images/landing-page/features/forging.png";
import landlord from "../../assets/images/landing-page/features/landlord.png";
import OwlCarousel from "react-owl-carousel";

const featureList = [
  {
    name: "Dungeon",
    img: dungeon,
    content:
      "Raid dungeons ,defeat powerful monsters and hunt for valuable treasures.",
  },
  {
    name: "Arena",
    img: arena,
    content:
      "Put your strategical mind to the test by forming your own teams of penguins in a fight for glory against other players.",
  },
  {
    name: "Breeding",
    img: breeding,
    content: "Get your penguin a mate and make a whole new generation.",
  },
  {
    name: "Forging",
    img: forging,
    content: "Forge powerful equipments and bring them into the battle.",
  },
  {
    name: "Landlord",
    img: landlord,
    content:
      "Get your own plot of land and become a true king in your kingdom.",
    title: "(Coming soon)",
  },
];

const Features = () => {
  return (
    <section
      className="Features page-section full-viewport pb-5 d-flex align-items-center justify-content-center"
      id="features"
    >
      <div className="Features-bg bg-layer" />
      <div className="Features-fishLayer bg-layer" />

      <div className="Features-metaverse h-100 w-100">
        <div className="Features-metaverse-carousel container h-100 d-flex flex-column justify-content-around">
          <div className="Features-carousel reveal-from-bottom mt-4 mb-3">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              dots={true}
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
                    <div className="img-wrapper">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="Features-item-img"
                      />
                    </div>
                    <div className="h5 mt-0 mb-2 text-font">{item.name}</div>
                    <div className="px-1 text-center">{item.content}</div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>

        <div className="Features-metaverse-content position-relative d-flex align-items-center">
          <div className="container">
            <div className="row mb-3 custom-margin">
              <div
                className="content col-md-5 reveal-from-left"
                data-reveal-delay="200"
              >
                <div className="text-font h5">
                  Bringing the metaverse to you
                </div>
                <div className="mb-0">
                  <div>
                    Explore a world where penguins are fierce warriors, fighting
                    for glory and prosperity of their kingdoms.
                  </div>
                  <div className="mt-4">
                    Dungeon. Arena. Breed. Forge. Lanlord. All in one world.
                  </div>
                  <div className="mt-4">
                    Play and earn tokens, become a part of the evolution!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="metaverse-bg--lower reveal-from-right"
            data-reveal-delay="200"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

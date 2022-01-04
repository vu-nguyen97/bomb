import React from "react";
import OwlCarousel from "react-owl-carousel";
import iceImg from "../../assets/images/landing-page/tokens-and-assets/ice.png";
import land from "../../assets/images/landing-page/tokens-and-assets/land.png";
import avt1 from "../../assets/images/landing-page/tokens-and-assets/penguin.png";
import fish from "../../assets/images/landing-page/tokens-and-assets/fish.png";
import equipment from "../../assets/images/landing-page/tokens-and-assets/equipment.png";

const TokensAndAssets = (props) => {
  const listItem = [
    { name: "PIGU token", img: iceImg, content: "Govern token - BEP20" },
    { name: "FISH token", img: fish, content: "Ingame token - BEP20" },
    { name: "Penguins", img: avt1, content: "NFT assets - BEP721" },
    { name: "Equipments", img: equipment, content: "NFT assets - BEP721" },
    { name: "Land", img: land, content: "(Coming soon)" },
  ];

  return (
    <section
      id="tokenomics"
      className="TokensAndAssets page-section full-viewport d-flex align-items-center"
    >
      <div className="container">
        <div>
          <div className="row align-items-center">
            <div className="col-md-5 mt-3 reveal-from-left">
              <div className="h5 text-font mt-0 reveal-from-bottom">
                Tokens and Assets
              </div>

              <div className="m-0">
                Be a part of the evolution of Penguin World with PIGU, our
                governance token. Not only does it allows the owner to receive
                valuable rewards but also to obtain the rights to decide upon
                the future of the game.
              </div>
              {/* <button
                className="btn btn-outline-primary mt-3"
                onClick={props.onClickMoreInfoBtn}
              >
                More info
              </button> */}
            </div>

            <div className="col-md-3"></div>
            <div className="col-md-4 mt-3 d-flex flex-column align-items-center reveal-from-right">
              <img src={iceImg} className="img-size" alt="pigu img" />
              <h5 className="m-0">1.000.000.000 PIGU</h5>
              <div>Ready for distribution</div>
            </div>
          </div>

          <div
            className="mt-4 mt-md-5 reveal-from-bottom"
            data-reveal-delay="300"
          >
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              dots={true}
              responsive={{
                0: {
                  items: 1,
                },
                420: {
                  items: 2,
                },
                620: {
                  items: 3,
                },
                820: {
                  items: 4,
                },
                1000: {
                  items: 5,
                },
              }}
            >
              {listItem.map((item, id) => (
                <div
                  className="TokensAndAssets-item mx-auto mb-1 py-3 px-2"
                  key={id}
                >
                  <div className="d-flex flex-column align-items-center justify-content-between h-100">
                    <div className="text-font">{item.name}</div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="TokensAndAssets-item-img"
                    />
                    <div className="TokensAndAssets-item-content text-center text-truncate">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokensAndAssets;

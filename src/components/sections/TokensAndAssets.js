import React from "react";
import OwlCarousel from "react-owl-carousel";
import iceImg from "../../assets/images/landing-page/tokens-and-assets/ice.png";
import land from "../../assets/images/landing-page/land.png";
import avt1 from "../../assets/images/landing-page/avt1.png";
import fish from "../../assets/images/landing-page/fish.png";
import equipment from "../../assets/images/landing-page/equipment.png";
import ice from "../../assets/images/landing-page/ice.png";

const TokensAndAssets = (props) => {
  const listItem = [
    { name: "ICE token", img: ice, content: "Govern token - ERC 21" },
    { name: "FISH token", img: fish, content: "Ingame token - ERC 21" },
    { name: "Penguins", img: avt1, content: "NFT assets - ERC 21" },
    { name: "Equipments", img: equipment, content: "NFT assets - ERC 21" },
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
            <div className="col-md-5 reveal-from-left">
              <div className="h5 text-font mt-0 reveal-from-bottom">
                Tokens and Assets
              </div>

              <div className="m-0">
                ICE is the govern token, which give the owner chance to receive
                valuable rewards, the rights to vote and the be a part of the
                evolution of Penguin World.
              </div>
              <button
                className="btn btn-outline-primary mt-3"
                onClick={props.onClickMoreInfoBtn}
              >
                More info
              </button>
            </div>

            <div className="col-md-3"></div>
            <div className="col-md-4 d-flex flex-column align-items-center reveal-from-right">
              <img src={iceImg} className="img-size" alt="ice img" />
              <h5 className="m-0">100.000.000 ICE</h5>
              <div>Ready to distribution</div>
            </div>
          </div>

          <div className="my-5 reveal-from-bottom" data-reveal-delay="300">
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
                  className="TokensAndAssets-item mx-auto mb-2 py-3 px-2"
                  key={id}
                >
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="TokensAndAssets-item-img"
                    />
                    <div className="mt-1 text-font">{item.name}</div>
                    <div className="TokensAndAssets-item-content text-center">
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

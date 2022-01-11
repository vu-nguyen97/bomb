import React from "react";
import OwlCarousel from "react-owl-carousel";

import pxc from "../../assets/images/tokens-and-assets/PXC.png";
import pxg from "../../assets/images/tokens-and-assets/PXG.png";
import item from "../../assets/images/tokens-and-assets/item.png";
import pet from "../../assets/images/tokens-and-assets/pet.png";
import land from "../../assets/images/tokens-and-assets/land.png";
import bigPXC from "../../assets/images/tokens-and-assets/big-PXC.png";

const TokensAndAssets = () => {
  const listItem = [
    { name: "PXC", img: pxc, content: "BEP20", title: "Govem Token" },
    { name: "PXG", img: pxg, content: "BEP20", title: "Ingame Token" },
    { name: "Equipments", img: item, content: "BEP20", title: "NFT-Asset" },
    { name: "Pet", img: pet, content: "BEP20", title: "NFT-Asset" },
    { name: "Home Land", img: land, content: "BEP20", title: "NFT-Asset" },
  ];

  return (
    <section
      id="tokenomics"
      className="TokensAndAssets page-section full-viewport d-flex align-items-center"
    >
      <div className="container mt-3">
        <div>
          <div className="row align-items-center text-font">
            <div className="col-lg-5 col-md-6 mt-4 reveal-from-left">
              <div className="text-blue h5 mt-0 reveal-from-bottom text-uppercase">
                Tokens and Assets
              </div>

              <div className="m-0 font-size-10">
                Be a part of the evolution of Pixel Metaverse World with PXC,
                our governance token. Not only does it allows the owner to
                receive valuable rewards but also to obtain the rights to decide
                upon the future of the game.
              </div>
            </div>

            <div className="col-lg-2 d-none d-lg-block" />
            <div className="col-lg-5 col-md-6 mt-4 d-flex flex-column align-items-center reveal-from-right">
              <img src={bigPXC} className="img-size" alt="pixel img" />
              <h5 className="m-0 text-blue">1.000.000.000 PXC</h5>
              <div className="font-size-10 mt-2">Ready for distribution</div>
            </div>
          </div>

          <div
            className="mt-4 mt-md-5 reveal-from-bottom mb-3"
            data-reveal-delay="300"
          >
            <OwlCarousel
              className="owl-theme"
              loop={true}
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
                1020: {
                  items: 5,
                },
              }}
            >
              {listItem.map((item, id) => (
                <div className="TokensAndAssets-item text-font" key={id}>
                  <div className="TokensAndAssets-item-img position-relative mx-auto">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-100 h-100 img-contain"
                    />
                    <div
                      className={`TokensAndAssets-item-title text-uppercase font-size-10 color-${
                        id + 1
                      }`}
                    >
                      {item.name}
                    </div>
                    <div
                      className={`TokensAndAssets-item-content color-${id + 1}`}
                    >
                      <div className="font-size-10">{item.content}</div>
                      <div className="font-size-8">{item.title}</div>
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

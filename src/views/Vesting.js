import React from "react";
import OwlCarousel from "react-owl-carousel";

import iceToken from "../assets/images/landing-page/ice.png";
import cardBg from "../assets/images/landing-page/vesting/card.png";
import frameInput from "../assets/images/landing-page/vesting/frame.png";
import claimButton from "../assets/images/landing-page/vesting/claim-buton.png";

const vestingData = [
  {
    label: "PRIVATE SALE VESTING",
    icon: iceToken,
    content: "Next vesting is on 00:00 (UTC) Jan 26, 2022",
    claimedValue: 200,
    value: "25,350",
    title: "/200,000 PIGU vested",
  },
  {
    label: "PRIVATE SALE VESTING",
    icon: iceToken,
    content: "Next vesting is on 00:00 (UTC) Jan 26, 2022",
    claimedValue: 2,
    value: "25,350",
    title: "/200,000 PIGU vested",
  },
  {
    label: "PRIVATE SALE VESTING",
    icon: iceToken,
    content: "Next vesting is on 00:00 (UTC) Jan 26, 2022",
    claimedValue: 2,
    value: "25,350",
    title: "/200,000 PIGU vested",
  },
  {
    label: "PRIVATE SALE VESTING",
    icon: iceToken,
    content: "Next vesting is on 00:00 (UTC) Jan 26, 2022",
    claimedValue: 2,
    value: "25,350",
    title: "/200,000 PIGU vested",
  },
];

function Vesting() {
  return (
    <div>
      <section
        id="vesting"
        className="Vesting page-section d-flex align-items-center"
      >
        <div className="Vesting-carousel w-100 mb-3 reveal-from-bottom">
          <OwlCarousel
            className="owl-theme"
            loop={true}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              900: {
                items: 3,
              },
              1350: {
                items: 4,
              },
              1750: {
                items: 5,
              },
              2200: {
                items: 6,
              },
              2550: {
                items: 7,
              },
            }}
          >
            {vestingData.map((item, id) => (
              <div className="Vesting-card mx-auto" key={id}>
                <img
                  src={cardBg}
                  alt="vesting card"
                  className="img-contain h-100 w-100 position-relative"
                />

                <div className="Vesting-card-content d-flex flex-column align-items-center justify-content-between">
                  <div className="card-label text-font">{item.label}</div>

                  <div className="d-flex flex-column align-items-center">
                    <div className="Vesting-card-content-imgWrapper d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={item.icon}
                        alt="card icon"
                        className="ice-img img-contain w-100"
                      />

                      <div className="custom-text-size h4 m-0">
                        {item.value}
                      </div>
                      <div className="font-size-10">{item.title}</div>
                    </div>

                    <div className="content font-size-12 text-center mt-1">
                      {item.content}
                    </div>
                  </div>

                  <div className="d-flex flex-column align-items-center">
                    <div className="font-size-13">Claimable</div>

                    <div className="ms-2 position-relative">
                      <img
                        className="frameInput img-contain"
                        src={frameInput}
                        alt="frame"
                      />

                      <div className="claimedValue d-flex justify-content-center align-items-center ps-2">
                        {item.claimedValue}
                      </div>

                      <img
                        className="iceToken img-contain"
                        src={iceToken}
                        alt="ice token"
                      />
                    </div>
                  </div>

                  <div className="position-relative">
                    <img
                      className="claimButton img-contain"
                      src={claimButton}
                      alt="claim button"
                    />

                    <div className="claimText d-flex justify-content-center align-items-center pb-2">
                      Claim
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}

export default Vesting;
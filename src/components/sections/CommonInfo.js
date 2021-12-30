import React from "react";

import logo from "../../assets/images/landing-page/logo.png";
import apple from "../../assets/images/landing-page/common-info/apple.png";
import chPlay from "../../assets/images/landing-page/common-info/ch-play.png";
import playNow from "../../assets/images/landing-page/common-info/play-now.png";

import videoBg from "../../assets/videos/home-video.mp4";

const downloadBtns = [
  {
    name: "apple",
    icon: apple,
    label: "App Store",
    isComingSoon: true,
  },
  {
    name: "ch play",
    icon: chPlay,
    label: "Google Play",
    isComingSoon: true,
  },
  {
    name: "window",
    icon: playNow,
    label: "Play now",
    isComingSoon: true,
    classnames: "d-none d-lg-block",
  },
];

const CommonInfo = () => {
  const totalSnow = 60;

  return (
    <>
      <section id="home" className="CommonInfo page-section">
        <video
          loop
          muted
          autoPlay
          playsInline
          src={videoBg}
          className="CommonInfo-videoBg w-100 h-100"
        />

        <div className="CommonInfo-blackzone" />

        <div className="CommonInfo-downloadBtnsGroup d-flex justify-content-center reveal-from-top">
          {downloadBtns.map((btn, id) => (
            <div key={id} className={btn.classnames || ""}>
              <div className="CommonInfo-downloadBtnsGroup-btnWrapper px-3 py-2 mx-3 d-flex align-items-center cursor-pointer">
                <img src={btn.icon} alt={btn.name} className="logoImg" />
                <div className="btn-content ms-2">
                  <div className="btnLabel font-size-22 text-truncate">
                    {btn.label}
                  </div>
                </div>
                {btn.isComingSoon && (
                  <div className="comingSoon d-flex justify-content-center align-items-center font-size-13">
                    Coming soon...
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="CommonInfo-header d-flex justify-content-center reveal-from-top"
          data-reveal-delay="300"
        >
          <div className="CommonInfo-header-wrapper">
            <img src={logo} className="img-logo w-100 h-100" alt="ice img" />

            <div className="mt-2 text-white d-flex justify-content-end text-font">
              -PEGIN BEGINS-
            </div>
          </div>
        </div>

        <div className="CommonInfo-snow">
          <ul className="g-snows">
            {Array.from(Array(totalSnow).keys()).map((item, id) => (
              <li key={id} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CommonInfo;

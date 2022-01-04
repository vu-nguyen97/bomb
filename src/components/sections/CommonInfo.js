import React from "react";

import logo from "../../assets/images/landing-page/logo.png";
import videoBg from "../../assets/videos/home-video.mp4";

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

        <div
          className="CommonInfo-header d-flex justify-content-center reveal-from-top"
          data-reveal-delay="300"
        >
          <div className="CommonInfo-header-wrapper">
            <img src={logo} className="img-logo w-100 h-100" alt="ice img" />

            <div className="mt-2 text-white d-flex justify-content-end text-font">
              -PIGU BEGINS-
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

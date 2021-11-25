import React from "react";
import logo from "../../assets/images/landing-page/logo.png";

const CommonInfo = (props) => {
  return (
    <>
      <section id="home" className="CommonInfo page-section">
        <div
          className="CommonInfo-header d-flex justify-content-center reveal-from-top"
          data-reveal-delay="300"
        >
          <div className="CommonInfo-header-wrapper">
            <img src={logo} className="img-size mx-auto" alt="ice img" />

            <div className="mt-2 text-white d-flex justify-content-end text-font">
              -PEGIN BEGINS-
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonInfo;

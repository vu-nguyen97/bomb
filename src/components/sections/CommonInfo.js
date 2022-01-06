import React from "react";

import logo from "../../assets/images/logos/big-logo.png";
import banner from "../../assets/images/banner/header-banner.svg";

const CommonInfo = () => {
  return (
    <>
      <section id="home" className="CommonInfo page-section">
        <div className="CommonInfo-banner">
          <img src={banner} alt="banner" className="img-cover h-100 w-100" />
        </div>

        <div className="CommonInfo-logo">
          <img
            src={logo}
            className="img-logo img-contain w-100 h-100"
            alt="logo img"
          />
        </div>
      </section>
    </>
  );
};

export default CommonInfo;

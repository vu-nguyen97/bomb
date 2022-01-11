import React from "react";

import logo from "../../assets/images/logos/big-logo.png";
import banner from "../../assets/images/banner/header-banner.svg";
import chatbox from "../../assets/images/banner/chatbox.png";

const CommonInfo = () => {
  return (
    <>
      <section id="home" className="CommonInfo page-section">
        <div className="CommonInfo-banner h-100 w-100">
          <img src={banner} alt="banner" className="img-cover h-100 w-100" />
        </div>

        <div className="CommonInfo-logo d-none d-sm-block">
          <img
            src={logo}
            className="img-logo img-contain w-100 h-100"
            alt="logo img"
          />
        </div>

        <div className="CommonInfo-chatbox d-none d-sm-block">
          <img src={chatbox} className="img-contain" alt="chatbox" />

          <div className="CommonInfo-chatbox-content d-flex flex-column align-items-center justify-content-center text-font">
            <div>LET PLAY</div>
            <div className="pb-2">AND EARN!</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonInfo;

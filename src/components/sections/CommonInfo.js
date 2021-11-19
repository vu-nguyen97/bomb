import React from "react";
import iceImg from "../../assets/images/landing-page/ice-img.png";

const CommonInfo = () => {
  return (
    <section
      id="home"
      className="CommonInfo page-section full-viewport d-flex align-items-end"
    >
      <div className="container">
        <div className="CommonInfo-content mb-5">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="h5 text-color-mid">
                We build an ecosystem which all transactions are relevant. Give
                to our players opportunities to receive valuable rewards and
                ability to help the ecosystem grow.
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-4">
              <img src={iceImg} className="img-size mx-auto" alt="ice img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonInfo;

import React from "react";
import iceImg from "../../assets/images/landing-page/ice-img.png";

const CommonInfo = (props) => {
  return (
    <>
      <section
        id="home"
        className="CommonInfo page-section full-viewport d-flex align-items-end"
      >
        <div className="container">
          <div className="CommonInfo-content mb-5">
            <div className="row align-items-center">
              <div
                className="col-md-5 reveal-from-left"
                data-reveal-delay="500"
              >
                <div className="h5 text-color-mid">
                  We build an ecosystem which all transactions are relevant.
                  Give to our players opportunities to receive valuable rewards
                  and ability to help the ecosystem grow.
                </div>
              </div>
              <div className="col-md-3"></div>
              <div
                className="col-md-4 reveal-from-right"
                data-reveal-delay="500"
              >
                <img src={iceImg} className="img-size mx-auto" alt="ice img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {props?.isShowFull && (
        <section className="full-viewport d-flex align-items-center">
          <div className="container my-5">
            <div className="row align-items-center">
              <div
                className="col-md-5 reveal-from-left"
                data-reveal-delay="200"
              >
                <h3>Bring the metaverse to you</h3>
                <div className="h6 text-color-mid">
                  <div>
                    Join in a world where every penguin is a warrior, fight for
                    glory and prosperous of their own kingdom.
                  </div>
                  <div className="mt-4">
                    Dungeon. Arena. Breed. Forge. Lanlord. All in one world.
                  </div>
                  <div className="mt-4">
                    Play and earn tokens, become a part of an evolution!
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div
                className="col-md-4 reveal-from-right"
                data-reveal-delay="200"
              >
                <img src={iceImg} className="img-size mx-auto" alt="ice img" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CommonInfo;

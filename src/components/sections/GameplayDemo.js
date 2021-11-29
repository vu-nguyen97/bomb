import React from "react";
import gameplay from "../../assets/images/landing-page/game-preview/gameplay.png";

const GameplayDemo = () => {
  return (
    <section
      id="gameplay"
      className="GameplayDemo page-section full-viewport d-flex align-items-center"
    >
      <div
        className="d-flex justify-content-center reveal-from-bottom"
        data-reveal-delay="200"
      >
        <div className="GameplayDemo-header h5 m-0 text-center text-font">
          GAMEPLAY PREVIEW
        </div>

        <img alt="gameplay" src={gameplay} className="img-bg" />
      </div>
    </section>
  );
};

export default GameplayDemo;

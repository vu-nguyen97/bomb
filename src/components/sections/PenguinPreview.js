import React, { useEffect } from "react";
// import SpinePenguin from "../services/SpinePenguin";
import tape from "../../assets/images/landing-page/penguin-preview/tape.png";
import penguinPreviewBg from "../../assets/images/landing-page/penguin-preview/penguin-preview-bg.png";
import verticalBg from "../../assets/images/landing-page/penguin-preview/vertical-penguin-preview-bg.png";
import idle1 from "../../assets/gifs/idle-1.gif";
import idle2 from "../../assets/gifs/idle-2.gif";
import idle3 from "../../assets/gifs/idle-3.gif";
import idle4 from "../../assets/gifs/idle-4.gif";
import idle5 from "../../assets/gifs/idle-5.gif";
import idle6 from "../../assets/gifs/idle-6.gif";
import idle7 from "../../assets/gifs/idle-7.gif";
import idle8 from "../../assets/gifs/idle-8.gif";
import attack1 from "../../assets/gifs/attack-1.gif";
import attack2 from "../../assets/gifs/attack-2.gif";
import attack3 from "../../assets/gifs/attack-3.gif";
import attack4 from "../../assets/gifs/attack-4.gif";
import attack5 from "../../assets/gifs/attack-5.gif";
import attack6 from "../../assets/gifs/attack-6.gif";
import attack7 from "../../assets/gifs/attack-7.gif";
import attack8 from "../../assets/gifs/attack-8.gif";

const PenguinPreview = () => {
  // const totalDisplayPenguin = 8;
  // const penguinArr = Array.from(Array(totalDisplayPenguin).keys());
  const penguinArr = [idle1, idle2, idle3, idle4, idle5, idle6, idle7, idle8];
  const penguinAttack = [
    attack1,
    attack2,
    attack3,
    attack4,
    attack5,
    attack6,
    attack7,
    attack8,
  ];

  useEffect(() => {
    // penguinArr.forEach((item, id) => {
    //   const canvas = new SpinePenguin();
    //   // @ts-ignore
    //   new window.spine.SpineCanvas(
    //     document.getElementById(`penguin-${id + 1}`),
    //     {
    //       pathPrefix: "atlas/",
    //       app: canvas,
    //     }
    //   );
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="penguin"
      className="PenguinPreview page-section full-viewport d-flex align-items-center"
    >
      <div className="reveal-from-bottom w-100" data-reveal-delay="200">
        <div className="position-relative w-100">
          <img
            src={penguinPreviewBg}
            alt="penguin preview bg"
            className="PenguinPreview-bg w-100 d-none d-md-block"
          />

          <img
            src={verticalBg}
            alt="penguin preview bg"
            className="PenguinPreview-verticalBg w-100 d-none"
          />

          <div className="PenguinPreview-content d-flex flex-wrap justify-content-center align-items-center">
            <div className="h5 m-0 text-center PenguinPreview-title text-font">
              PENGUIN PREVIEW
            </div>

            <img src={tape} alt="tape" className="tape-bg" />

            {penguinArr.map((item, id) => (
              <div
                key={id}
                className="PenguinPreview-penguin d-flex align-items-center justify-content-center"
              >
                <div className="PenguinPreview-penguin-wrapper h-100 w-100">
                  <img
                    src={item}
                    alt={`penguin-${id + 1}`}
                    className="penguin-gif penguin-canvas"
                  />
                  <img
                    src={penguinAttack[id]}
                    alt={`penguin-attack-${id + 1}`}
                    className="penguin-attack d-none penguin-canvas"
                  />
                </div>

                {/* <canvas id={`penguin-${id + 1}`} className="penguin-canvas" /> */}
                <div className={`bg-slot bg-slot-${id + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenguinPreview;

import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
// import SpinePenguin from "../services/SpinePenguin";
import tape from "../../assets/images/landing-page/penguin-preview/tape.png";
import penguinPreviewBg from "../../assets/images/landing-page/penguin-preview/penguin-preview-bg.png";
import verticalBg from "../../assets/images/landing-page/penguin-preview/vertical-penguin-preview-bg.png";
import idle1 from "../../assets/videos/webm/idle-1.webm";
import idle2 from "../../assets/videos/webm/idle-2.webm";
import idle3 from "../../assets/videos/webm/idle-3.webm";
import idle4 from "../../assets/videos/webm/idle-4.webm";
import idle5 from "../../assets/videos/webm/idle-5.webm";
import idle6 from "../../assets/videos/webm/idle-6.webm";
import idle7 from "../../assets/videos/webm/idle-7.webm";
import idle8 from "../../assets/videos/webm/idle-8.webm";
import attack1 from "../../assets/videos/webm/attack-1.webm";
import attack2 from "../../assets/videos/webm/attack-2.webm";
import attack3 from "../../assets/videos/webm/attack-3.webm";
import attack4 from "../../assets/videos/webm/attack-4.webm";
import attack5 from "../../assets/videos/webm/attack-5.webm";
import attack6 from "../../assets/videos/webm/attack-6.webm";
import attack7 from "../../assets/videos/webm/attack-7.webm";
import attack8 from "../../assets/videos/webm/attack-8.webm";

import idleMobile1 from "../../assets/gifs/idle-1.gif";
import idleMobile2 from "../../assets/gifs/idle-2.gif";
import idleMobile3 from "../../assets/gifs/idle-3.gif";
import idleMobile4 from "../../assets/gifs/idle-4.gif";
import idleMobile5 from "../../assets/gifs/idle-5.gif";
import idleMobile6 from "../../assets/gifs/idle-6.gif";
import idleMobile7 from "../../assets/gifs/idle-7.gif";
import idleMobile8 from "../../assets/gifs/idle-8.gif";
import attackMobile1 from "../../assets/gifs/attack-1.gif";
import attackMobile2 from "../../assets/gifs/attack-2.gif";
import attackMobile3 from "../../assets/gifs/attack-3.gif";
import attackMobile4 from "../../assets/gifs/attack-4.gif";
import attackMobile5 from "../../assets/gifs/attack-5.gif";
import attackMobile6 from "../../assets/gifs/attack-6.gif";
import attackMobile7 from "../../assets/gifs/attack-7.gif";
import attackMobile8 from "../../assets/gifs/attack-8.gif";

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

  const [idleList, setIdleList] = useState(penguinArr);
  const [attackList, setattackList] = useState(penguinAttack);

  useEffect(() => {
    if (isMobile) {
      setIdleList([
        idleMobile1,
        idleMobile2,
        idleMobile3,
        idleMobile4,
        idleMobile5,
        idleMobile6,
        idleMobile7,
        idleMobile8,
      ]);
      setattackList([
        attackMobile1,
        attackMobile2,
        attackMobile3,
        attackMobile4,
        attackMobile5,
        attackMobile6,
        attackMobile7,
        attackMobile8,
      ]);
    }

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

            {idleList.map((item, id) => (
              <div
                key={id}
                className="PenguinPreview-penguin d-flex align-items-center justify-content-center"
              >
                <div className="PenguinPreview-penguin-wrapper h-100 w-100">
                  {isMobile ? (
                    <>
                      <img
                        src={item}
                        alt={`penguin-${id + 1}`}
                        className="penguin-gif penguin-canvas"
                      />
                      <img
                        src={attackList[id]}
                        alt={`penguin-attack-${id + 1}`}
                        className="penguin-attack d-none penguin-canvas"
                      />
                    </>
                  ) : (
                    <>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="penguin-gif penguin-canvas"
                      >
                        <source src={item} type="video/webm" />
                      </video>

                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="penguin-attack d-none penguin-canvas"
                      >
                        <source src={attackList[id]} type="video/webm" />
                      </video>
                    </>
                  )}
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

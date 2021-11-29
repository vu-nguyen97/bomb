import React, { useEffect } from "react";
import SpinePenguin from "../services/SpinePenguin";
import tape from "../../assets/images/landing-page/penguin-preview/tape.png";
import penguinPreviewBg from "../../assets/images/landing-page/penguin-preview/penguin-preview-bg.png";

const PenguinPreview = () => {
  const totalDisplayPenguin = 8;
  const penguinArr = Array.from(Array(totalDisplayPenguin).keys());

  useEffect(() => {
    penguinArr.forEach((item, id) => {
      const canvas = new SpinePenguin();
      // @ts-ignore
      new window.spine.SpineCanvas(
        document.getElementById(`penguin-${id + 1}`),
        {
          pathPrefix: "atlas/",
          app: canvas,
        }
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="penguin"
      className="PenguinPreview page-section full-viewport d-flex align-items-center"
    >
      <div className="reveal-from-bottom mx-auto" data-reveal-delay="200">
        <div className="position-relative">
          <img
            src={penguinPreviewBg}
            alt="penguin preview bg"
            className="PenguinPreview-bg"
          />

          <div className="custom-position d-flex flex-wrap justify-content-center">
            <div className="h5 m-0 text-center PenguinPreview-title text-font">
              PENGUIN PREVIEW
            </div>

            <img src={tape} alt="tape" className="tape-bg" />

            {penguinArr.map((item, id) => (
              <div
                key={id}
                className="penguin-wrapper d-flex align-items-center justify-content-center"
              >
                <canvas id={`penguin-${id + 1}`} className="penguin-canvas" />
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

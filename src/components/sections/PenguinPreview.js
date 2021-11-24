import React, { useEffect } from "react";
import SpinePenguin from "../services/SpinePenguin";

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
  }, [penguinArr]);

  return (
    <section
      id="penguin"
      className="PenguinPreview page-section full-viewport d-flex align-items-center"
    >
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        <h2 className="mb-3 mt-0 text-center">Penguin Preview</h2>

        <div className="row">
          {penguinArr.map((item, id) => (
            <div
              key={id}
              className="col-md-3 col-sm-6 col-12 mt-4 d-flex justify-content-center"
            >
              <canvas id={`penguin-${id + 1}`} className="penguin-wrapper" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PenguinPreview;

import React from "react";
import avt1 from "../../assets/images/landing-page/avt1.png";

const PenguinPreview = () => {
  return (
    <section
      id="penguin"
      className="PenguinPreview page-section full-viewport d-flex align-items-center"
    >
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        <h2 className="mb-3 mt-0 text-center">Penguin Preview</h2>

        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, id) => (
            <div
              key={id}
              className="col-md-3 col-sm-6 col-12 mt-4 d-flex justify-content-center"
            >
              <img src={avt1} alt={`avt${id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PenguinPreview;

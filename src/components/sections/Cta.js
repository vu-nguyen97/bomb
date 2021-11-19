import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import bgCta from "../../assets/images/landing-page/bg-cta.png";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="row g-0">
            <div className="col-3">
              <div className="ps-3 pt-3">
                <h5 className="m-0">INTO THE</h5>
                <h3 className="m-0">METAVERSE</h3>
              </div>
            </div>
            <div className="col-5">
              <h6 className="mb-0 ps-2 pe-4 text-reset">
                Our destiny is to making a multiverse, a next level of gaming
                experience where players can enjoy all our game in one
                ecosystem, which connect all together.
              </h6>
            </div>
            <div className="col-4">
              <img src={bgCta} className="cta-bg h-100 w-100" alt="bg-cta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;

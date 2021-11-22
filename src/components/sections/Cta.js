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
    "cta-inner mt-5",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="row g-0">
            <div className="col-md-3 col-xs-12">
              <div className="cta-title-wrapper px-3 pt-3">
                <div className="m-0 h5 cta-title-1">INTO THE</div>
                <div className="m-0 h3 cta-title-2">METAVERSE</div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-xs-8 d-flex align-items-center">
              <div className="h6 m-0 py-2 pe-4 text-reset cta-text">
                Our destiny is to making a multiverse, a next level of gaming
                experience where players can enjoy all our game in one
                ecosystem, which connect all together.
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-4">
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

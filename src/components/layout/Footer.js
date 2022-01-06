import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "Footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container h-100">
        <div className={classNames("h-100", topDivider && "has-top-divider")}>
          <div className="row h-100">
            <Logo
              className="col-lg-3 col-12 Footer-logo d-flex justify-content-start align-items-center"
              width={300}
            />
            <FooterNav className="col-lg-6 col-12 ps-lg-5" />
            <FooterSocial className="col-lg-3 col-12 d-flex justify-content-end align-items-center" />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

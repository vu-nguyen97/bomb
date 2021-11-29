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
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container h-100">
        <div
          className={classNames(
            "site-footer-inner h-100",
            topDivider && "has-top-divider"
          )}
        >
          <div className="h-100 d-flex flex-wrap justify-content-between align-items-center py-auto">
            <div className="d-flex flex-wrap align-items-center flex-grow-1">
              <Logo className="my-2 me-3 flex-shrink-0" width={150} />
              <FooterNav className="my-2 mx-2 flex-shrink-0" />
            </div>
            <FooterSocial className="my-2 flex-shrink-0" />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#0">Home</Link>
        </li>
        <li>
          <Link to="#0">Marketplace</Link>
        </li>

        <div className="d-none d-md-block px-4" />
      </ul>
    </nav>
  );
};

export default FooterNav;

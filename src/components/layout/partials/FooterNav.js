import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav d-flex", className);
  const listNav = [
    { name: "Home", url: "#0" },
    { name: "Marketplace", url: "#0" },
  ];

  return (
    <nav {...props} className={classes}>
      {listNav.map((item, id) => (
        <div className="footer-nav-link" key={id}>
          <Link to={item.url}>{item.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;

import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav text-font d-flex", className);
  const listNav = [
    { name: "Home", url: "#" },
    { name: "Marketplace", url: "#" },
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

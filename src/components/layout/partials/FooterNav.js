import React from "react";
import classNames from "classnames";
import { HeaderLinks } from "../Header";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav text-font d-flex", className);

  return (
    <nav {...props} className={classes}>
      {HeaderLinks.map((item, id) => (
        <div className="footer-nav-link" key={id}>
          <a
            href={item.url}
            target={item.isNewTab ? "_blank" : "_self"}
            rel="noreferrer"
          >
            {item.name}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default FooterNav;

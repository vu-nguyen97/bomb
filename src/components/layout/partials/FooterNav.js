import React from "react";
import classNames from "classnames";
import { HeaderLinks } from "../Header";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames(
    "Footer-nav text-font d-flex align-items-center",
    className
  );

  return (
    <div {...props} className={classes}>
      {HeaderLinks.map((item, id) => (
        <div className="Footer-nav-link" key={id}>
          <a
            href={item.url}
            target={item.isNewTab ? "_blank" : "_self"}
            rel="noreferrer"
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;

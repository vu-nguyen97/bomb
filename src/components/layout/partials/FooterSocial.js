import React from "react";
import classNames from "classnames";
import fb from "../../../assets/images/landing-page/footer/fb.png";
import discord from "../../../assets/images/landing-page/footer/discord.png";
import telegram from "../../../assets/images/landing-page/footer/telegram.png";
import twitter from "../../../assets/images/landing-page/footer/twitter.png";

const FooterSocial = ({ className }) => {
  const classes = classNames("footer-social", className);
  const listIcon = [
    { name: "fb", icon: fb },
    { name: "discord", icon: discord },
    { name: "twitter", icon: twitter },
    { name: "telegram", icon: telegram },
  ];

  return (
    <div className={classes}>
      <div className="d-flex">
        {listIcon.map((item, id) => (
          <img
            key={id}
            src={item.icon}
            alt={item.name}
            className="social-margin"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;

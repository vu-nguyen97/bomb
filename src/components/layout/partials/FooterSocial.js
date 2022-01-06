import React from "react";
import classNames from "classnames";
import fb from "../../../assets/images/footer/icon-facebook.png";
import discord from "../../../assets/images/footer/icon-discord.png";
import telegram from "../../../assets/images/footer/icon-tele.png";
import instagram from "../../../assets/images/footer/icon-insta.png";

const FooterSocial = ({ className }) => {
  const classes = classNames("Footer-social", className);
  const listIcon = [
    { name: "fb", icon: fb, url: "" },
    { name: "instagram", icon: instagram, url: "" },
    {
      name: "discord",
      icon: discord,
      url: "",
    },
    { name: "telegram", icon: telegram, url: "" },
  ];

  return (
    <div className={classes}>
      <div className="d-flex">
        {listIcon.map((item, id) => (
          <a
            href={item.url}
            key={id}
            className="social-margin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.icon} alt={item.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;

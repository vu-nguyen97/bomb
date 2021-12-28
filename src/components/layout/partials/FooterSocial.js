import React from "react";
import classNames from "classnames";
import fb from "../../../assets/images/landing-page/footer/fb.png";
import discord from "../../../assets/images/landing-page/footer/discord.png";
import telegram from "../../../assets/images/landing-page/footer/telegram.png";
import twitter from "../../../assets/images/landing-page/footer/twitter.png";
import youtube from "../../../assets/images/landing-page/footer/youtube.png";

const FooterSocial = ({ className }) => {
  const classes = classNames("footer-social", className);
  const listIcon = [
    { name: "fb", icon: fb, url: "https://www.facebook.com/PiguLand/" },
    {
      name: "discord",
      icon: discord,
      url: "https://discord.com/channels/923503591719837696/923504349144055858",
    },
    { name: "twitter", icon: twitter, url: "https://twitter.com/Pigu_Land" },
    { name: "telegram", icon: telegram, url: "https://t.me/PiguLandChannel" },
    {
      name: "youtube",
      icon: youtube,
      url: "https://www.youtube.com/channel/UCrQ0_fEIbYR3Wi_-tOYfCzA",
    },
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

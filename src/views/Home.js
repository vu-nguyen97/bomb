import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";

import Features from "../components/sections/Features";
import CommonInfo from "../components/sections/CommonInfo";
// import PenguinPreview from "../components/sections/PenguinPreview";
import TokensAndAssets from "../components/sections/TokensAndAssets";
import RoadMap from "../components/sections/RoadMap";
// import Distribution from "../components/sections/Distribution";

import joinDiscord from "../assets/images/landing-page/join-discord.png";
import joinDiscordOnMobile from "../assets/images/landing-page/join-discord-mini.png";

const Home = (props) => {
  const [isShowSmoothScroll, setIsShowSmoothScroll] = useState(false);
  const [sizeChangeHeader, setSizeChangeHeader] = useState(95);

  const isMoreInfo = props.location?.state?.isMoreInfo || false;

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSizeChangeHeader(20);
    }

    document.getElementById("vestingUrl")?.classList.remove("actived-vesting");
    document.getElementById("homeUrl")?.classList.add("nav-actived");
  }, []);

  const listenScrollEvent = useCallback(() => {
    let isAnotherStyle = false;

    if (window.scrollY <= sizeChangeHeader) {
      isAnotherStyle = false;
    } else {
      isAnotherStyle = true;
    }

    if (
      window.scrollY + window.innerHeight + 120 >
      document.body.clientHeight
    ) {
      setIsShowSmoothScroll(false);
    } else {
      setIsShowSmoothScroll(true);
    }

    const navItems = document.getElementsByClassName("header-nav-item") || [];
    const siteHeaderEl = document.getElementById("site-header");
    if (isAnotherStyle) {
      siteHeaderEl?.classList.add("another-color", "another-bg");
    } else {
      siteHeaderEl?.classList.remove("another-color", "another-bg");
    }

    if (isMoreInfo) {
      return Array.from(navItems).forEach((element) => {
        element.classList.remove("nav-actived");
      });
    }
  }, [isMoreInfo, sizeChangeHeader]);

  useEffect(() => {
    listenScrollEvent();
  }, [listenScrollEvent]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [listenScrollEvent]);

  return (
    <div className="Home position-relative">
      <CommonInfo />
      <Features />
      <TokensAndAssets />
      <RoadMap />
      {/* <PenguinPreview />
      <Distribution /> */}

      <a
        href="https://discord.com/channels/923503591719837696/923504349144055858"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={classNames("scroll-to-top", {
            show: isShowSmoothScroll,
          })}
        >
          <img
            src={joinDiscord}
            alt="join discord"
            className="d-none d-sm-block h-100 w-100"
          />
          <div className="joinDiscord d-flex align-items-center">
            <span className="d-none d-sm-block text-orange">
              Join our discord
            </span>
          </div>

          <img
            src={joinDiscordOnMobile}
            alt="join discord"
            className="d-sm-none h-100 w-100"
          />
        </div>
      </a>
    </div>
  );
};

export default Home;

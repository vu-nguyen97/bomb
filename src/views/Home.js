import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
// import sections
// import Cta from "../components/sections/Cta";
import Features from "../components/sections/Features";
import { HeaderLinks } from "../components/layout/Header";
import CommonInfo from "../components/sections/CommonInfo";
import FundInfo from "../components/sections/FundInfo";
import PenguinPreview from "../components/sections/PenguinPreview";
import GameplayDemo from "../components/sections/GameplayDemo";
import TokensAndAssets from "../components/sections/TokensAndAssets";
import RoadMap from "../components/sections/RoadMap";
import Distribution from "../components/sections/Distribution";

const Home = (props) => {
  const [isShowSmoothScroll, setIsShowSmoothScroll] = useState(false);
  const [sizeChangeHeader, setSizeChangeHeader] = useState(95);
  const isMoreInfo = props.location?.state?.isMoreInfo || false;
  const history = useHistory();

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSizeChangeHeader(20);
    }
  }, []);

  const listenScrollEvent = useCallback(() => {
    let isAnotherStyle = false;

    if (window.scrollY <= sizeChangeHeader) {
      isAnotherStyle = false;
      setIsShowSmoothScroll(false);
    } else {
      isAnotherStyle = true;
      setIsShowSmoothScroll(true);
    }

    const listNav = document.getElementsByClassName("page-section");
    const navItems = document.getElementsByClassName("header-nav-item");
    const siteHeaderEl = document.getElementById("site-header");
    if (isAnotherStyle) {
      siteHeaderEl.classList.add("another-color", "another-bg");
    } else {
      siteHeaderEl.classList.remove("another-color", "another-bg");
    }

    if (isMoreInfo) {
      return Array.from(navItems).forEach((element) => {
        element.classList.remove("nav-actived");
      });
    }

    for (let i = 0; i < Object.keys(listNav).length; i++) {
      const currentElTop = listNav[i].getBoundingClientRect().top;
      const nextElTop =
        i === Object.keys(listNav).length - 1
          ? Infinity
          : listNav[i + 1].getBoundingClientRect().top;

      const activedIndex = HeaderLinks.findIndex(
        (item) => item.id === listNav[i].id
      );

      if (activedIndex === -1) continue;
      if (currentElTop <= 80 && nextElTop > 80) {
        navItems[activedIndex].classList.add("nav-actived");
      } else {
        navItems[activedIndex].classList.remove("nav-actived");
      }
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickMoreInfoBtn = () => {
    history.push({
      pathname: "",
      state: { isMoreInfo: true },
    });
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Home position-relative">
      <div className="Home-bg" />

      <CommonInfo />
      {isMoreInfo ? (
        <>
          <FundInfo />
        </>
      ) : (
        <>
          <Features />
          <GameplayDemo />
          <PenguinPreview />
          <TokensAndAssets onClickMoreInfoBtn={handleClickMoreInfoBtn} />
          <Distribution />
          <RoadMap />
          {/* <Cta /> */}
        </>
      )}

      {isShowSmoothScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <div className="d-flex align-items-center justify-content-center h-100 cursor-pointer">
            <i className="fas fa-angle-double-up text-dark" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

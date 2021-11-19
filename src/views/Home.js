import React, { useState, useEffect } from "react";
// import sections
// import Hero from "../components/sections/Hero";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Features from "../components/sections/Features";
import Cta from "../components/sections/Cta";
import { HeaderLinks } from "../components/layout/Header";
import CommonInfo from "../components/sections/CommonInfo";
import FundInfo from "../components/sections/FundInfo";
import PenguinPreview from "../components/sections/PenguinPreview";
import GameplayDemo from "../components/sections/GameplayDemo";
import TokensAndAssets from "../components/sections/TokensAndAssets";

const Home = () => {
  const [isShowSmoothScroll, setIsShowSmoothScroll] = useState(false);

  const listenScrollEvent = () => {
    const siteHeaderEl = document.getElementById("site-header");
    const listNav = document.getElementsByClassName("page-section");
    const navItems = document.getElementsByClassName("header-nav-item");
    let isAnotherStyle = false;

    if (window.scrollY <= 120) {
      isAnotherStyle = false;
      setIsShowSmoothScroll(false);
    } else if (window.scrollY >= 120) {
      isAnotherStyle = true;
      setIsShowSmoothScroll(true);
    }

    if (isAnotherStyle) {
      siteHeaderEl.classList.add("another-color", "another-bg");
    } else {
      siteHeaderEl.classList.remove("another-color", "another-bg");
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
        if (activedIndex > -1) {
          navItems[activedIndex].classList.add("nav-actived");
        }
      } else {
        navItems[activedIndex].classList.remove("nav-actived");
      }
    }
  };

  useEffect(() => {
    listenScrollEvent();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CommonInfo />
      <FundInfo />
      {/* <Hero className="illustration-section-01" /> */}
      <Features />
      <PenguinPreview />
      <GameplayDemo />
      <TokensAndAssets />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Cta split />

      {isShowSmoothScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <div className="d-flex align-items-center justify-content-center h-100 cursor-pointer">
            <i className="fas fa-angle-double-up text-dark" />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

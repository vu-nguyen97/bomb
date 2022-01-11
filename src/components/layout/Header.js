import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";
import btnPlay from "../../assets/images/header/btn-play.png";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

export const HeaderLinks = [
  { name: "Home", id: "home", url: "/" },
  // { name: "Features", id: "features" },
  // { name: "Gameplay", id: "gameplay" },
  // { name: "Penguin", id: "penguin" },
  // { name: "Tokenomics", id: "tokenomics" },
  // { name: "Roadmap", id: "roadmap" },
  {
    name: "Vesting",
    id: "vesting",
    url: "/",
    // url: `${window.location.origin}/vesting`,
  },
  {
    name: "Pitchdeck",
    id: "pitchdeck",
    url: "/",
    // isNewTab: true,
  },
  {
    name: "Whitepaper",
    id: "whitepaper",
    url: "/",
    // isNewTab: true,
  },
];

const Header = ({
  className,
  navPosition,
  hideNav,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header text-font",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  const onClickNav = (itemId) => {
    const itemEl = document.getElementById(itemId);

    if (itemEl) {
      const yOffset = 79; // height of fixed header
      const distanceTop =
        itemEl.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({ top: distanceTop });
    }

    closeMenu();
  };

  return (
    <header {...props} className={classes} id="site-header">
      <div className="container">
        <div
          className={classNames(
            "site-header-inner w-100",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <div className="d-flex align-items-center flex-grow-1 justify-content-start">
            <div className="header-logo">
              <Link to="/">
                <img src={logo} alt="logo" className="header-img w-100 h-100" />
              </Link>
            </div>

            {!hideNav && (
              <nav
                ref={nav}
                className={classNames(
                  "header-nav ms-4",
                  isActive && "is-active"
                )}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    {HeaderLinks.map((item, index) => {
                      if (item.url) {
                        return (
                          <li key={index}>
                            <a
                              className="text-uppercase"
                              href={item.url}
                              target={item.isNewTab ? "_blank" : "_self"}
                              rel="noreferrer"
                              id={`${item.id}Url`}
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      }

                      return (
                        <li key={index}>
                          <div
                            onClick={() => onClickNav(item.id)}
                            className="header-nav-item text-uppercase"
                          >
                            {item.name}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            )}
          </div>

          <div className="playNowContainer h-100 position-relative d-none d-lg-block cursor-pointer">
            <img
              src={btnPlay}
              className="btnPlay img-contain h-100 w-100"
              alt="wood"
            />

            <div className="playNowContent text-uppercase text-center">
              <div>Play</div>
              <div>now</div>
            </div>
          </div>

          <button
            ref={hamburger}
            className="header-nav-toggle"
            onClick={isActive ? closeMenu : openMenu}
          >
            <span className="screen-reader">Menu</span>
            <span className="hamburger">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;

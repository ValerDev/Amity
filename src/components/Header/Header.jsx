import React, { useState, useEffect } from "react";
import s from "./Header.module.scss";
import logoWhite from "../../assets/images/logoWhite.svg";
import email from "../../assets/images/Home/email.svg";
import goToHomeIcon from "../../assets/images/Home/goToHomeIcon.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowSize());
  const [windowScrollPosition, setWindowScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(getWindowSize());
    };
    const handleScroolPosition = () => {
      setWindowScrollPosition(window.pageYOffset);
    };

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroolPosition);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroolPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // const scrollToContactUs = () => {
  //   window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
  // };

  // const goToElement = (ref) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className={s.orangeHeader}>
      {windowScrollPosition >= 1000 ? (
        <img
          className={s.goToHomeIcon}
          src={goToHomeIcon}
          alt="goToHomeIcon"
          onClick={() => scrollToTop()}
        />
      ) : null}
      {windowWidth > 1050 ? (
        <div className={s.linksBlock}>
          <button className={s.link}>
            <Link to={"/"}>HOME</Link>
          </button>
          <button className={s.link}>
            <HashLink smooth to={"/#weTransport"}>CALCULATOR</HashLink>
          </button>
          <img
            src={logoWhite}
            alt="logoWhite"
            className={s.logoWhite}
            onClick={() => navigate("/")}
          />
          <button className={`${s.link}`}>
            <HashLink to={"/#whyAmity"}>ABOUT US</HashLink>
          </button>
          <button className={`${s.link}`}>
            <HashLink smooth to="/#contactUs">
              HELP
            </HashLink>
          </button>
        </div>
      ) : (
        <div className={s.mobileHeader}>
          <div className={s.logoBlock}>
            <img
              src={logoWhite}
              alt="logoWhite"
              className={s.logoWhite}
              onClick={() => navigate("/")}
            />
            <div className={s.line} />
            <HashLink smooth to={"/#contactUs"}>
              <img src={email} alt="email" className={s.emailIcon} />
            </HashLink>
          </div>
          <div className={s.linksBlock}>
            <button className={`${s.link} ${s.mobileLink}`}>
              <HashLink smooth to={"/#whyAmity"}>
                WHY AMITY
              </HashLink>
            </button>
            <button className={`${s.link} ${s.mobileLink}`}>
              <HashLink smooth to={"/#weTransport"}>
                WE TRANSPORT
              </HashLink>
            </button>
            <button className={`${s.link} ${s.mobileLink}`}>GUIDE</button>
            <button className={`${s.link} ${s.mobileLink}`}>HELP</button>
          </div>
        </div>
      )}
    </div>
  );
};

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}

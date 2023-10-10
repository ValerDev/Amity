import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import email from '../../assets/images/Home/email.svg';
import goToHomeIcon from '../../assets/images/Home/goToHomeIcon.svg';
export const Header = ({
  homeRef,
  guideRef,
  helpRef,
  weTransportRef,
  whyAmityRef,
  redefiningMobilityRef
}) => {
  const [windowWidth, setWindowWidth] = useState(getWindowSize());
  const [windowScrollPosition, setWindowScrollPosition] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(getWindowSize());
    }
    const handleScroolPosition = () => {
      setWindowScrollPosition(window.pageYOffset);
    }

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScroolPosition);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScroolPosition);
    };
  }, []);

  const goToElement = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={s.header}>
      {windowScrollPosition >= 1000 ? <img className={s.goToHomeIcon} src={goToHomeIcon} alt='goToHomeIcon' onClick={() => goToElement(homeRef)} /> : null}
      {windowWidth > 1050 ? <div className={s.navBar}>
          <button onClick={() => goToElement(guideRef)} className={s.link}>WHY AMITY</button>
          <button onClick={() => goToElement(helpRef)} className={s.link}>WE TRANSPORT</button>
        <img src={logo} alt="Logo" className={s.logo}/>
          <button onClick={() => goToElement(whyAmityRef)} className={`${s.link}`}>GUIDE</button>
          <button onClick={() => goToElement(weTransportRef)} className={`${s.link}`}>HELP</button>
      </div> :
        <div className={s.mobileHeader}>
          <div className={s.logoBlock}>
            <img src={logoWhite} alt="logoWhite" className={s.logoWhite} />
            <div className={s.line} />
            <img src={email} alt="email" className={s.emailIcon} />
          </div>
          <div className={s.linksBlock}>
            <button onClick={() => goToElement(guideRef)} className={`${s.link} ${s.mobileLink}`}>WHY AMITY</button>
            <button onClick={() => goToElement(helpRef)} className={`${s.link} ${s.mobileLink}`}>WE TRANSPORT</button>
            <button onClick={() => goToElement(whyAmityRef)} className={`${s.link} ${s.mobileLink}`}>GUIDE</button>
            <button onClick={() => goToElement(weTransportRef)} className={`${s.link} ${s.mobileLink}`}>HELP</button>
          </div>
        </div>}

      <h2 className={s.title}>REDEFINING MOBILITY</h2>
      <button className={s.getAnInstantQuotieBtn} onClick={() => goToElement(redefiningMobilityRef)}>
        GET AN INSTANT QUOTE
      </button>
    </div>
  )
}

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth
}

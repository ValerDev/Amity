import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import email from '../../assets/images/Home/email.svg';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    <div className={s.header}>
      {windowWidth > 1050 ? <div className={s.navBar}>
        <button className={s.link}>GUIDE</button>
        <button className={s.link}>WE TRANSPORT</button>
        <img src={logo} alt="Logo" />
        <button className={s.link}>WHY AMITY</button>
        <button className={s.link}>HELP</button>
      </div> :
        <div className={s.mobileHeader}>
          <div className={s.logoBlock}>
            <img src={logoWhite} alt="logoWhite" className={s.logoWhite}/>
            <div className={s.line} />
            <img src={email} alt="email" className={s.emailIcon}/>
          </div>
          <div className={s.linksBlock}>
            <button className={s.link}>GUIDE</button>
            <button className={s.link}>WE TRANSPORT</button>
            <button className={s.link}>WHY AMITY</button>
            <button className={s.link}>HELP</button>
          </div>
        </div>}

      <h2 className={s.title}>REDEFINING MOBILITY</h2>
      <button className={s.getAnInstantQuotieBtn}>
        GET AN INSTANT QUOTE
      </button>
    </div>
  )
}

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth
}
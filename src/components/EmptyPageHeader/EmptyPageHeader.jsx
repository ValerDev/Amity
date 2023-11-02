import React, { useState, useEffect } from 'react';
import s from './EmptyPageHeader.module.scss';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import email from '../../assets/images/Home/email.svg';
export const EmptyPageHeader = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={`${s.EmptyPageHeader}`}>
      {windowWidth > 1050 ? <div className={s.navBar}>
          <button className={s.link}>WHY AMITY</button>
          <button className={s.link}>WE TRANSPORT</button>
        <img src={logo} alt="Logo" className={s.logo}/>
          <button className={`${s.link}`}>GUIDE</button>
          <button className={`${s.link}`}>HELP</button>
      </div> :
        <div className={s.mobileHeader}>
          <div className={s.logoBlock}>
            <img src={logoWhite} alt="logoWhite" className={s.logoWhite} />
            <div className={s.line} />
            <img src={email} alt="email" className={s.emailIcon} />
          </div>
          <div className={s.linksBlock}>
            <button className={`${s.link} ${s.mobileLink}`}>WHY AMITY</button>
            <button className={`${s.link} ${s.mobileLink}`}>WE TRANSPORT</button>
            <button className={`${s.link} ${s.mobileLink}`}>GUIDE</button>
            <button className={`${s.link} ${s.mobileLink}`}>HELP</button>
          </div>
        </div>}
    </div>
  )
}

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth
}

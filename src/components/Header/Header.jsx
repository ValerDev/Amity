import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
    return <div className={s.header}>
        <div className={s.navBar}>
            <button className={s.link}>GUIDE</button>
            <button className={s.link}>WE TRANSPORT</button>
            <img src={logo} alt="Logo" />
            <button className={s.link}>WHY AMITY</button>
            <button className={s.link}>HELP</button>
        </div>

        <h2 className={s.title}>REDEFINING MOBILITY</h2>
        <button className={s.getAnInstantQuotieBtn}>GET AN INSTANT QUOTE</button>
        
    </div>
}
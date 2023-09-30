import React from "react";
import s from './Home.module.scss';
import { Header } from "../../components/Header/Header";
import homeBackgroundPuzzle from '../../assets/images/Home/backgroundPuzzle.png';

export const Home = () => {
    return <div className={s.home}>
        <div className={s.homeBackground}></div>
        <img src={homeBackgroundPuzzle} alt="homeBackgroundPuzzle" className={s.homeBackgroundPuzzle} />
        <Header />
    </div>
}
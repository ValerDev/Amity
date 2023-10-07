import React from "react";
import s from './Home.module.scss';
import { Header } from "../../components/Header/Header";
export const Home = () => {
    return <div className={s.home}>
        <Header />
    </div>
}
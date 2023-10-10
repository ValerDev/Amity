import React from "react";
import s from './Home.module.scss';
import { Header } from "../../components/Header/Header";
export const Home = ({
    homeRef,
    guideRef,
    helpRef,
    weTransportRef,
    whyAmityRef,
    redefiningMobilityRef
}) => {
    return <div className={s.home} ref={homeRef}>
        <Header homeRef={homeRef} guideRef={guideRef} helpRef={helpRef} weTransportRef={weTransportRef} whyAmityRef={whyAmityRef} redefiningMobilityRef={redefiningMobilityRef}/>
    </div>
}
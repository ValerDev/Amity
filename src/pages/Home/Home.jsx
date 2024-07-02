import React from "react";
import s from './Home.module.scss';
import { MainHeader } from "../../components/Header/MainHeader";
export const Home = ({
    homeRef,
    guideRef,
    helpRef,
    weTransportRef,
    whyAmityRef,
    redefiningMobilityRef
}) => {
    return <div className={s.home} ref={homeRef}>
        <MainHeader homeRef={homeRef} guideRef={guideRef} helpRef={helpRef} weTransportRef={weTransportRef} whyAmityRef={whyAmityRef} redefiningMobilityRef={redefiningMobilityRef}/>
    </div>
}
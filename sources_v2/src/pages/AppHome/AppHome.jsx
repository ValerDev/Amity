import React, { useRef } from 'react';
import s from './AppHome.module.scss';
import { Footer } from '../Footer/Footer';
import { Guide } from '../Guide/Guide';
import { Help } from '../Help/Help';
import { Home } from '../Home/Home';
import { WeTransport } from '../WeTransport/WeTransport';
import { WhyAmity } from '../WhyAmity/WhyAmity';
export const AppHome = () => {

    const homeRef = useRef(null);
    const guideRef = useRef(null);
    const helpRef = useRef(null);
    const weTransportRef = useRef(null);
    const whyAmityRef = useRef(null);
    const redefiningMobilityRef = useRef(null);

    return (
        <div className={s.AppHome}>
            <Home homeRef={homeRef} guideRef={guideRef} helpRef={helpRef} weTransportRef={weTransportRef} whyAmityRef={whyAmityRef} redefiningMobilityRef={redefiningMobilityRef} />
            <Guide guideRef={guideRef} />
            <Help helpRef={helpRef} />
            <WeTransport redefiningMobilityRef={redefiningMobilityRef} />
            <WhyAmity whyAmityRef={whyAmityRef} />
            <Footer weTransportRef={weTransportRef} />
        </div>
    )
}
import React, { useRef } from 'react';
import s from './App.scss';
import { Footer } from './pages/Footer/Footer';
import { Guide } from './pages/Guide/Guide';
import { Help } from './pages/Help/Help';
import { Home } from './pages/Home/Home';
import { WeTransport } from './pages/WeTransport/WeTransport';
import { WhyAmity } from './pages/WhyAmity/WhyAmity';

function App() {
  const homeRef = useRef(null);
  const guideRef = useRef(null);
  const helpRef = useRef(null);
  const weTransportRef = useRef(null);
  const whyAmityRef = useRef(null);
  const redefiningMobilityRef = useRef(null);
  return (
    <div className={s.App}>
      <Home homeRef={homeRef} guideRef={guideRef} helpRef={helpRef} weTransportRef={weTransportRef} whyAmityRef={whyAmityRef} redefiningMobilityRef={redefiningMobilityRef} />
      <Guide guideRef={guideRef} />
      <Help helpRef={helpRef} />
      <WeTransport redefiningMobilityRef={redefiningMobilityRef}/>
      <WhyAmity whyAmityRef={whyAmityRef} />
      <Footer weTransportRef={weTransportRef}/>
    </div>
  );
}

export default App;

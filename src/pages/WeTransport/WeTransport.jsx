import React from "react";
import s from './WeTransport.module.scss'
import { VehicleTransportCalculator } from "../../components/VehicleTransportCalculator/VehicleTransportCalculator";
import arrow1 from '../../assets/images/WeTransport/arrow1.png'
import arrow2 from '../../assets/images/WeTransport/arrow2.png'
import arrow3 from '../../assets/images/WeTransport/arrow3.png'

export const WeTransport = ({redefiningMobilityRef}) => {
    return (
      <div className={s.weTransport} id="weTransport">
        <VehicleTransportCalculator
          redefiningMobilityRef={redefiningMobilityRef}
        />
        <div className={s.howDoIt}>
          <div>
            <h3>HOW TO DO IT</h3>
            <img alt="arrow" src={arrow1} className={s.arrow1} />
          </div>
          <div>
            <p>1. Request a quote and book the order</p>
            <img alt="arrow" src={arrow2} className={s.arrow2} />
          </div>
          <div>
            <p>
              2. Provide all the necessary information to your logistics
              coordinator
            </p>
            <img alt="arrow" src={arrow3} className={s.arrow3} />
          </div>
          <p>3. RELAX</p>
        </div>
        <div className={s.comingSoon}>
          <h2>COMING SOON</h2>
          <p>To get an instant quote please call (305) 433-3445.</p>
        </div>
      </div>
    );
}

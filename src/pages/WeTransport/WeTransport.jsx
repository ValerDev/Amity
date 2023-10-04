import React from "react";
import s from './WeTransport.module.scss'
import { VehicleTransportCalculator } from "../../components/VehicleTransportCalculator/VehicleTransportCalculator";
import object1 from '../../assets/images/WeTransport/object1.png'
import object2 from '../../assets/images/WeTransport/object2.png'
import object3 from '../../assets/images/WeTransport/object3.png'
import arrow1 from '../../assets/images/WeTransport/arrow1.png'
import arrow2 from '../../assets/images/WeTransport/arrow2.png'
import arrow3 from '../../assets/images/WeTransport/arrow3.png'
import bus from '../../assets/images/WeTransport/bus.png'

export const WeTransport = () => {
    return <div className={s.weTransport}>
        <VehicleTransportCalculator />
        <img alt='object' src={object1} style={{ position: 'absolute', top: '15%', left: '10%' }} />
        <img alt='object' src={object2} style={{ position: 'absolute', top: '20%', right: '10%' }} />
        <img alt='object' src={object3} style={{ position: 'absolute', bottom: '24%', left: '17%' }} />

        <div className={s.howDoIt}>
            <div>
                <h3>HOW TO DO IT</h3>
                <img alt='arrow' src={arrow1} style={{ position: 'absolute', top: '40%', left: '130%' }} />
            </div>
            <div>
                <p>1. Request a quote and book the order</p>
                <img alt='arrow' src={arrow2} style={{ position: 'absolute', top: '40%', left: '110%' }} />
            </div>
            <div>
                <p>2. Provide all the necessary information to your logistics coordinator</p>
                <img alt='arrow' src={arrow3} style={{ position: 'absolute', top: '40%', left: '75%' }} />
            </div>
            <p>3. RELAX</p>
        </div>

        <img alt='bus' src={bus} style={{ position: 'absolute', top: '92%', right: '0%' }} />
        <div className={s.line} />
    </div>
}

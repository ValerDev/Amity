import React from "react";
import s from './WeTransport.module.scss'
import weTransportBackground from '../../assets/images/WeTransport/weTransportBackground.png'
import { weTransportItems } from "./data";
import { VehicleTransportCalculator } from "../../components/VehicleTransportCalculator/VehicleTransportCalculator";

export const WeTransport = () => {
    return <div className={s.weTransport}>
        <img src={weTransportBackground} alt="weTransportBackground" />
            <div className={s.weTransportContent}>
                {weTransportItems.map(item => <div className={s.weTransportTitle} key={item.title}>
                    <h3>{item.title}</h3>
                    {item.items.map(child => <p className={s.weTransportChild} key={child}>{child}</p>)}
                </div>)}
            </div>
        <div className="layout">
            <VehicleTransportCalculator />
        </div>
    </div>
}

import React from "react";
import s from './VehicleTransportCalculator.module.scss'

export const VehicleTransportCalculator = ({redefiningMobilityRef}) => {
    return <div className={s.vehicleTransportCalculator} ref={redefiningMobilityRef}>
        <div className={s.mainContent}>
            <div className={s.form}>
                <h2>vehicle transport calculator</h2>
                <div className={s.inputBlock}>
                    <p>where from</p>
                    <input type="text" placeholder="city or zip" />
                </div>
                <div className={s.inputBlock}>
                    <p>where to</p>
                    <input type="text" placeholder="city or zip" />
                </div>
                <div className={`${s.inputBlock} ${s.radioBlock}`}>
                    <p>transportation type</p>
                    <div className={s.radioInputContent}>
                        <div className={s.radioInputBlock}>
                            <div className={s.customRadio}>
                                <input type="radio" name="transportationType" id="transportationType_1" defaultChecked />
                            </div>
                            <p>open</p>
                        </div>
                        <div className={s.radioInputBlock}>
                            <div className={s.customRadio}>
                                <input type="radio" name="transportationType" id="transportationType_2" />
                            </div>
                            <p>enclosed</p>
                        </div>
                    </div>
                </div>
                <button className={s.confirmMobile}>CONFIRM</button>

            </div>
            <div className={s.callUs}>
                <div className={s.content}>
                    <p className={s.description}>provide us a little bit of information about your order</p>
                    <p className={s.orCall}>or call us at</p>
                    <p className={s.callNumber}>(305) 433-3445</p>
                </div>
            </div>
        </div>
        <button className={s.confirm}>CONFIRM</button>
    </div>
}
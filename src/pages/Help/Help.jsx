import React from "react";
import s from './Help.module.scss';
import { helpItems } from "./data";
import helpBackground from '../../assets/images/Help/helpBackground.png'

export const Help = ({ helpRef }) => {
    return (
      <div className={s.help} ref={helpRef} id="help">
        <img
          src={helpBackground}
          alt="helpBackground"
          className={s.helpBackground}
        />
        <div className={s.helpContent}>
          {helpItems.map((item) => (
            <div className={s.helpTitle} key={item.title}>
              <h3>{item.title}</h3>
              {item.items.map((child) => (
                <p className={s.helpChild} key={child}>
                  {child}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
}
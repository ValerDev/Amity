import React from "react";
import s from './Guide.module.scss';
import { guideItems } from "./data";
import { GuideItem } from "../../components/GuideItem/GuideItem";
import ship from '../../assets/images/Guide/ship.png';


export const Guide = ({ guideRef }) => {

  return (
    <>
      <div className={s.guide} ref={guideRef}>
        <div className={s.content}>
          <div className={s.whatYouNeedBlock}>
            <h3>WHAT YOU NEED IS WHAT WE DO</h3>
            <p>
              our exceptional team of transportation specialists will find a
              way to move the world with seamless service and unparalleled
              professionalism. here at amity transport we are dedicated to
              provide flexible and affordable logistical solutions for the
              transportation of your vehicles, cargo and equipment.
            </p>
            <div className={s.busMobile} />
          </div>
          <div className={s.guideItems}>
            {guideItems.map((item) => (
              <GuideItem
                image={item.image}
                title={item.title}
                description={item.description}
                key={item.title}
              />
            ))}
          </div>
        </div>
        <img src={ship} alt="ship" className={s.ship} />
      </div>
    </>
  );

}
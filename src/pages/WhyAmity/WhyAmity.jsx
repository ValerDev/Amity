import React from "react";
import s from "./WhyAmity.module.scss";

export const WhyAmity = ({ whyAmityRef }) => {
  return (
    <div className={s.whyAmity} ref={whyAmityRef} id="whyAmity">
      <div>
        <h3 className={s.heading}>ABOUT US</h3>
        <div className={s.descriptionBlock}>
          <h4 className={s.subTitle}>AMITY</h4>
          <p>
            Our team consists of experienced logistic specialists and lovely
            support representatives who are ready to wipe up your daily stress
            and fill your day with peace of mind.
          </p>
        </div>
      </div>
      <div className={s.servicesBackground}>
        <div className={s.servicesContent}>
          <div className={s.mainContent}>
            <h3 className={s.title}>SERVICES</h3>
            <div className={s.services}>
              <div className={s.serviceBlock}>
                <h4 className={s.title}>REGULAR</h4>
                <p className={s.description}>
                  Regular service type offers affordable solutions for any of
                  your transportation needs based on your flexibility.{" "}
                </p>
              </div>
              <div className={s.serviceBlock}>
                <h4 className={s.title}>TIME-LIMITED</h4>
                <p className={s.description}>
                  Are you in a rush and terribly need something done? No
                  worries! Our friendly team will make sure to take well care of
                  your shipment and get everything set according your plans.
                </p>
              </div>
              <div className={s.serviceBlock}>
                <h4 className={s.title}>ASSISTED</h4>
                <p className={s.description}>
                  Do you need help to figure out how to get something on and off
                  the truck? Do you need to store the commodity but don't know
                  where to find room for it? Need a helping hand that exactly
                  knows how to do it? Our experienced market specialists will
                  arrange and take care of all logistical difficulties that you
                  are facing.
                </p>
              </div>
            </div>
          </div>
          <div className={`${s.serviceBlock} ${s.communication}`}>
            <h4 className={s.title}>COMMUNICATION</h4>
            <p className={s.description}>
              Here at Amity Transport we evaluate the communication and are
              ready to enlighten all questions arising about the transportation.
              We do think that communication is the key and will be in touch
              during the whole shipping process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

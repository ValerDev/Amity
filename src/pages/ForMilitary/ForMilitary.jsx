import React from "react";
import truck from "../../assets/images/ForMilitary/image.png";
import s from "./ForMilitary.module.scss";
import { Header } from "../../components/Header/Header";
import { militaryData } from "../../data";
import { Footer } from "../Footer/Footer";

export const ForMilitary = () => {
  const { header, subTitle, description, sections, info } = militaryData;
  return (
    <div className={s.container}>
      <Header />
      <div className="page">
        <div className="container">
          <img src={truck} alt={truck} />
          <div className="content">
            <h1>{header}</h1>
            <hr></hr>
            <h2 dangerouslySetInnerHTML={{ __html: subTitle }}></h2>
            <p
              className={s.description}
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            {sections.map((section) => (
              <div key={section.title}>
                <h3 dangerouslySetInnerHTML={{ __html: section.title }}></h3>
                {section.pros.map((pro) => (
                  <div key={pro.title} className="pro">
                    <h6 dangerouslySetInnerHTML={{ __html: pro.title }}></h6>
                    <p
                      dangerouslySetInnerHTML={{ __html: pro.description }}
                    ></p>
                  </div>
                ))}
              </div>
            ))}
            <h3 dangerouslySetInnerHTML={{ __html: info.title }}></h3>
            <div className="list">
              {info.list.map((l) => (
                <p key={l} dangerouslySetInnerHTML={{ __html: l }} />
              ))}
            </div>
            <p
              className={s.description}
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></p>
            <h5 dangerouslySetInnerHTML={{ __html: info.note }}></h5>
            <h3 dangerouslySetInnerHTML={{ __html: info.contact }}></h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

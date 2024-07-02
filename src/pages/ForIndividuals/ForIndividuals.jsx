import React from "react";
import truck from "../../assets/images/ForIndividuals/image.png";
import s from "./ForIndividuals.module.scss";
import { Header } from "../../components/Header/Header";
import { individualsData } from "../../data";
import { Footer } from "../Footer/Footer";

export const ForIndividuals = () => {
  const { header, subTitle, description, sections, info } = individualsData;
  return (
    <div className={s.container}>
      <Header />
      <div className="page">
        <div className="container">
          <img src={truck} alt={truck}/>
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
            <p
              className={s.description}
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

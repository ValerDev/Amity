import React from "react";
import truck from "../../assets/images/ForStudents/image.png";
import s from "./ForStudents.module.scss";
import { Header } from "../../components/Header/Header";
import { studentsData } from "../../data";
import { Footer } from "../Footer/Footer";

export const ForStudents = () => {
  const { header, subTitle, description, sections, info } = studentsData;
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
            <h3 dangerouslySetInnerHTML={{ __html: info.title2 }}></h3>
            <div className="list">
              {info.list2.map((l) => (
                <p key={l} dangerouslySetInnerHTML={{ __html: l }} />
              ))}
            </div>
            <p
              className={s.description}
              dangerouslySetInnerHTML={{ __html: info.description }}
            ></p>
            <h3 dangerouslySetInnerHTML={{ __html: info.title3 }}></h3>
            <p
              className={s.description}
              dangerouslySetInnerHTML={{ __html: info.description2 }}
            ></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

import React from "react";
import s from './GuideItem.module.scss';

export const GuideItem = ({ image, title, description }) => {

    return <div className={s.guideItem}>
        <div className={s.imageBlock}>
            <img src={image} alt={title} />
            <div className={s.imageHover} />
        </div>
        <div className={s.descriptionBlock}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
}
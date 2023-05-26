import React from 'react';
import style from "./Icon.module.css";


type IconType = {
    title: string
}
export const Icon = (props: IconType) => {
    return (
        <div className={style.iconBox}>
            <div className={style.icon}></div>
            <h6 className={style.title}>{props.title}</h6>
        </div>
    );
};


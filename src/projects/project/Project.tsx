import React from 'react';
import style from './Project.module.css'

type SkillType = {
    title: string
    description: string
}
export const Project = (props: SkillType) => {
    return (
        <div className={style.projectContainer}>
            <div className={style.imgBox}>
                <a className={style.button}>Смотреть</a>
            </div>
            <div className={style.title}>{props.title}</div>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
};



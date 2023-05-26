import React from 'react';
import style from './Skill.module.css'

type SkillType = {
    title: string
    description: string
}
export const Skill = (props: SkillType) => {
    return (
        <div className={style.skillBox}>
            <div className={style.iconBox}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
};



import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 '}/>
                    <Skill title={'React'} description={'Текс 2 Текс 2 Текс 2 Текс 2 Текс 2 Текс 2 Текс 2 Текс 2  '}/>
                    <Skill title={'Redux'} description={'Текс 3 Текс 3 Текс 3 Текс 3 Текс 3 Текс 3 Текс 3 Текс 3  '}/>
                </div>
            </div>
        </div>
    );
};



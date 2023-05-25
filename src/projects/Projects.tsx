import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.project}>
                    <Project title={'TodoList'} description={'Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 Текс 1 '}/>
                    <Project title={'Social net'} description={'Текс 2 Текс 2 Текс 2 Текс 2 Текс 2 Текс 2 Текс 2 Текс 2  '}/>
                </div>
            </div>
        </div>
    );
};



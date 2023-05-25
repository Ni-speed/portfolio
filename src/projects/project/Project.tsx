import React from 'react';
import style from './Project.module.css'
import Button from '@mui/material/Button';

type SkillType = {
    title: string
    description: string
}
export const Project = (props: SkillType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={'https://webcomplex.com.ua/wp-content/uploads/2014/07/instacod.png'} alt={'Project'}/>
                    {/*<button className={style.button}>Button</button>*/}
                <Button className={style.button} variant="contained" size="small">Смотреть</Button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
};



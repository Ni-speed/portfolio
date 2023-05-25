import React from 'react';
import style from './Navigate.module.css'

export const Navigate = () => {
    return (
        <div className={style.navigate}>
            <a href=''>Главная</a>
            <a href=''>Скиллы</a>
            <a href=''>Проекты</a>
            <a href=''>Контакы</a>
        </div>
    );
};



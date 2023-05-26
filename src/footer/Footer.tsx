import React from 'react';
import style from './Footer.module.css'
import {Icon} from "./icon/Icon";

export const Footer = () => {
    return (

        <div className={style.footerBox}>
            <h2 className={style.name}>Ilmir Rakhmatullin</h2>
            <div className={style.iconsBox}>
                <Icon title={'LinkedIn'}/>
                <Icon title={'GitHub'}/>
                <Icon title={'Telegram'}/>
                <Icon title={'HH'}/>
            </div>
            <h6>@2023 Все права защищены</h6>
        </div>
    );
};


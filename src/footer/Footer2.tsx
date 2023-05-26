import React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import {Icon} from "./Icon";
import style from './Footer.module.css'
import s from '../common/styles/Container.module.css'

export const Footer = () => {
    return (

        <>
            <div className={style.footerBlock}>

                <BottomNavigation className={`${s.container} ${style.footerContainer}`} showLabels>
                    <BottomNavigationAction label="LinkedIn" icon={<Icon/>}/>
                    <BottomNavigationAction label="GitHub" icon={<Icon/>}/>
                    <BottomNavigationAction label="Telegram" icon={<Icon/>}/>
                </BottomNavigation>

                {/*<h4>@2023 Все права защищены</h4>*/}
            </div>

        </>
    );
};


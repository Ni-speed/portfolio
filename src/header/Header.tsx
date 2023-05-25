import React from 'react';
import style from './Header.module.css'
import {Navigate} from "../navigate/Navigate";

export const Header = () => {
    return (
        <div className={style.header}>
            <Navigate/>
        </div>
    );
};



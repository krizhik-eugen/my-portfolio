import React from 'react';
import style from './Header.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Nav} from "../nav/Nav";


export function Header() {
    return (
        <div className={style.headerBlock}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
}


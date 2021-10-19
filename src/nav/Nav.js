import React from 'react';
import style from './Nav.module.scss';


export function Nav() {
    return (
        <div className={style.nav}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contacts</a>
        </div>
    );
}


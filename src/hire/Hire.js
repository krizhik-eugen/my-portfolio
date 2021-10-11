import React from 'react';
import style from './Hire.module.css';
import styleContainer from './../../src/common/Container.module.css';


export function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I'm available for remote job</h2>
                <a className={style.hireBtn}>Hire me</a>
            </div>
        </div>
    );
}


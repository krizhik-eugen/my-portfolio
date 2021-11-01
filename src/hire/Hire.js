import React from 'react';
import style from './Hire.module.scss';
import styleContainer from '../common/styles/Container.module.css';

export function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I'm available for remote job</h2>
                <div className={style.hireBtnWrapper}>
                    <a className={style.hireBtn}>Contact me</a>
                </div>
            </div>
        </div>
    );
}


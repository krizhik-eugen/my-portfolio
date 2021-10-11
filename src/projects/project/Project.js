import React from 'react';
import style from './Project.module.css';

export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <a className={style.viewBtn}>Watch</a>
            </div>
            <div className={style.subTitle}>{props.title}</div>
            <div className={style.description}>{props.description}</div>
        </div>
    );
}


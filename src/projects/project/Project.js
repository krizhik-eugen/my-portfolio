import React from 'react';
import style from './Project.module.css';

export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.background}><h4 className={style.link}>Watch</h4></div>
            <h5 className={style.title}>{props.title}</h5>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}


import React from 'react';
import style from './Project.module.scss';

export function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
            </div>
            <div className={style.subTitle}>{props.title}</div>
            <div className={style.description}>{props.description}</div>
            <div className={style.viewBtnWrapper}>
                <a className={style.viewBtn}>Watch</a>
            </div>
        </div>
    );
}


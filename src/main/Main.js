import React from 'react';
import style from './Main.module.css';
import styleContainer from './../../src/common/Container.module.css';


export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am <br/>Eugen Krizhik</h1>
                    <p>Junior Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}


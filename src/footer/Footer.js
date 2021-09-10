import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../../src/common/Container.module.css';
import copyrightsymbol from './copyright-symbol.svg'


export function Footer() {
    return (
        <div className={style.rightsBlock}>
            <div className={styleContainer.container}>
                <div className={style.wrapper}>
                    <span className={style.name}>
                    Krizhik Eugen
                </span>
                    <div className={style.someWrapper}>
                        <div className={style.someNote}></div>
                        <div className={style.someNote}></div>
                        <div className={style.someNote}></div>
                        <div className={style.someNote}></div>
                    </div>


                    <div className={style.rights}><img src={copyrightsymbol}/>All rights reserved</div>
                </div>
            </div>
        </div>
    );
}


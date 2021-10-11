import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../../src/common/Container.module.css';
import copyrightSymbol from './copyright-symbol.svg'


export function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <h2 className={style.title}>Krizhik Eugen</h2>
                    <div className={style.socialIcons}>
                        <div className={style.socialIcon}></div>
                        <div className={style.socialIcon}></div>
                        <div className={style.socialIcon}></div>
                        <div className={style.socialIcon}></div>
                    </div>
                    <span className={style.copyright}><img src={copyrightSymbol}/>All rights reserved</span>

            </div>
        </div>
    );
}


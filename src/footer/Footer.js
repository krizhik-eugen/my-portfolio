import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    const currentYear = (new Date()).getFullYear()
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.socialIcons}>
                    <a><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a>
                    <a><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    <a><FontAwesomeIcon icon={faTelegramPlane} size="2x"/></a>
                    <a><FontAwesomeIcon icon={faFacebookF} size="2x"/></a>
                </div>
                <span className={style.copyright}>© {currentYear} All rights reserved</span>

            </div>
        </div>
    );
}


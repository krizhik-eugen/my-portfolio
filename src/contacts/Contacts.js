import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact me'}/>
                    <form className={style.formWrapper}>
                            <div className={style.inputs}>
                                <input type="text" placeholder={'Your Name'}/>
                                <input type="text" placeholder={'Your email address'}/>
                                <input type="text" placeholder={'Subject'}/>
                            </div>
                            <div className={style.message}>
                                <textarea placeholder={'Message'}></textarea>
                                <br/>
                                <div className={style.sendBtnWrapper}>
                                    <a className={style.sendBtn}>Send message</a>
                                </div>
                            </div>
                    </form>
            </div>
        </div>
    );
}


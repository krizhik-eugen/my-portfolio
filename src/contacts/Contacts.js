import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact me'}/>
                <form className={style.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea>
                    </textarea>
                    <button type={'submit'} className={style.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    );
}


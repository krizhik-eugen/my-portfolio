import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../../src/common/Container.module.css';


export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
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


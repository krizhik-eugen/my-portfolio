import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../../src/common/Container.module.css';


export function Contacts() {
    return (
        <div className={styleContainer.container}>
            <div className={style.contactsBlock}>
                <span className={style.text}>
                    Contacts
                </span>
                <form className={style.formBlock}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea>

                    </textarea>
                </form>
                <div className={style.sendButton}>Send</div>
            </div>
        </div>
    );
}


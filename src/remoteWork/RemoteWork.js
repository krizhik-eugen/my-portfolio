import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from './../../src/common/Container.module.css';


export function RemoteWork() {
    return (
        <div className={styleContainer.container}>
            <div className={style.remoteWorkBlock}>
                <span className={style.text}>
                    I'm considering remote job
                </span>
                <div className={style.hireButton}>Hire me</div>
            </div>
        </div>
    );
}


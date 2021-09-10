import React from 'react';
import style from './RemoteWork.module.css';
import styleContainer from './../../src/common/Container.module.css';


export function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={styleContainer.container}>
                <div className={style.wrapper}>
                    <span className={style.text}>
                    I'm considering remote job
                </span>
                    <div className={style.hireButton}>Hire me</div>
                </div>
            </div>
        </div>
    );
}


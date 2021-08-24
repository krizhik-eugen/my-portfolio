import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../../src/common/Container.module.css';
import {Skill} from "./skill/Skill";

const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, cumque dicta doloribus, ducimus eveniet hic inventore ipsam iste laboriosam magni maxime natus officia, praesentium quia rem sapiente similique vero!'

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={desc}/>
                    <Skill title={'CSS'} description={desc}/>
                    <Skill title={'React'} description={desc}/>
                </div>
            </div>
        </div>
    );
}


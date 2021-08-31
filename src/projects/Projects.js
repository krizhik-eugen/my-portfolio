import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../../src/common/Container.module.css';
import {Project} from "./project/Project";

const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa, cumque dicta doloribus, ducimus eveniet hic inventore ipsam iste laboriosam magni maxime natus officia, praesentium quia rem sapiente similique vero!'

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'ToDo List'} description={'Organizer for tasks lists'}/>
                    <Project title={'Social Network'} description={'Social network for talking with friends and finding new contacts'}/>
                </div>
            </div>
        </div>
    );
}


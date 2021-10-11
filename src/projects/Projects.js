import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../../src/common/Container.module.css';
import {Project} from "./project/Project";
import {Title} from '../common/Title';

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project title={'ToDo List'} description={'Organizer for tasks lists'}/>
                    <Project title={'Social Network'} description={'Social network for talking with friends and finding new contacts'}/>
                </div>
            </div>
        </div>
    );
}


import React from 'react';
import style from './Projects.module.scss';
import styleContainer from './../../src/common/Container.module.css';
import {Project} from "./project/Project";
import {Title} from '../common/components/title/Title';
import socNetImg from '../assets/images/socnet8.jpg'
import toDoImg from '../assets/images/todo6.jpg'

const toDoProjectStyle = {
    backgroundImage: `url(${toDoImg})`,
};
const socNetWorkProjectStyle = {
    backgroundImage: `url(${socNetImg})`,
};

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={style.projects}>
                    <Project style={toDoProjectStyle} title={'ToDo List'} description={'Organizer for making tasks lists, with sorting, marking and title changing'}/>
                    <Project style={socNetWorkProjectStyle} title={'Social Network'} description={'Social network for talking with friends and finding new contacts'}/>
                </div>
            </div>
        </div>
    );
}


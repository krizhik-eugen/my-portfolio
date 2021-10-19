import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import JSTSImage from '../assets/images/JSTS.png';
import HTMLCSSImage from '../assets/images/html5-css.png';
import REACTREDUXImage from '../assets/images/react-redux.png';

const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '

const JSTSImageBG = {
    backgroundImage: `url(${JSTSImage})`,
};
const HTMLCSSImageBG = {
    backgroundImage: `url(${HTMLCSSImage})`,
};

const REACTREDUXImageBG = {
    backgroundImage: `url(${REACTREDUXImage})`,
};

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'HTML / CSS'} style={HTMLCSSImageBG} description={desc}/>
                    <Skill title={'JS / TS'} style={JSTSImageBG} description={desc}/>
                    <Skill title={'React / Redux'} style={REACTREDUXImageBG} description={desc}/>
                </div>
            </div>
        </div>
    );
}


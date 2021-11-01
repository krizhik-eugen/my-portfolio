import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import myPhoto from '../assets/images/my_photo.jpg';

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Title title={'About me'}/>
                <div className={style.aboutWrapper}>
                    <div className={style.photoWrapper}>
                        <img src={myPhoto} className={style.photo}/>
                    </div>
                    <div className={style.textWrapper}>
                        <div className={style.subTitle}>YAUHENI KRYZHYK</div>
                        <div className={style.description}>
                            <h3>Frontend Developer</h3>
                            <p>Hi There! I am Junior Frontend Developer.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, delectus doloribus
                                eos impedit laboriosam maxime molestias neque nesciunt quae sint temporibus tenetur unde
                                vel voluptas voluptate voluptates voluptatibus voluptatum?</p>
                        </div>
                        <div className={style.downloadBtnWrapper}>
                            <a className={style.downloadBtn}>Download resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


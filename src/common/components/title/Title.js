import React from 'react';
import styles from './Title.module.scss';


export const Title = (props) => {

    return (
        <div className={styles.heading}>
            <h1 className={styles.subTitle}>
                {props.title}
            </h1>
            <hr/>
        </div>
    )
}
import React from 'react';
import styles from './Title.module.css';


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
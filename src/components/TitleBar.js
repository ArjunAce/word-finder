// @ts-nocheck
import React from 'react'
import styles from './../styles/title-bar.module.scss';
import minimize from "./../assets/images/minimize.png";
import maximize from "./../assets/images/maximize.png";
import close from "./../assets/images/close.png";

function TitleBar() {
    return (
        <div className={styles['title-bar-container']}>
            <div>Word Finder</div>
            <div className={styles['title-bar-controls']}>
                <div className={styles['minimize']}>
                    <img src={minimize} alt='minimize icon' />
                </div>
                <div className={styles['maximize']}>
                    <img src={maximize} alt='maximize icon' />
                </div>
                <div className={styles['close']}>
                    <img src={close} alt='close icon' />
                </div>
            </div>
        </div>
    )
}

export default TitleBar
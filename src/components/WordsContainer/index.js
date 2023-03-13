import React from 'react'
import styles from "./styles.module.scss"
import scroll from "assets/images/scroll.png";
import scrollBottom from "assets/images/scroll-bottom.png";

function WordsContainer() {
    return (
        <div className={styles['words-container']}>
            Words
            <div className={styles['scroll-wrapper']}>
                <img src={scroll} alt="scroll" />
                <img className={styles['scroll-bottom']} src={scrollBottom} alt="scroll" />
            </div>
        </div>
    )
}

export default WordsContainer
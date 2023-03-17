import React from 'react'
import styles from "./styles.module.scss"
import scroll from "assets/images/scroll.png";
import scrollBottom from "assets/images/scroll-bottom.png";
import { INVALID_SOLUTION } from "./../../utils/findWords";

function WordsContainer({ words, solution }) {
    const wordsToStrike = solution.map((x) => x === INVALID_SOLUTION);

    return (
        <div className={styles['words-container']}>
            <div className={styles['title']}>Words to search</div>
            {words.map((x, i) => (<div className={`${styles['word']} ${wordsToStrike[i] ? styles['not-found'] : ''}`} key={i}>{x}</div>))}
            <div className={styles['scroll-wrapper']}>
                <img src={scroll} alt="scroll" />
                <img className={styles['scroll-bottom']} src={scrollBottom} alt="scroll" />
            </div>
        </div>
    )
}

export default WordsContainer
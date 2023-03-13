import React from 'react'
import styles from "./styles.module.scss"
import Button from "components/Button";
import Separator from "components/Separator";
import WordsContainer from "components/WordsContainer";
import Puzzle from "components/Puzzle";

const words1 = ['qfqnwqfqf', 'adqqwdkfg', 'qweqweqwc', 'qfqnwqfqf', 'adqqwdkfg', 'qweqweqwc', 'qfqnwqfqf', 'adqqwdkfg', 'qweqwecwc'];

function PuzzleWrapper() {

    return (
        <div className={styles['puzzle-wrapper']}>
            <div className={styles['main-section']}>
                <div className={styles['left-section']}>
                    <Button label="Upload puzzle" />
                    <Separator />
                    <Button label="Upload words" />
                    <WordsContainer />
                </div>
                <div className={styles['right-section']}>
                    <Puzzle words={words1} />
                </div>
            </div>
            <div className={styles['footer-wrapper']}>
                <div className={styles['footer']}>Loading complete</div>
                <div className={styles['footer']}>Press F1 for help</div>
                <div className={styles['footer']}></div>
            </div>
        </div>
    )
}

export default PuzzleWrapper
import React from 'react'
import styles from "./styles.module.scss"
import Button from "components/Button";
import Separator from "components/Separator";
import WordsContainer from "components/WordsContainer";

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
                </div>
            </div>
            <div className={styles['footer']}>
            </div>

        </div>
    )
}

export default PuzzleWrapper
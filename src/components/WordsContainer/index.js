import React from 'react'
import styles from "./styles.module.scss"
import Button from "components/Button";
import Separator from "components/Separator";

function WordsContainer() {
    return (
        <div className={styles['words-container']}>
            <div className={styles['main-section']}>
                <div className={styles['left-section']}>
                    <Button label="Upload puzzle" />
                    <Separator />
                    <Button label="Upload words" />
                </div>
                <div className={styles['right-section']}>
                </div>
            </div>
            <div className={styles['footer']}>
            </div>

        </div>
    )
}

export default WordsContainer
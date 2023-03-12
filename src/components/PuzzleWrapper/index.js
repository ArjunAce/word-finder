import React from 'react'
import styles from "./styles.module.scss"
import Button from "components/Button";
import Separator from "components/Separator";

function PuzzleWrapper() {
    return (
        <div className={styles['puzzle-wrapper']}>
            <div className={styles['left-section']}>
                <Button label="Upload puzzle" />
                <Separator />
                <Button label="Upload words" />
            </div>
            <div className={styles['right-section']}>
            </div>

        </div>
    )
}

export default PuzzleWrapper
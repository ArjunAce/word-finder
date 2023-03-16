import React, { useState } from 'react'
import styles from "./styles.module.scss"
import Button from "components/Button";
import Separator from "components/Separator";
import WordsContainer from "components/WordsContainer";
import Puzzle from "components/Puzzle";
import ImageUploadButton from "components/ImageUploadButton";

const words1 = ['qfqnwqfqf', 'adqqwdkfg', 'qweqweqwc', 'qfqnwqfqf', 'adqqwdkfg', 'qweqweqwc', 'qfqnwqfqf', 'adqqwdkfg', 'qweqwecwc'];

function PuzzleWrapper() {
    const [words, setWords] = useState(words1.map(x => x.split("")));

    const updateLetter = (newLetter, i, j) => {
        const wordsCopy = JSON.parse(JSON.stringify(words));
        wordsCopy[i][j] = newLetter;
        setWords(wordsCopy);
    };

    const removeLetter = (i, j) => {
        const wordsCopy = JSON.parse(JSON.stringify(words));
        wordsCopy[i].splice(j, 1);
        setWords(wordsCopy);
    };

    return (
        <div className={styles['puzzle-wrapper']}>
            <div className={styles['main-section']}>
                <div className={styles['left-section']}>
                    {/* <Button label="Upload puzzle" /> */}
                    <ImageUploadButton setWords={setWords} />
                    <Separator />
                    <Button label="Upload words" />
                    <WordsContainer />
                </div>
                <div className={styles['right-section']}>
                    <Puzzle words={words} updateLetter={updateLetter} removeLetter={removeLetter} />
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
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import Button from "components/Button";
import Separator from "components/Separator";
import WordsContainer from "components/WordsContainer";
import Puzzle from "components/Puzzle";
import ImageUploadButton from "components/ImageUploadButton";

const puzzle1 = ['OOKAHNLKRHMNIE', 'TWNCHAALWLAROS', 'HOIICPPUAEWOKL', 'ODCRAKAHKIHTUY', 'RIKECSHAWARMAT', 'IWFMHCHYIITNTE', 'RKUAIRKLKAMALS', 'ACRNTAKEOUEMHS', 'KAYIARRYLIENAE', 'ALMAUWOENATOOR', 'LBRTRIYKKHCRNA', 'AAKPITWWCSTIYC', 'ATKAOREARWWMRT', 'TNICYRNHIOORUO'];
const words1 = ["CAPTAIN AMERICA", "SHAWARMA", "IRON MAN", "HULK", "TESSERACT", "NEW YORK", "CHITAURI", "BLACK WIDOW", "THOR", "LOKI", "NICK FURY", "HAWKEYE"];

function PuzzleWrapper() {
    const [puzzle, setPuzzle] = useState(puzzle1.map(x => x.split("")));
    const [words, setWords] = useState(words1);

    const updateLetter = (newLetter, i, j) => {
        const puzzleCopy = JSON.parse(JSON.stringify(puzzle));
        puzzleCopy[i][j] = newLetter;
        setPuzzle(puzzleCopy);
    };

    const removeLetter = (i, j) => {
        const puzzleCopy = JSON.parse(JSON.stringify(puzzle));
        puzzleCopy[i].splice(j, 1);
        setPuzzle(puzzleCopy);
    };

    return (
        <div className={styles['puzzle-wrapper']}>
            <div className={styles['main-section']}>
                <div className={styles['left-section']}>
                    {/* <Button label="Upload puzzle" /> */}
                    <ImageUploadButton label="Upload puzzle" onUpload={setPuzzle} />
                    <Separator />
                    <ImageUploadButton label="Upload words" onUpload={setWords} />
                    <WordsContainer words={words} />
                </div>
                <div className={styles['right-section']}>
                    <Puzzle puzzle={puzzle} updateLetter={updateLetter} removeLetter={removeLetter} />
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
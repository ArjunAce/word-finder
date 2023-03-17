import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import Separator from "components/Separator";
import WordsContainer from "components/WordsContainer";
import Puzzle from "components/Puzzle";
import ImageUploadButton from "components/ImageUploadButton";
import { findWordsInPuzzle } from './../../utils/findWords';

let puzzle1 = ['OOKAHNLKRHMNIE', 'TWNCHAALWLAROS', 'HOIICPPUAEWOKL', 'ODCRAKAHKIHTUY', 'RIKECSHAWARMAT', 'IWFMHCHYIITNTE', 'RKUAIRKLKAMALS', 'ACRNTAKEOUEMHS', 'KAYIARRYLIENAE', 'ALMAUWOENATOOR', 'LBRTRIYKKHCRNA', 'AAKPITWWCSTIYC', 'ATKAOREARWWMRT', 'TNICYRNHIOORUO'];
let words1 = ["CAPTAIN AMERICA", "SHAWARMA", "IRON MAN", "HULK", "TESSERACT", "NEW YORK", "CHITAURI", "BLACK WIDOW", "THOR", "LOKI", "NICK FURY", "HAWKEYE"];
let solution1 = [[[13, 3], [0, 3]], [[4, 5], [4, 12]], [[11, 11], [5, 11]], [[3, 7], [0, 7]], [[4, 13], [12, 13]], [[13, 6], [7, 6]], [[4, 4], [11, 4]], [[10, 1], [1, 1]], [[1, 0], [4, 0]], [[8, 8], [5, 8]], [[null, null], [null, null]], [[13, 7], [7, 7]]];
// puzzle1 = [];
// words1 = [];
// solution1 = [];
function PuzzleWrapper() {
    const [puzzle, setPuzzle] = useState(puzzle1.map(x => x.split("")));
    const [words, setWords] = useState(words1);
    const [solution, setSolution] = useState(solution1);

    useEffect(() => {
        if (puzzle.length && words.length) {
            const solution = findWordsInPuzzle(puzzle, words);
            setSolution(solution);
        }
    }, [puzzle, words]);

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
                    <ImageUploadButton label="Upload puzzle" onUpload={setPuzzle} splitLetters removeSpaces />
                    <Separator />
                    <ImageUploadButton label="Upload words" onUpload={setWords} splitLetters={false} removeSpaces ={false}/>
                    <WordsContainer words={words} solution={solution} />
                </div>
                <div className={styles['right-section']}>
                    <Puzzle puzzle={puzzle} updateLetter={updateLetter} removeLetter={removeLetter} solution={solution} />
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
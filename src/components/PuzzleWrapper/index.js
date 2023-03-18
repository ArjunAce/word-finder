import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import Separator from "components/Separator";
import WordsContainer from "components/WordsContainer";
import Puzzle from "components/Puzzle";
import ImageUploadButton from "components/ImageUploadButton";
import { findWordsInPuzzle } from './../../utils/findWords';

let puzzle1 = ["TOAHNLKRHMNE", "HWCHALLWSAYT", "OOICUPEOKEOC", "RDOHKAVWKCTA", "TINRSHRWAIMR", "EWIITHANOSNE", "RKAICHMKAEAS", "ACTGAKEOWEMS", "KAPORRFYIENE", "ALACOOOUATOT", "LBCRIRKORCRN", "AAPIKWGCTYIY"];
let words1 = ["CAPTAIN", "GROOT", "SHAWARMA", "IRON MAN", "HULK", "TESSERACT", "NEW YORK", "THANOS", "MARVEL", "BLACK WIDOW", "THOR", "LOKI", "NICK FURY", "HAWKEYE"];
let solution1 = [[[10, 2], [4, 2]], [[11, 6], [7, 2]], [[null, null], [null, null]], [[11, 10], [5, 10]], [[3, 3], [0, 6]], [[9, 11], [1, 11]], [[5, 10], [11, 4]], [[5, 4], [5, 9]], [[6, 6], [1, 6]], [[10, 1], [1, 1]], [[0, 0], [3, 0]], [[1, 6], [4, 9]], [[4, 2], [11, 9]], [[6, 5], [0, 11]]];
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
                    <ImageUploadButton label="Upload words" onUpload={setWords} splitLetters={false} removeSpaces={false} />
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
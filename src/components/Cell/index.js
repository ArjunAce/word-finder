import styles from "./styles.module.scss"
import cell from "assets/images/cell.png";
import React, { useState } from 'react';

const Cell = ({ letter, updateLetter, row, col }) => {
    const [editable, setEditable] = useState(false);
    const [currentLetter, setCurrentLetter] = useState(letter);
    const [tempValue, setTempValue] = useState('');

    const handleLetterClick = () => {
        setEditable(true);
        setTempValue(currentLetter);
        setCurrentLetter('');
    };

    const handleChange = (event) => {
        updateLetter(event.target.value.toUpperCase(), row, col);
        setEditable(false);
    };

    const handleBlur = () => {
        if (currentLetter === '') {
            setCurrentLetter(tempValue);
        }
    };
    return (
        <div className={styles['cell']}>
            <img src={cell} alt='cell background' />
            {editable || currentLetter === '' ? (
                <input type="text" value={currentLetter} onChange={handleChange} onBlur={handleBlur}
                    maxLength="1" autoFocus />
            ) : (
                <span onClick={handleLetterClick}>{currentLetter}</span>
            )}
        </div>
    );
};

export default Cell;
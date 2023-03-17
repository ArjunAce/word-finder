import styles from "./styles.module.scss"
import cell from "assets/images/cell.png";
import React, { useState } from 'react';

const Cell = ({ letter, updateLetter, row, col, removeLetter }) => {
    const [editable, setEditable] = useState(false);
    const [currentLetter, setCurrentLetter] = useState(letter);
    const [tempValue, setTempValue] = useState('');

    const handleLetterClick = () => {
        setEditable(true);
        setTempValue(currentLetter);
        setCurrentLetter('');
    };

    const handleChange = (event) => {
        // console.log("handleChange");
        if (!event.target.value.toUpperCase().trim()) {
            return
        }
        updateLetter(event.target.value.toUpperCase(), row, col);
        setEditable(false);
    };

    const handleBlur = () => {
        // console.log("handleBlur");
        /**
         * On click of remove letter icon, the blur event fires removing
         * the remove-letter-span even before the onClick listener is called.
         * Introduced a delay to wait for the onClick to fire.
         */
        // 
        setTimeout(() => {
            if (currentLetter === '') {
                setCurrentLetter(tempValue);
            }
            setEditable(false);
        }, 200);

    };

    return (
        <div className={styles['cell']}>
            <img src={cell} alt='cell background' />
            {editable || currentLetter === '' ? (
                <>
                    <input type="text" value={currentLetter} onChange={handleChange} onBlur={handleBlur}
                        maxLength="1" autoFocus />
                    <span className={styles['cross']} title="Remove letter" onClick={() => {
                        removeLetter(row, col);
                    }}></span>
                </>
            ) : (
                <span className={styles['letter']} onClick={handleLetterClick}>{currentLetter}</span>
            )}
        </div>
    );
};

export default Cell;
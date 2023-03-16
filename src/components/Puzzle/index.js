
import React from 'react'
import styles from "./styles.module.scss"
import Cell from "components/Cell";

function Puzzle({ words: cells, updateLetter, removeLetter }) {
    return (
        <div className={styles['puzzle']}>
            {cells.map(
                (rows, i) => {
                    const row = rows.map((c, j) => <Cell key={i + "" + j + c} row={i} col={j} letter={c} updateLetter={updateLetter} removeLetter={removeLetter} />)
                    return (
                        <div key={i} className={styles['row']}>
                            {row}
                        </div>)
                }
            )}
        </div>
    )
}

export default Puzzle
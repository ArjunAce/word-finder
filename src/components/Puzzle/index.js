
import React from 'react'
import styles from "./styles.module.scss"
import Cell from "components/Cell";

function Puzzle({ words: cells }) {
    return (
        <div className={styles['puzzle']}>
            {cells.map(
                (rows, i) => {
                    const row = rows.map((c, j) => <Cell key={i + "" + j} letter={c} />)
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
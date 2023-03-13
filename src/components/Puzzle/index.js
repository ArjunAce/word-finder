
import React from 'react'
import styles from "./styles.module.scss"
import Cell from "components/Cell";

function Puzzle({
    words = words1
}) {
    const cells = words.map(x => x.split(""));
    return (
        <div className={styles['puzzle']}>
            {cells.map(
                (rows, i) => {
                    const row = rows.map((c, j) => <Cell letter={c} key={i + "" + j} />)
                    return (
                        <div className={styles['row']}>
                            {row}
                        </div>)
                }
            )}
        </div>
    )
}

export default Puzzle
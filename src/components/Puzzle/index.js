
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import Cell from "components/Cell";
import Line from "components/Line";
import { getLineCoords } from "./../../utils";

const solution = [[[13, 3], [0, 3]], [[4, 5], [4, 12]], [[11, 11], [5, 11]], [[3, 7], [0, 7]], [[4, 13], [12, 13]], [[13, 6], [7, 6]], [[4, 4], [11, 4]], [[10, 1], [1, 1]], [[1, 0], [4, 0]], [[8, 8], [5, 8]], [[null, null], [null, null]], [[13, 7], [7, 7]]];
function Puzzle({ puzzle: cells, updateLetter, removeLetter }) {
    const [linesCoords, setLinesCoords] = useState([]);
    React.useEffect(() => {
        setLinesCoords(solution.map(getLineCoords));
    }, []);
    return (
        <div className={styles['puzzle']}>
            {linesCoords.map(({ coords1, coords2 }, index) => (<Line key={index} coords1={coords1} coords2={coords2} />))}
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
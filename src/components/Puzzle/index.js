
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import Cell from "components/Cell";
import Line from "components/Line";
import { getLineCoords } from "./../../utils";
import { INVALID_SOLUTION } from "./../../utils/findWords";

function Puzzle({ puzzle: cells, updateLetter, removeLetter, solution }) {
    const [linesCoords, setLinesCoords] = useState([]);
    const colorMap = ["#ea638c", "#b33c86", "#3c22bf", "#544bfb", "#33ffda", "#8dd07b", "#8f5083", "#62938a", "#dfee7a"];

    React.useEffect(() => {
        setLinesCoords(solution.filter((x) => x !== INVALID_SOLUTION).map(getLineCoords));
    }, [solution]);
    return (
        <div className={styles['puzzle']}>
            {linesCoords.map(({ coords1, coords2 }, index) => (<Line key={index} coords1={coords1} coords2={coords2} color={colorMap[index % colorMap.length]} />))}
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
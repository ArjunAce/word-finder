import React from 'react'
import styles from "./styles.module.scss"
import cell from "assets/images/cell.png";

function Cell({ letter, key, }) {
    return (
        <div className={styles['cell']}>
            <img key={key} src={cell} alt='cell background' />
            <span>{letter}</span>
        </div>
    )
}

export default Cell;
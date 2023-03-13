import React from 'react'
import styles from "./styles.module.scss"
import cell from "assets/images/cell.png";

function Cell({ letter }) {
    return (
        <div className={styles['cell']}>
            <img src={cell} alt='cell background' />
            <span>{letter}</span>
        </div>
    )
}

export default Cell;
import React from 'react'
import styles from "./styles.module.scss"

function Line({ coords1, coords2 }) {
    return (
        <svg className={styles['line']}>
            <line
                x1={coords1.x}
                y1={coords1.y}
                x2={coords2.x}
                y2={coords2.y}
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    );
};

export default Line;
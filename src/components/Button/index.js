import React from 'react'
import styles from "./styles.module.scss"

function Button({ label }) {
    return (
        <div className={styles['button']}>{label}</div>
    )
}

export default Button
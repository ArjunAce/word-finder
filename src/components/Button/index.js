import React from 'react'
import styles from "./styles.module.scss"

function Button({ label, onClick }) {
    return (
        <div className={styles['button']} onClick={onClick}>{label}</div>
    )
}

export default Button
import React from 'react'
import styles from "./styles.module.scss"

function Tabs({ tabName }) {
    return (
        <div className={styles['tab']}>{tabName}</div>
    )
}

export default Tabs
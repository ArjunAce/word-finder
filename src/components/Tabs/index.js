import React from 'react'
import styles from "./styles.module.scss"

function Tabs({ tabName = 'Gamer'}) {
    return (
        <div className={styles['tab']}>{tabName}</div>
    )
}

export default Tabs
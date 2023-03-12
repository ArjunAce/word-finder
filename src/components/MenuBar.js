// @ts-nocheck
import React from 'react'
import styles from './../styles/menu-bar.module.scss';

const menuBarItems = ['File', 'Edit', 'View', 'Go', 'Favorites', 'Help'];

function MenuBar() {
    return (
        <div className={styles['menu-bar-container']}>
            {menuBarItems.map((x, i) => (<div key={i}>{x}</div>))}
        </div>
    )
}

export default MenuBar
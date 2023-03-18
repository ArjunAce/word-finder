import React from "react";
import TitleBar from 'components/TitleBar';
import MenuBar from 'components/MenuBar';
import Separator from 'components/Separator';
import TabsWrapper from 'components/TabsWrapper';
import PuzzleWrapper from 'components/PuzzleWrapper';
import styles from "./styles.module.scss"
import menuBar from "assets/images/menu-bar.jpg";

const App = () => {
    return (
        <React.Fragment>
            <div id="home" className={styles['app-wrapper']}>
                <div className={styles['container']}>
                    <TitleBar />
                    <MenuBar />
                    <div className={styles['main-content']}>
                        <Separator />
                        <TabsWrapper />
                        <PuzzleWrapper />
                    </div>
                </div>
                <img src={menuBar} alt='menu bar' />
            </div>
        </React.Fragment>
    );
};

export default App;
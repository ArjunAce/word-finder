import React from "react";
import TitleBar from '../TitleBar';
import MenuBar from '../MenuBar';
import Separator from '../Separator';
import styles from "./styles.module.scss"

const App = () => {
    return (
        <React.Fragment>
            <div id="home">
                <div className={styles['container']}>
                    <TitleBar />
                    <MenuBar />
                    <div className={styles['main-content']}>
                        <Separator />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;
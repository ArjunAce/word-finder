import React from "react";
import TitleBar from 'components/TitleBar';
import MenuBar from 'components/MenuBar';
import Separator from 'components/Separator';
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
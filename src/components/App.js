import React from "react";
import TitleBar from './TitleBar';
import MenuBar from './MenuBar';
import styles from "./../styles/app.module.scss"

const App = () => {
    return (
        <React.Fragment>
            <div id="home">
                <div className={styles['container']}>
                    <TitleBar />
                    <MenuBar />
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;
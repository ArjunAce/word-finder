import React from 'react'
import Tabs from 'components/Tabs';

const tabsConfig = ["Game", "About", "+"];
function TabsWrapper() {
    return (
        <div>
            {tabsConfig.map((x, i) => (<Tabs key={i} tabName={x} />))}
        </div>
    )
}

export default TabsWrapper
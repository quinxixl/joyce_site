import React from 'react';
import Header from "../components/UI/Header";
import Filter from "../scripts/function/Filter";
import RevealText from "../components/animation/RevealText";

function Catalog() {
    return (
        <React.Fragment>
            <Header  />
            <div style={{paddingTop: '120px'}}></div>
            <RevealText direction='up' delay={200}>
                <Filter/>
            </RevealText>
        </React.Fragment>
    )
}

export default Catalog;
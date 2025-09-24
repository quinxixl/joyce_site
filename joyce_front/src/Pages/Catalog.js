import React from 'react';
import Header from "../components/UI/Header";
import Filter from "../scripts/function/Filter";

function Catalog() {
    return (
        <React.Fragment>
            <Header/>
            <div style={{paddingTop: '120px'}}></div>
            <Filter/>
        </React.Fragment>
    )
}

export default Catalog;
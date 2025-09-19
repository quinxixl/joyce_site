import React from "react";
import Header from "../components/UI/Header";
import SectionTitle from "../sections/mainpage/SectionTitle";
import SectionConstruction from "../sections/mainpage/SectionConstruction";
import RevealText from "../components/animation/RevealText";
import SectionBestSeller from "../sections/mainpage/SectionBestSeller";

function MainPage() {
    return (
        <React.Fragment>
            <Header/>
            <div style={{paddingTop: '120px'}}></div>
            <RevealText direction='up' delay={100}>
                <SectionTitle/>
            </RevealText>
            <RevealText direction='up' delay={200}>
                <SectionConstruction />
            </RevealText>
            <RevealText direction='up' delay={200}>
                <SectionBestSeller />
            </RevealText>
        </React.Fragment>
)
}

export default MainPage;
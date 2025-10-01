import React from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import SectionTitle from "../sections/mainpage/SectionTitle";
import SectionConstruction from "../sections/mainpage/SectionConstruction";
import RevealText from "../components/animation/RevealText";
import SectionBestSeller from "../sections/mainpage/SectionBestSeller";
import SectionReviews from "../sections/mainpage/SectionReviews";

function MainPage({cart, addToCart, removeFromCart}) {
    return (
        <React.Fragment>
            <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
            <div style={{paddingTop: '120px'}}></div>
            <RevealText direction='up' delay={100}>
                <SectionTitle/>
            </RevealText>
            <RevealText direction='up' delay={200}>
                <SectionConstruction />
            </RevealText>
            <RevealText direction='up' delay={200}>
                <SectionBestSeller addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
            </RevealText>
            <RevealText direction='up' delay={200}>
                <SectionReviews />
            </RevealText>
            <RevealText direction='up' delay={200}>
                <Footer />
            </RevealText>
        </React.Fragment>
)
}

export default MainPage;
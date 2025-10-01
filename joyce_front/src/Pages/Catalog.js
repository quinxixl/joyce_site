import React from 'react';
import Header from "../components/UI/Header";
import Filter from "../scripts/function/Filter";
import RevealText from "../components/animation/RevealText";
import Footer from "../components/UI/Footer";

function Catalog({addToCart, cart, removeFromCart}) {
    return (
        <React.Fragment>
            <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
            <div style={{paddingTop: '120px'}}></div>
            <RevealText direction='up' delay={200}>
                <Filter addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
            </RevealText>
            <RevealText direction='up' delay={200}>
                <Footer />
            </RevealText>
        </React.Fragment>
    )
}

export default Catalog;
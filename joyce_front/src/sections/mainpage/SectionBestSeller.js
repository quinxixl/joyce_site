import React from "react";
import SliderBestSeller from "../../components/animation/SliderBestSeller";


function SectionBestSeller({addToCart, removeFromCart}) {
    return (
        <div className="section__bestSeller">
            <p className="section__bestSeller-title">
                ХИТЫ ПРОДАЖ
            </p>
            <div className="slider--wrapper">
                <SliderBestSeller addToCart={addToCart} removeFromCart={removeFromCart} />
            </div>
        </div>
    )
}

export default SectionBestSeller;
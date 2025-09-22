import React from "react";
import SliderBestSeller from "../../components/animation/SliderBestSeller";


function SectionBestSeller() {
    return (
        <div className="section__bestSeller">
            <p className="section__bestSeller-title">
                ХИТЫ ПРОДАЖ
            </p>
            <div className="slider--wrapper">
                <SliderBestSeller />
            </div>
        </div>
    )
}

export default SectionBestSeller;
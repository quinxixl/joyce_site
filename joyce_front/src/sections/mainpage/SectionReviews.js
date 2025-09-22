import React from "react";
import SliderReviews from "../../components/animation/SliderReviews";

function SectionReviews(){
    return (
        <div className="reviews-container">
            <p class="reviews__title">
                Отзывы
            </p>
            <div className="reviews__slider-container">
                <SliderReviews />
            </div>
        </div>
    )
}

export default SectionReviews;
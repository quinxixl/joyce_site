import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import CardReviews from "../cards/CardReviews";
import "swiper/css/bundle";

const cardReviewsArray = [
    {
        name: 'Маленюк Н.',
        image:'http://localhost:8080/reviews.png',
        description:'Фреши пушка, заказывайте, всем советую. Выпил и почувствовал себя на все 100%',
        date:'05.09.2025',
    },
    {
        name: 'Маленюк Н.',
        image:'http://localhost:8080/reviews.png',
        description:'Фреши пушка, заказывайте, всем советую. Выпил и почувствовал себя на все 100%',
        date:'06.09.2025',
    },
    {
        name: 'Маленюк Н.',
        image:'http://localhost:8080/reviews.png',
        description:'Фреши пушка, заказывайте, всем советую. Выпил и почувствовал себя на все 100%',
        date:'07.09.2025',
    },
    {
        name: 'Маленюк Н.',
        image:'http://localhost:8080/reviews.png',
        description:'Фреши пушка, заказывайте, всем советую. Выпил и почувствовал себя на все 100%',
        date:'08.09.2025',
    },
    {
        name: 'Маленюк Н.',
        image:'http://localhost:8080/reviews.png',
        description:'Фреши пушка, заказывайте, всем советую. Выпил и почувствовал себя на все 100%',
        date:'09.09.2025',
    },
    {
        name: 'Маленюк Н.',
        image:'http://localhost:8080/reviews.png',
        description:'Фреши пушка, заказывайте, всем советую. Выпил и почувствовал себя на все 100%',
        date:'10.09.2025',
    },
]

function SliderReviews() {
    return (
        <div className="slider-reviews-container ">

            <div className="reviews-navigation-top">
                <div className="reviews-button-prev"></div>
                <div className="reviews-button-next"></div>
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                speed={800}
                navigation={{
                    nextEl: '.reviews-button-next',
                    prevEl: '.reviews-button-prev',
                }}
            >
                {cardReviewsArray.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardReviews item={item}/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}


export default SliderReviews;
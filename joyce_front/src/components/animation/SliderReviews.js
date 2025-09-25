import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import CardReviews from "../cards/CardReviews";
import "swiper/css/bundle";

function SliderReviews() {
    const [cardReviewsArray, setCardReviewsArray] = useState([])
    const API_URL = "http://localhost:1337/api/reviews";

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();

            const transformedData = data.data.map(review => ({
                name: review.name,
                image: review.avatar_src,
                description: review.review,
                date: review.date,
            }));

            setCardReviewsArray(transformedData);
        };
        fetchReviews();
    }, []);

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
    );
}


export default SliderReviews;
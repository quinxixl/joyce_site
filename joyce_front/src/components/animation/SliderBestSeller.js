import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import CardProduct from "../cards/CardProduct";

function SliderBestSeller({ addToCart, removeFromCart, cart }) {
    const [cardProductArray, setCardProductArray] = useState([]);

    const API_URL = 'http://localhost:1337/api/cards';


    useEffect(() => {
        const fetchCards = async () => {

            const response = await fetch(API_URL);
            const data = await response.json();

            const transformedData = data.data.map(item => ({
                id: item.id.toString(),
                name: item.name,
                price: item.price.toString(),
                previewPicture: item.previewPicture,
                bgPicture: item.bgPicture,
                hashtag1: item.hashtag1,
                hashtag2: item.hashtag2,
                lists: item.lists || [],
                category: item.category || []
            }));

            setCardProductArray(transformedData);
        };

        fetchCards();
    }, []);

    return (
        <div className="slider--Container">
            <Swiper
                className="swiper--slider"
                modules={[Mousewheel, FreeMode, Autoplay]}
                slidesPerView={3}
                spaceBetween={48}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                mousewheel={{
                    enabled: true,
                    sensitivity: 0.35,
                    forceToAxis: true,
                    releaseOnEdges: false,
                    thresholdDelta: 10,
                    thresholdTime: 300
                }}
                freeMode={{
                    enabled: true,
                    momentum: false,
                    sticky: true
                }}
                speed={1400}
                resistance={true}
                resistanceRatio={0.95}
                threshold={15}
            >
                {cardProductArray.map(item => (
                    <SwiperSlide key={item.id}>
                        <CardProduct
                            item={item}
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliderBestSeller;
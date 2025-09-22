import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel, FreeMode} from "swiper/modules";
import "swiper/css/bundle"
import CardProduct from "../cards/CardProduct";

const cardProductArray = [
    {
        id: '1',
        name: 'Ягодный бум',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhos:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        list1: 'Банан заряжает энергией.',
        list2: 'Банан заряжает энергией.',
        list3: 'Банан заряжает энергией.',
        list4: 'Банан заряжает энергией.',
        list5: 'Банан заряжает энергией.',
        list6: 'Персик поддерживает кожу и иммунитет.',
    },
    {
        id: '2',
        name: 'Цитрусовый бум',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhos:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        list1: 'Банан заряжает энергией.',
        list2: 'Банан заряжает энергией.',
        list3: 'Банан заряжает энергией.',
        list4: 'Банан заряжает энергией.',
        list5: 'Банан заряжает энергией.',
        list6: 'Персик поддерживает кожу и иммунитет.',
    },
    {
        id: '3',
        name: 'Кислый джони',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhos:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        list1: 'Банан заряжает энергией.',
        list2: 'Банан заряжает энергией.',
        list3: 'Банан заряжает энергией.',
        list4: 'Банан заряжает энергией.',
        list5: 'Банан заряжает энергией.',
        list6: 'Персик поддерживает кожу и иммунитет.',
    },
    {
        id: '4',
        name: 'Яблочный грут',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhos:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        list1: 'Банан заряжает энергией.',
        list2: 'Банан заряжает энергией.',
        list3: 'Банан заряжает энергией.',
        list4: 'Банан заряжает энергией.',
        list5: 'Банан заряжает энергией.',
        list6: 'Персик поддерживает кожу и иммунитет.',
    },
    {
        id: '5',
        name: 'Крутой поц',
        price: '150',
        previewPicture: 'http://localhost:8080/previewPicture.png',
        bgPicture: 'http://localhos:8080/bgPicture.png',
        hashtag1: '#Для энергии',
        hashtag2: '#Детокс',
        list1: 'Банан заряжает энергией.',
        list2: 'Банан заряжает энергией.',
        list3: 'Банан заряжает энергией.',
        list4: 'Банан заряжает энергией.',
        list5: 'Банан заряжает энергией.',
        list6: 'Персик поддерживает кожу и иммунитет.',
    }
    //python3 -m http.server 8080  cd pictures
];

function SliderBestSeller(){
    return (
        <div class="slider--Container">
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
                {cardProductArray.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardProduct item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default SliderBestSeller;





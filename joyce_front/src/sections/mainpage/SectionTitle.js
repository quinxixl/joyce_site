import React, {useEffect, useState} from 'react';
import Button from '../../components/buttons/Button';
import pictureSectionTitle1 from '../../illustrations/pictureSectionTitle-1.jpg';
import pictureSectionTitle2 from '../../illustrations/pictureSectionTitle-2.jpg';
import pictureSectionTitle3 from '../../illustrations/pictureSectionTitle-3.jpg';
import ImageFadeSwitcher from "../../components/animation/ImageSwitcher";


function SectionTitle() {

    const pictureSectionTitle = [
        pictureSectionTitle1,
        pictureSectionTitle2,
        pictureSectionTitle3,
    ];

    return (
        <div className="section__title">
            <div className="section__title-aboutUS">
                <p className="section__title-title">
                    Мы не производим  <br />
                    сок — мы сохраняем <br />
                    природу в стакане. <br />
                </p>
                <p className="section__title-description">
                    Фреш прямо из сада — это свежие <br />
                    витамины и энергия природы, <br />
                    которые наполняют тебя <br />
                    лёгкостью и заботятся о здоровье <br />
                    каждый день. <br />
                </p>
                <Button name='Заказать фреш' className="section__title-button"/>
            </div>
            <div className="section__title-pictures">
                <ImageFadeSwitcher
                    images={pictureSectionTitle}
                    interval={4000}
                    fadeDuration={800}
                    objectFit="cover"
                    className='section__title-picture'
                    altPrefix="Hero image"
                />
            </div>
        </div>
    )
}

export default SectionTitle;
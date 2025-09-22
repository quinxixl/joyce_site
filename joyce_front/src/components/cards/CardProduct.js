import React from 'react';
import Counter from "../buttons/Counter";

const CardProduct = ({ item }) => {
    return (
        <div className="card__main-wrapper">
            <div className="white--background">
                <div className='card__wrapper'>
                    <div className="card__overlay-container">
                        <div className="card__picture-container">
                            <img
                                src={item.previewPicture}
                                alt={item.name}
                                className="card__picture-preview"
                            />
                        </div>
                        <div className="card__overlay">
                            <div className="card__overlay-hashtag">
                                <p className="card__overlay-hashtag-1">{item.hashtag1}</p>
                                <p className="card__overlay-hashtag-2">{item.hashtag2}</p>
                            </div>
                            <div className="card__overlay-list">
                                <ul className="card__overlay-list-main">
                                    <li className="card__overlay-list-element">{item.list1}</li>
                                    <li className="card__overlay-list-element">{item.list2}</li>
                                    <li className="card__overlay-list-element">{item.list3}</li>
                                    <li className="card__overlay-list-element">{item.list4}</li>
                                    <li className="card__overlay-list-element">{item.list5}</li>
                                    <li className="card__overlay-list-element">{item.list6}</li>
                                </ul>
                            </div>
                            <p class="card__overlay-volume">Объем: 500 мл.</p>
                        </div>
                    </div>
                    <p className="card__title">{item.name}</p>
                    <p className="card__price">{item.price} ₽</p>
                </div>
            </div>
            <Counter />
        </div>
    )
}


export default CardProduct;
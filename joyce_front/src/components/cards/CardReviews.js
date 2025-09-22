import React from "react";

function CardReviews({item}) {
    return (
        <div className="review__card">
            <div className="review__card-info">
                <span className="review__card-name">
                    {item.name}
                </span>
                <img className="review__card-image" src={item.image} alt='Аватарка клиента'/>
            </div>
            <div className="review__card-title">
                <p className="review__card-description">
                    {item.description}
                </p>
                <span className="review__card-date">
                    {item.date}
                </span>
            </div>
        </div>
    )
}

export default CardReviews;
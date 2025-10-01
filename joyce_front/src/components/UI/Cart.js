import React from 'react';
import closeBtn from "../../icons/close.png"
import Counter from "../buttons/Counter";

function Cart({toggleSidebar, cart, addToCart, removeFromCart}) {
    return (
        <div className="cart-wrapper">
            <div className="cart__title">
                <p className="cart__title-text">
                    Ваша корзина
                </p>
                <button className="cart__title-button" onClick={toggleSidebar}>
                    <img src={closeBtn} alt="Закрыть" className="cart__title-button-icon"/>
                </button>
            </div>
            <div className="cart__card-container">
                {cart.map((item) => (
                    <div className="cart__card-item" key={item.id}>
                        <img src={item.previewPicture} alt="" className="cart__card-img"/>
                        <div className="cart__card-section">
                            <p className="cart__card-section-title">
                                {item.name}
                            </p>
                            <p className="cart__card-section-value">
                                500мл.
                            </p>
                        </div>
                        <div className="cart__card-actions">
                            <p class="cart-card-actions-price">
                                {item.price} ₽
                            </p>
                            <Counter addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} product={item}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart__button-container">
                <p className="cart__button-summary">
                    Всего:
                </p>
                <button className="cart__button">
                    Заказать
                </button>
            </div>
        </div>
    )
}

export default Cart;
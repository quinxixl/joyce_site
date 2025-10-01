import React from "react";

function Counter({addToCart, product, removeFromCart, cart = []}) {
    if (!product) return null;
    const itemInCart = cart.find(item => item.name === product.name);
    const value = itemInCart ? itemInCart.quantity : 0;

    return (
        <div class="card__button">
            <button className="card__button-minus" id="counterMinus" onClick={() => removeFromCart(product.name)} disabled={value === 0}>
                -
            </button>
            <span className="card__button-metre" id='counter'>
                {value}
            </span>
            <button className="card__button-plus" id='counterPlus' onClick={() => addToCart(product)}>
                +
            </button>
        </div>
    )
}

export default Counter;
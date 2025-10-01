import {React, useState} from "react";

import LogoIllustration from "../../illustrations/logo.svg";
import CartIcon from "../../icons/shopping_bag.svg";
import AccountIcon from "../../icons/account_circle.svg";
import Cart from "./Cart";

function Header({cart, addToCart, removeFromCart}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleSidebar = () => {
        setIsCartOpen(rev => !rev);
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <a href="/catalog" class="header__nav-element header__nav-catalog">Каталог</a>
                <a href="#" class="header__nav-element header__nav-construction">Конструктор фреша</a>
            </nav>
            <div class="header__logo-container">
                <a href="/" className="header__logo-link">
                    <img src={LogoIllustration} alt="Логотип компании Джойс" className="header__logo-img" />
                </a>
            </div>
            <nav class="header__nav-second">
                <button  className="header__nav-element" onClick={toggleSidebar}>
                    <img src={CartIcon} alt="Корзина"/>
                </button>
                <div className={`header__sideBar-wrapper ${isCartOpen ? "cart__open" : ""}`}>
                    <Cart toggleSidebar={toggleSidebar} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
                </div>
                <a href="#" className="header__nav-element header__nav-account">
                    <img src={AccountIcon} alt="Аккаунт"/>
                </a>
            </nav>
        </header>
    )
}

export default Header;
import React from "react";

import LogoIllustration from "../../illustrations/logo.svg";
import CartIcon from "../../icons/shopping_bag.svg";
import AccountIcon from "../../icons/account_circle.svg";

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a href="#" class="header__nav-element header__nav-catalog">Каталог</a>
                <a href="#" class="header__nav-element header__nav-construction">Конструктор фреша</a>
            </nav>
            <div class="header__logo-container">
                <a href="#" className="header__logo-link">
                    <img src={LogoIllustration} alt="Логотип компании Джойс" className="header__logo-img" />
                </a>
            </div>
            <nav class="header__nav-second">
                <a href="#" className="header__nav-element">
                    <img src={CartIcon} alt="Корзина"/>
                </a>
                <a href="#" className="header__nav-element header__nav-account">
                    <img src={AccountIcon} alt="Аккаунт"/>
                </a>
            </nav>
        </header>
    )
}

export default Header;
import React from "react";
import borderFooter from "../../icons/borderFooter.svg";
import logo from "../../illustrations/logo.svg";
import sbp from "../../icons/sbp.png";
import mir from "../../icons/mir.png";
import money from "../../icons/money.png";
import vk from "../../icons/vk.png";
import whatsapp from "../../icons/whatsapp.png";
import telegram from "../../icons/telegram.png";

function Footer() {
    return (
        <footer className="footer-container">
            <img src={borderFooter} className="footer__image" />
            <img src={logo} className="footer__logo" />
            <div className="footer__section">
                <nav className="footer__nav">
                    <a href="/catalog" className="footer__nav-element">Каталог</a>
                    <a href="#" className="footer__nav-element">Конструктор фреша</a>
                    <a href="#" className="footer__nav-element">Корзина</a>
                    <a href="#" className="footer__nav-element">Личный кабинет</a>
                </nav>
                <div className="footer__services">
                    <div className="footer__payment">
                        <img src={sbp} alt="СБП" className="footer__payment-element"/>
                        <img src={mir} alt="МИР" className="footer__payment-element"/>
                        <img src={money} alt="Юмани" className="footer__payment-element"/>
                    </div>
                    <div className="footer__links">
                        <a href="#">
                            <img src={vk} alt="ВК" className="footer__social-element"/>
                        </a>
                        <a href="#">
                            <img src={whatsapp} alt="Ватсап" className="footer__social-element"/>
                        </a>
                        <a href="#">
                            <img src={telegram} alt="Телеграм" className="footer__social-element"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
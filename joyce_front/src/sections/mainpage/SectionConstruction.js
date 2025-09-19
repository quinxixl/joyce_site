import React from "react";
import Button from "../../components/buttons/Button";

function SectionConstruction() {
    return (
        <div className="section__construction">
            <div className="section__construction-about">
                <p class="section__construction-title">
                    СОБЕРИ СВОЙ ФРЕШ САМ
                </p>
                <div className="section__construction-description">
                    <p> Выбирай любимые фрукты и получай  </p>
                    <p>уникальный вкус, созданный именно </p>
                    <p>для тебя. А мы позаботимся о том, </p>
                    <p>чтобы каждый ингредиент был </p>
                    <p>свежим, спелым и идеально  </p>
                    <p>сбалансированным.</p>
                </div>
                <Button name='Собрать мой фреш' className="section__construction-button"/>
            </div>
            <div class="section__construction-slogan">
                <p className="section__construction-element">МЫ</p>
                <p className="section__construction-element">твой</p>
                <p className="section__construction-element">контакт</p>
                <p className="section__construction-element">с природой</p>
            </div>
        </div>
    )
}

export default SectionConstruction;
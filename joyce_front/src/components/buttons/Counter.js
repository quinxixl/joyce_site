import React, {useState} from "react";

function Counter() {
    const [value, setValue] = useState(0);

    const minus = document.getElementById("counterMinus");

    const increment = () => {
        if (value < 10) {
            setValue(value + 1);
        }
    }
    const decrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
        if (value === 0){
            minus.style.opacity = "0.5";
        }
    }
    return (
        <div class="card__button">
            <button className="card__button-minus" id="counterMinus" onClick={decrement}>
                -
            </button>
            <span className="card__button-metre" id='counter'>
                {value}
            </span>
            <button className="card__button-plus" id='counterPlus' onClick={increment}>
                +
            </button>
        </div>
    )
}

export default Counter;
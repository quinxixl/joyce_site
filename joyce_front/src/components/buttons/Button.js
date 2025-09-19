import React from "react";


function Button(props) {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.name}
        </button>
    )
}

export default Button;
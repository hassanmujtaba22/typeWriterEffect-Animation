import React from "react";
import "./button.css";

function Button({ text, href, newTab }) {
    return (
        <div className="mainbtn">
            <a className="main-button" href={href}>
                {text}
            </a>
        </div>
    );
}

export default Button
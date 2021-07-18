import React from "react";

import "./core-value.css";

export default function CoreValue({number, title, text, image}) {

    return <div className="core-value">
        <div className="core-value-title">
            <div className="core-value-title-number">{number}</div>
            <div className="core-value-title-text">{title}</div>
        </div>
        <div className="core-value-text" align="left">
            {text} 
        </div>
        <div>
            <img className="core-value-img" src={image} alt="transparency" />
        </div>
    </div>

}
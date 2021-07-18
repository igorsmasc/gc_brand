import React from "react";

import "./core-value.css";

import transparency from "../../assets/core-value/transparency.png";

export default function CoreValue({number, title, text}) {

    return <div className="core-value">
        <div className="core-value-title">
            <div className="core-value-title-number">{number}</div>
            <div className="core-value-title-text">{title}</div>
        </div>
        <div className="core-value-text" align="left">
            {text} 
        </div>
        <div>
            <img className="core-value-img" src={transparency} alt="transparency" />
        </div>
    </div>

}
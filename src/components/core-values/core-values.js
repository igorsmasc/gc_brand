import React from "react";
import CoreValue from "../core-value/core-value";

import transparency from "../../assets/core-value/transparency.png";

import "./core-values.css";

export default function CoreValues() {

    return <div>
        <div className="core-values-title">Core values</div>
        <div className="core-values-list">
            <CoreValue number={"01"} title={"Transparency"} image={transparency} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"} />
            <CoreValue number={"02"} title={"Adaptative"} image={transparency} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
            <CoreValue number={"03"} title={"Data Driven"} image={transparency} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
        </div>
        <div className="core-values-list">
            <CoreValue number={"04"} title={"Global"} image={transparency} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"} />
            <CoreValue number={"05"} title={"Fairness"} image={transparency} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
       </div>
    </div>

}
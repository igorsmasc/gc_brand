import React from "react";
import CoreValue from "../core-value/core-value";

import transparency from "../../assets/core-value/transparency.png";
import adaptative from "../../assets/core-value/adaptative.png";
import data_driven from "../../assets/core-value/data_driven.png";
import global from "../../assets/core-value/global.png";
import fairness from "../../assets/core-value/fairness.png";

import "./core-values.css";

export default function CoreValues() {

    return <div>
        <div className="core-values-title">Core values</div>
        <div className="core-values-list">
            <CoreValue number={"01"} title={"Transparency"} image={transparency} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"} />
            <CoreValue number={"02"} title={"Adaptative"} image={adaptative} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
            <CoreValue number={"03"} title={"Data Driven"} image={data_driven} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
        </div>
        <div className="core-values-list">
            <CoreValue number={"04"} title={"Global"} image={global} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"} />
            <CoreValue number={"05"} title={"Fairness"} image={fairness} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
       </div>
    </div>

}
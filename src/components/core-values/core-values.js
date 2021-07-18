import React from "react";
import CoreValue from "../core-value/core-value";

import "./core-values.css";

export default function CoreValues() {

    return <div>
        <div className="core-values-title">Core values</div>
        <div className="core-values-list">
            <CoreValue number={"01"} title={"Transparency"} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"} />
            <CoreValue number={"02"} title={"Adaptative"} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
            <CoreValue number={"03"} title={"Data Driven"} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
        </div>
        <div className="core-values-list">
            <CoreValue number={"04"} title={"Global"} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"} />
            <CoreValue number={"05"} title={"Fairness"} text={"Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"}/>
       </div>
    </div>

}
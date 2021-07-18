import React from "react";

import "./colors.css";

export default function Colors() {

    return <div className="colors">
        <div className="colors-list">
            <div className="c1 color-content">#dce1de</div>
            <div className="c2 color-content">#00a6fb</div>
            <div className="c3 color-content">#006494</div>
            <div className="c4 color-content">#003554</div>
            <div className="c5 color-content">#1f2421</div>
        </div>
        <div className="colors-text">
            <div>
                <div align="left" className="colors-title">Colors</div>
                <div align="justify" className="colors-text">
                    Due to the combination of calming and mentally
                    stimulating e ects, color blue can even increase
                    productivity. Being associated with trust and 
                    dependability. We brought blue as the main color, with
                    a triad of colors with light, medium and more closed
                    tones, complementing with an option of light and dark
                    gray as secondary colors.
                </div>
            </div>
        </div>
    </div>

}
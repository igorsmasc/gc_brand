import React from "react";

import "./typography.css";

export default function Typography() {

    return <div className="typography">
        <div className="typography-content">
            <div>
                <div align="left" className="typography-title">Typography</div>
                <div align="justify" className="typography-text">
                    Typography is the shape or styling of the text you 
                    use in your branding. There are many diferent types of 
                    fonts and each one can have a diferent effect on the 
                    viewer, includind diferent degrees of legibility. We 
                    opted for Gilroy font, that spoke well with the logo 
                    concept, and that conveyed simplicity and lightness
                    at the same time, with smooth curves and some more 
                    rectangular edges, making reading easier in diferent
                    text layouts.
                    </div>
            </div>
        </div>
        <div className="typography-example">
            <div>
                <div className="typography-glazzbox">Glazz<div className="tgb-c1">box</div></div>
                <div className="typography-glazzbox">Glazz<div className="tgb-c2">box</div></div>
                <div className="typography-glazzbox">Glazz<div className="tgb-c3">box</div></div>
            </div>
        </div>
    </div> 
}
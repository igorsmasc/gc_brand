import React from "react";

import image_1 from "../../assets/brand-image/image-1.png";
import image_2 from "../../assets/brand-image/image-2.png";

import "./brand-image.css";

export default function BrandImage() {
    return <div className="brand-image">
       <div className="brand-image-background">
            <div className="brand-image-text">
                <div>
                    <div align="left" className="brand-image-text-title">Imagery</div>
                    <div align="left" className="brand-image-text-content">The living "image" of the brand</div>
                </div>
            </div>
            <div className="brand-image-content">
                <img className="brand-image-content-image" src={image_1} alt="glazzbox-logo" />
            </div>
            <div className="brand-image-content">
                <img className="brand-image-content-image" src={image_2} alt="glazzbox-logo" />
            </div>
       </div>
    </div>
}
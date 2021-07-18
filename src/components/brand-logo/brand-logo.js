import React from "react";

import logo from "../../assets/logo.svg";

import "./brand-logo.css";

export default function BrandLogo() {
    return <div className="brand-logo">
        <div className="brand-logo-text">
            <div>
                <div className="brand-logo-text-content-title-minor" align="left">Visual Identity</div>
                <div className="brand-logo-text-content-title" align="left">Logo</div>
                <div className="brand-logo-text-content" align="justify">
                    Logo and branding design is at the heart of 
                    establishing visual identity. A logo is the foremost 
                    symbol for a brand, and it informs many of the 
                    graphics, color and typography choices of the visual 
                    identity going forward. Bringind the idea of 
                    connection, both at the market and platform levels,
                    we interconnect the main points in a short value chain,
                    aligned and without limitations, represented by 
                    spaces that do not close in the box.
                    </div>
            </div>
        </div>
        <div className="brand-logo-image">
            <img className="brand-logo-img-essence" src={logo} alt="glazzbox-logo" />
        </div>
    </div> 
}
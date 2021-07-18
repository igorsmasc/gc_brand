import React from "react";
import ParticlesGC from "../particles/particles";

import logo from "../../assets/logo.svg";

import "./brand.css";

export default function Brand() {

    return <div className="brand">
        <div className="box-icon">
            <img className="logo-img" src={logo} alt="glazzbox_logo" />
            <h1 className="brand-title"><div className="glazz">Glazz</div>Box</h1>
            <div className="description">
            Investors and investment processes from all around the world connect on GlazzBox
            </div>
        </div>
        <ParticlesGC />
        
    </div> 

}
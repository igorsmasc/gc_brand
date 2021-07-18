import React from "react";

import logo from "../../assets/logo.svg";

import "./essence.css";

export default function Essence() {

    return <div className="essence">
        <div className="text-part">
            <div>
                <div className="title">Our essence <div className="title-2">is&nbsp;<div className="text-blue">transparency</div></div></div>
                <div className="title-text" align="left">It's all here. That's all you need to know about out brand. We're here to change the asset management industry.</div>
                <div className="button">Join Us</div>
            </div>
        </div>
        <div className="img-part">
            <img className="logo-img-essence" src={logo} alt="glazzbox-logo" />
        </div>

    </div> 

}
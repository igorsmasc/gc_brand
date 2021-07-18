import React from "react";

import logo from "../../assets/logo.svg";

import "./essence.css";

export default function Essence() {

    return <div className="essence">
        <div className="text_part">
            <div>
                <div className="title">Our essence <div className="title_2">is&nbsp;<div className="text_blue">transparency</div></div></div>
                <p align="justify">It's all here. That's all you need to know about out brand. We're here to change the asset management industry.</p>
                <div className="button">Join Us</div>
            </div>
        </div>
        <div className="img_part">
            <img className="logo-img-essence" src={logo} alt="glazzbox_logo" />
        </div>

    </div> 

}
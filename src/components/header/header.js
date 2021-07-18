import React from "react";

import "./header.css";

export default function Header() {
    return <div className="header">
        <div className="header-empty"></div>
        <div className="header-options">
            <div className="header-link">Who we are</div>
            <div className="header-link">Archetype</div>
            <div className="header-link">Visual Identity</div>
            <div className="header-link">Imagery</div>
            </div>
        <div className="header-buttons">
            <div  className="header-link">Sign in</div>
            <div></div>
            <div className="header-button">Start now</div>
        </div>
    </div>
}
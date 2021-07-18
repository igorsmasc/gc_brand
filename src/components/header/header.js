import React from "react";

import "./header.css";

export default function Header() {
    return <div className="header">
        <div className="header-empty"></div>
        <div className="header-options">
            <div>Who we are</div>
                    <div>Archetype</div>
                    <div>Visual Identity</div>
                    <div>Imagery</div>
            </div>
        <div className="header-buttons">
            <div>Sign in</div>
            <div></div>
            <div className="header-button">Start now</div>
        </div>
    </div>
}
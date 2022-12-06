import React from "react";
import navLogo from "../images/logo192.png";

export default function Navbar() {
    return (
        <nav className="Nav">
            <img className="Nav-logo" alt="" src={navLogo}></img>
            <h1 className="Nav-title">Kimono Tracker</h1>
        </nav>
    )
}

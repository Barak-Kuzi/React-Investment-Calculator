import React from "react";
import logo from "../assets/investment-calculator-logo.png"

export default function Header(): React.JSX.Element {
    return (
        <header id="header">
            <img src={logo} alt="investment-calculator-logo"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}
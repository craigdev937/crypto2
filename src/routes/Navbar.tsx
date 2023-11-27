import React from "react";
import "./Navbar.css";
import Crypto from "@public/crypto2.png";
import { Outlet } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <ul className="navbar__ul">
                    <FaCoins />
                    {" "}
                    <span>
                        <img className="navbar__icon" 
                            src={Crypto} alt="Crypto" 
                        />
                    </span>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};



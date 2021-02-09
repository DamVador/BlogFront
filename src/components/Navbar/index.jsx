import React, { useState, useEffect } from 'react';
import './index.css';
import profileIcon from "../../assets/profileIcon.svg"
import homeIcon from "../../assets/home.svg"

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="leftSide">
                <div className="homeButton">
                     <img className="homeButtonImg" src={homeIcon} alt="icon" />
                </div>
                <div className="profileButton">
                     <img className="profileButtonImg" src={profileIcon} alt="icon" />
                </div>
            </div>

            <div className="title">
                <h2>DamVador</h2>
            </div>

            <div className="rightSide">

            </div>
        </div>
    );
}

export default Navbar;
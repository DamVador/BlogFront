import React, { useState, useEffect } from 'react';
import './index.css';
import profileIcon from "../../assets/profileIcon.svg"
import homeIcon from "../../assets/home.svg"

const Navbar = () => {

    const handleMouseHoverHome = (bool) => {
        const homeButton =  document.querySelector(`.homeButtonImg`);

        if(bool === true ){
           homeButton.style.border = "4px solid black";
        } else {
            homeButton.style.border = "2px solid black";
        }
      };

    return (
        <div className="navbar">
            <div className="leftSide">
                <div className="homeButton" >
                     <img className="homeButtonImg" src={homeIcon} alt="icon" onClick={() => alert('clicked')}/>
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
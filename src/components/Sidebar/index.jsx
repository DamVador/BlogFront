import React, { useState, useEffect } from 'react';
import './index.css';

const Sidebar = ({value}) => {

    useEffect(() => {
        showSidebar(value);
    }, []);
    const showSidebar = (value) => {
        const sidebar = document.querySelector(".sideBar");
        if(value === true){
            sidebar.style.display = "flex";
        } else {
            sidebar.style.display = "none";
        }
    }
   

    return (
        <div className="sideBar" style={{display: "none"}}>
            <div className="image">
            </div>
            <div className="sentence">
                <p>Bonjour, ceci est une phrase d'essai. J'en mettrais une autre plus tard évidement. En attendant amuse-toi bien sur ce blog</p>
            </div>
            <div className="information">email: blablabla@mail.com</div>

        </div>
    );
}

export default Sidebar;
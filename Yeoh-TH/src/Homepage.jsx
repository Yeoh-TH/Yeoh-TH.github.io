import React from "react";
import developerLogo from "/THDeveloperLogomark2.png";
import "./index.css";

function Homepage(){
    return(
        <>
        <div id="navbar">
            <a className="navbar-button-active" href="#/">Homepage</a>
            <a className="navbar-button" href="#/projects">Projects</a>
            <a className="navbar-button" href="#/awards">Awards</a>
            <a className="navbar-button" href="#/lilstories">Little Stories!</a>
        </div>
        <h1>
        <span className="hoverEffect">W</span>
        <span className="hoverEffect">e</span>
        <span className="hoverEffect">l</span>
        <span className="hoverEffect">c</span>
        <span className="hoverEffect">o</span>
        <span className="hoverEffect">m</span>
        <span className="hoverEffect">e</span>
        <span className="hoverEffect">!</span>
        </h1>
        <div className="paragraph">
        <img src={developerLogo} className="logo"></img>
        <p className="paragraphText">I am Tian Huai, or otherwise known as Yeoh-TH, and I hope that you will enjoy navigating this pretty simple website to learn more about me. Cheers!</p>
        </div>
        </>
    )
}

export default Homepage
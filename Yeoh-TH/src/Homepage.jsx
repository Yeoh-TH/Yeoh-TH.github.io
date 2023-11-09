import React from "react";
import Illustratum1 from "/Illustratum1.jpeg"
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
        <h1>Yeoh-TH</h1>
        <img src={Illustratum1} width={"1000vw"}></img>
        </>
    )
}

export default Homepage
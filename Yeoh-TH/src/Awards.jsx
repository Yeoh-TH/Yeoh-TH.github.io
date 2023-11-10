import React from "react";
import Illustratum1 from "/Illustratum1.jpeg";
import "./index.css";

function Awards(){
    return(
        <>
        <div id="navbar">
            <a className="navbar-button" href="#/">Homepage</a>
            <a className="navbar-button" href="#/projects">Projects</a>
            <a className="navbar-button-active" href="#/awards">Awards</a>
            <a className="navbar-button" href="#/lilstories">Little Stories!</a>
        </div>
        <h1>2023</h1>
        <img src={Illustratum1} width={"750"} style={{textAlign:"center"}}></img>
        </>
    )
}

export default Awards
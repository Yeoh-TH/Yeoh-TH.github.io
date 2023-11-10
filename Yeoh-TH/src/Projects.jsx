import React from "react";
import Illustratum1 from "/Illustratum1.jpeg";
import "./index.css";

function Projects(){
    return(
        <>
        <div id="navbar">
            <a className="navbar-button" href="#/">Homepage</a>
            <a className="navbar-button-active" href="#/projects">Projects</a>
            <a className="navbar-button" href="#/awards">Awards</a>
            <a className="navbar-button" href="#/lilstories">Little Stories!</a>
        </div>
        </>
    )
}

export default Projects
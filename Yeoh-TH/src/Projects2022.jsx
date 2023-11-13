import React from "react";
import "./index.css";

function Projects2022() {
    return(
    <>
    <div id="navbar">
            <a className="navbar-button" href="#/">Homepage</a>
            <a className="navbar-button-active" href="#/projects">Projects</a>
            <a className="navbar-button" href="#/awards">Awards</a>
            <a className="navbar-button" href="#/lilstories">Little Stories!</a>
        </div>
        <div id="timeline">
            <a className="yearDisplay" href="#/projects/2021">2021</a>
            <a className="yearDisplay-active" href="#/projects/2022">2022</a>
            <a className="yearDisplay" href="#/projects/2023">2023</a>
        </div>
        <h1>2022</h1>
        <div className="showcaseDisplay">
            
        </div>
    </>
    )
}

export default Projects2022
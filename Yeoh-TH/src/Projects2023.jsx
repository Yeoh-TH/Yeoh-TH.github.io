import React from "react";
import ScienceCentre1 from "/ScienceCentre1.png";
import ScienceCentre2 from "/ScienceCentre2.jpeg";
import ScienceCentre3 from "/ScienceCentre3.jpeg";
import "./index.css";

function Projects2023(){
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
            <a className="yearDisplay" href="#/projects/2022">2022</a>
            <a className="yearDisplay-active" href="#/projects/2023">2023</a>
        </div>
        <h2>More about this page</h2>
        <div className="showcaseDisplay">
            <div className="pictureGroup">
            <img src={ScienceCentre1} className="pictureDisplay"></img>
            <div className="pictureGroupDobbleganger">
            <img src={ScienceCentre2} className="secondPic"></img>
            <img src={ScienceCentre3} className="secondPic"></img>
            </div>
            </div>
            <p>Illustratum was a fun competition, but the real fun part was being able to teach our knowledge to others, as shown through our very own exhibition in science centre!</p>


        </div>

        </>
    )
}

export default Projects2023
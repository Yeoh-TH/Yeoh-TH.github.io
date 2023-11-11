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
        <div id="timeline">
            <a className="yearDisplay" href="#/awards/2020">2020</a>
            <a className="yearDisplay" href="#/awards/2021">2021</a>
            <a className="yearDisplay" href="#/awards/2022">2022</a>
            <a className="yearDisplay" href="#/awards/2023">2023</a>
        </div>

        <h1 style={{fontSize:"7vw"}}>Most Recent Happenings!</h1>
        <div className="showcaseDisplay">
        <img src={Illustratum1} className="pictureDisplay" style={{textAlign:"center"}}></img>
        <p className="pictureCaption"> Team reverberation winning an award at illustratum, featuring one of my webapps!</p>
        </div>
        <div className="showcaseDisplay">
        <p className="pictureCaption"> </p>
        <img src={Illustratum1} className="pictureDisplay" style={{textAlign:"center"}}></img>
        </div>
        </>
        
    )
}

export default Awards
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
        <div id="timeline">
            <a className="yearDisplay" href="#/projects/2021">2021</a>
            <a className="yearDisplay" href="#/projects/2022">2022</a>
            <a className="yearDisplay" href="#/projects/2023">2023</a>
        </div>
        <h2>More about this page</h2>
        <p className="paragraphText">
            These are my current, and past projects which may not have gotten as good of a result or award as expected or none at all, but I think are still worthwhile to include here.
            <br/>
            Enjoy the selections :D
        </p>

        </>
    )
}

export default Projects
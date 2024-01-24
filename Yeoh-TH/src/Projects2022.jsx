import React from "react";
import spacePlaneGame from "/spacePlaneGame.png";
import waterSaver from "/waterSaver.png";
import "./index.css";

function Projects2022() {
    return(
    <>
    <div id="navbar">
            <a className="navbar-button" href="#/">Homepage</a>
            <a className="navbar-button-active" href="#/projects">Projects</a>
            <a className="navbar-button" href="#/awards">Awards</a>
        </div>
        <div id="timeline">
            <a className="yearDisplay" href="#/projects/2021">2021</a>
            <a className="yearDisplay-active" href="#/projects/2022">2022</a>
            <a className="yearDisplay" href="#/projects/2023">2023</a>
        </div>
        <h1>2022</h1>
        <div className="showcaseDisplay">
            <img className="pictureDisplay" src={waterSaver}></img>
            <div className="padding1vw">
            <h3>Water saver game!</h3>
            <p>
                A quick prototype of a game about saving water, have a look!
                <br/>
                <a href="https://martymcfli.itch.io/water-game-for-geography-pt-prototype" target="_blank"><i class="fas fa-gamepad"></i></a>
            </p>
            </div>
        </div>

        <div className="showcaseDisplay">
            <div className="padding1vw">
                <h3>Space controls!</h3>
                <p>One of my first introductions into game development and 3D design, it was fun playing around with a spaceship and learning the fundamentals!
                <br/>
                <a href="https://martymcfli.itch.io/space-and-asteroids" target="_blank"><i class="fas fa-gamepad"></i></a>
                </p>
            </div>
            <img className="pictureDisplay" src={spacePlaneGame}></img>
        </div>
    </>
    )
}

export default Projects2022
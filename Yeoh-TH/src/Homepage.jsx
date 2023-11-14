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
        <div className="paragraph">
            <h3 className="paragraphText">My personal email:
            <br/>
            <a href="mailto:yeohth231@gmail.com"><i class="fas fa-envelope" style={{fontSize:"6vw"}}></i></a>
            <span style={{marginLeft:"1vw"}}>yeohth231@gmail.com</span>
            </h3>
            <h3 className="paragraphText" style={{marginLeft:"1vw"}}> My Youtube Channel:
                <br/>
                <a href="https://www.youtube.com/channel/UCiu6IweqcO0erslTDBVzwkg" target="_blank"><i class="fab fa-youtube"style={{fontSize:"8vw",color:"#e15634"}}></i></a>
            </h3>
            <h3 className="paragraphText" style={{marginLeft:"1vw"}}>My instagram:
            <br/>
            <a href="https://www.instagram.com/yeoh_th/" target="_blank"><i class="fab fa-instagram" style={{fontSize:"7vw",color:"#593f62"}}></i></a>
            </h3>
        </div>
        </>
    )
}

export default Homepage
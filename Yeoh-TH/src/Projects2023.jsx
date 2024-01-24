import React from "react";
import ScienceCentre1 from "/ScienceCentre1.png";
import ScienceCentre2 from "/ScienceCentre2.jpeg";
import ScienceCentre3 from "/ScienceCentre3.jpeg";
import Tsunagu1 from "/Tsunagu1.jpeg";
import Tsunagu2 from "/Tsunagu2.jpeg";
import Tsunagu3 from "/Tsunagu3.jpeg";
import ISS from "/ISS.jpg";
import ISS2 from "/ISS2.jpg";
import "./index.css";

function Projects2023(){

    return(
        <>
        <div id="navbar">
            <a className="navbar-button" href="#/">Homepage</a>
            <a className="navbar-button-active" href="#/projects">Projects</a>
            <a className="navbar-button" href="#/awards">Awards</a>
        </div>
        <div id="timeline">
            <a className="yearDisplay" href="#/projects/2021">2021</a>
            <a className="yearDisplay" href="#/projects/2022">2022</a>
            <a className="yearDisplay-active" href="#/projects/2023">2023</a>
        </div>
        <h1>2023</h1>
        <div className="showcaseDisplay">
            <div className="pictureGroup">
                    <img src={ScienceCentre1} id="currentPic1" className="pictureDisplay"></img>
                <div className="pictureGroupDobbleganger" style={{textAlign:"center"}}>
                    <img src={ScienceCentre2} className="secondPic"></img>
                    <img src={ScienceCentre3} className="secondPic"></img>
                </div>
            </div>
            
            <div className="padding1vw">
            <h3>Illustratum at science centre!</h3>
            <p>
            Illustratum was a fun competition, but the real fun part was being able to teach our knowledge to others, 
            as shown through our very own exhibition in science centre!
            </p>
            </div>
        </div>

        <div className="showcaseDisplay">
            <div className="padding1vw">
            <h3>Tsunagu Research Project!</h3>
            <p>
                We experimented and did research on natural pH indicators like red cabbage and bluepea flower pH indicators to see if they were suitable for use in the food and beverage industry!
            </p>
            </div>
            <div className="pictureGroup">
                    <img src={Tsunagu1} id="currentPic1" className="pictureDisplay"></img>
                <div className="pictureGroupDobbleganger" style={{textAlign:"center"}}>
                    <img src={Tsunagu2} className="secondPic"></img>
                    <img src={Tsunagu3} className="secondPic"></img>
                </div>
            </div>
        </div>

        <div className="showcaseDisplay">
            <div className="pictureGroup">
                <video className="pictureDisplay" controls>
                    <source src="/ISS_Video.mov"/>
                </video>
                <div className="pictureGroupDobbleganger" style={{textAlign:"center"}}>
                    <img src={ISS} className="secondPic" ></img>
                    <img src={ISS2} className="secondPic"></img>
                </div>
        </div>
            <div className="padding1vw">
                <h3>Investigative Skills in Science!</h3>
                <p>
                    An applied learning research project that my team and I carried out at the start of the year, we gained a lot of experience and fun through this project.
                </p>
            </div>
        </div>

        <div className="showcaseDisplay">
            <div className="padding1vw">
                <h3>Remote Sensing with GEE!</h3>
                <p>
                    Using the Google Earth Engine, I was able to help map out data from the Sentinel 5p satellite with Offline data of Nitrogen Dioxide and Carbon Monoxide, which allowed pinpointing of wildfires!
                </p>
            </div>
            <div className="pictureGroup">
                <embed src="https://wildfire-406604.projects.earthengine.app/view/fireden" id="fireDen"></embed>
            </div>
        </div>

        </>
    )
}

export default Projects2023
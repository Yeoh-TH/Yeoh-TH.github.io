import React from "react";
import developerLogo from "/THDeveloperLogomark2.png";
import "./index.css";

function Homepage() {
    return (
        <>
            <div id="navbar">
                <a className="navbar-button-active" href="#/">Homepage</a>
                <a className="navbar-button" href="#/projects">Projects</a>
                <a className="navbar-button" href="#/awards">Awards</a>
            </div>
            <h1>
                <span className="hoverEffect">T</span>
                <span className="hoverEffect">i</span>
                <span className="hoverEffect">a</span>
                <span className="hoverEffect">n</span>
                <span className="hoverEffect"> </span>
                <span className="hoverEffect">H</span>
                <span className="hoverEffect">u</span>
                <span className="hoverEffect">a</span>
                <span className="hoverEffect">i</span>
            </h1>
            <div className="intro">
                <h2 id="introPara">The Introduction</h2>
                <p className="introText">Turmoil has engulfed the world. In this Volatile, Uncertain, Complex and Ambiguous world, one has to learn many skills to help oneself get above the rest and achieve success.
                    <br />Thus, the campaigner, YEOH TIAN HUAI, has decided to embark on this perilous journey, gaining multiple friends, valuable experiences, and most importantly memories.
                    Herein lies all his stories from his multiple endeavours. Enjoy!
                </p>
            </div>
            {/* <div className="paragraph">
                <h3 className="paragraphText" style={{ marginLeft: "1vw" }}>My instagram:
                    <br />
                    <a href="https://www.instagram.com/yeoh_th/" target="_blank"><i class="fab fa-instagram" style={{ fontSize: "7vw", color: "#593f62" }}></i></a>
                </h3>
            </div> */}
        </>
    )
}

export default Homepage
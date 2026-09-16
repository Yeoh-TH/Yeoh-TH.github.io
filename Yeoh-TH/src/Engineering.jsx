import "./index.css";
import '@govtechsg/sgds/css/sgds.css';
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row, Card } from '@govtechsg/sgds-react';
import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function Engineering() {

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Navbar className="mt" expand="lg">
                <Navbar.Brand href="#">
                    <img src="/THDeveloperLogomark2.png" className="navIcon"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav navbarScroll defaultActiveKey="projects">
                        <Nav.Item>
                            <Nav.Link className="navTopLink" href="#/" eventKey="home" onClick={() => clickNavbarItem('home')}>
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#/publicity" eventKey="publicity" onClick={() => clickNavbarItem('publicity')}>
                                Publicity
                            </Nav.Link>
                        </Nav.Item>

                        <NavDropdown
                            isMegaMenu
                            title="Projects"
                            href="https://google.com"
                            eventKey="projects"
                            onClick={() => clickNavbarItem('projects')}
                        >
                            <Container fluid>
                                <Row className="p-4">
                                    <Col>
                                        <p>
                                            <strong>
                                                Choose a catergory to view
                                            </strong>
                                        </p>
                                        <p>
                                            Learn more about what I have done from my various side projects!
                                        </p>
                                    </Col>

                                    <Col>
                                        <NavDropdown.Item
                                            href="#/engineering"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Engineering Projects
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#/applied-research"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Science Projects
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#/social-work"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Service Projects
                                        </NavDropdown.Item>

                                        <NavDropdown.Item
                                            href="https://martymcfli.itch.io/"
                                            target="_blank"
                                            onClick={() => clickNavbarItem('coding')}
                                        >
                                            My Indie Games, Itch.io website
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="https://github.com/Yeoh-TH"
                                            target="_blank"
                                            onClick={() => clickNavbarItem('coding')}>
                                            My Github Page
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            href='#'
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Others
                                        </NavDropdown.Item>
                                    </Col>
                                </Row>
                            </Container>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link href="#/about" eventKey="about" onClick={() => clickNavbarItem('about')}>
                                About Me
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <section className="m-8">
                <Row>
                    <Col xs lg="13">
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    Cylindrical Mirror as a Solar Concentrator
                                </Card.Title>
                            </Card.Header>
                            
                            <Card.Body style={{ textAlign: 'justify' }}>
                                <Card.Img style={{ maxWidth: "17vw" }} src="/SSEFProto.png" />
                                <Card.Img style={{ maxWidth: "24vw" }} src="/SSEF-boothPhoto.JPG"></Card.Img>
                                <p>
                                    I have embarked on a project which will investigate and engineer an optimum toroidal mirror solar concentrator for solar panels, which was part of my interest in learning about power systems for CubeSates.
                                </p>
                                <p>
                                    Overtime, I was able to practice many partical skills, like soldering, 3D printing, programming of microcontrollers like the SSTuino and also mathematical modelling in practical applications of ray tracing, allowing me to fully develop my project to a remarkable stage, where I was able to present it at the Singapore Science and Engineering Fair 2025, where I was able to impress the judges and industry panelists with my presentation to win a Silver Award.
                                    <br/>
                                    Now, with validation of my ideas, I am now committed to transform my project from a concept into a real product, causing me to found the startup Cylindrical Solar Concentrators (CSC) to make solar energy more accessible for all.
                                </p>
                                <embed src="SSEF2026_Silver-26.pdf#page=2&toolbar=0&view=FitH" width="100%" height="600px"></embed>
                                <p>                                    Do feel free to look at my project report, and contact me if you have queries!</p>
                                <iframe src="SSEF_FINAL.pdf#page=2&toolbar=0&view=FitH" width="100%" height="600px"></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="13">
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    Illustratum 2023
                                </Card.Title>
                                <Card.Img variant="top" src="Illustratum1.jpeg" />
                            </Card.Header>
                            <Card.Body style={{ textAlign: 'justify' }}>
                                <p>
                                    I also used my coding for use in teaching science as well, for instance I was able to create this page to demonstrate binaural beating as a physical phenonmenon, which is a form of sound wave interference that can be used to create a sense of depth in sound.
                                </p>
                                <p>
                                    This allowed me to deepen my skills in programming, and also learn more about physics in the process.
                                </p>
                            </Card.Body>
                            <Card.Link href="https://yeoh-th.github.io/reverberation-soundDemo/">Click here to access the page</Card.Link>
                            <Card.Img variant="bottom" src="ScienceCentre1.png" />
                        </Card>
                    </Col>
                </Row>
            </section>
            <Footer id="bottomFooter">
                            <Footer.Top>
                                <Footer.Top.ContactLinks>
                                    <a href="mailto:soundwavedecepticonleader@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <i class="fa fas-contact" style={{ fontSize: 'relative', color: '#464d77', marginRight: '4px' }} ></i>
                                        Contact Me!
                                    </a>
                                    <a href="https://www.linkedin.com/in/tian-huai-yeoh/" target="_blank">
                                        <i class="fa fa-linkedin" style={{ fontSize: '5vw', color: 'rgb(95, 117, 246)', marginLeft: '4px' }}></i>
                                    </a>
                                </Footer.Top.ContactLinks>
                            </Footer.Top>
                        </Footer>
        </div>
    );
}

export default Engineering;
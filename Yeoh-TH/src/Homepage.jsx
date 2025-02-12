import React, { useState } from "react";
import "./index.css";
import '@govtechsg/sgds/css/sgds.css';
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row, Card, NavLink } from '@govtechsg/sgds-react';

function Homepage() {
    const [active, setActive] = useState('about');

    const clickNavbarItem = eventKey => {
        setActive(eventKey);
    };

    return (
        <div style={{ height: "100%" }}>
            <Navbar className="mt" expand="lg">
                <Navbar.Brand href="#">
                    <img src="/THDeveloperLogomark2.png" className="navIcon"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav navbarScroll defaultActiveKey="home">
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
                                            href="#/humanities"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Humanities Projects
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#/web-and-games"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Website and Games
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

                        <NavDropdown
                            isMegaMenu
                            title="Awards"
                            href="https://google.com"
                            eventKey="awards"
                            onClick={() => clickNavbarItem('awards')}>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <p>
                                            <strong>
                                                Featuring my awards
                                            </strong>
                                        </p>
                                        <p>
                                            These include awards from the Sciences, Humanities and Languages. Please make your selection to learn more.
                                        </p>
                                    </Col>
                                    <Col>
                                        <NavDropdown.Item
                                            href="#/awards-hum"
                                            onClick={() => clickNavbarItem('secondDropdown')}
                                        >
                                            Humanities
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#/awards-ar"
                                            onClick={() => clickNavbarItem('secondDropdown')}
                                        >
                                            Applied Research
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#/awards-lang"
                                            onClick={() => clickNavbarItem('secondDropdown')}
                                        >
                                            Languages
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            href='#/awards-others'
                                            onClick={() => clickNavbarItem('secondDropdown')}>
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
                <h1>Why Me?</h1>
                <Row>
                    <Col xs lg="6">
                        <Card style={{ padding: "2vw" }}>
                            <Card.Title>Technical Skills I have developed</Card.Title>
                            <Card.Subtitle style={{ marginTop: "6px" }}>Soldering, 3D-Printing, Threading... I have learnt them all! </Card.Subtitle>
                            <Card.Header variant="top">
                                <video src="./SolderingVid.mp4#t=180,240" style={{ width: "100%", minHeight: "400px" }} controls muted ></video>
                                Video of me soldering
                            </Card.Header>
                            <Card.Body style={{ textAlign: "justified" }}>
                                I believe that to first understand the world, one must first understand the tools that shape it. I have learnt to use a wide range of physical and digital tools like 3D Modelling, Soldering and even Mechanical skills like Threading to bring countless projects to life.<br /> Read on to find out how I apply these skills!
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="6">
                        <Card style={{ padding: "2vw" }}>
                            <Card.Title>The German Connection</Card.Title>
                            <Card.Subtitle>Germany is world-renowned for its engineering</Card.Subtitle>
                            <Card.Header variant="top">
                                <img src="./GermanyR&D.png" style={{ width: "100%", minHeight: "200px" }}></img>
                                Total Expenditure on Research by Germany Figure from ResearchGate
                            </Card.Header>
                            <Card.Body>
                                Guten Tag! I have been self-learning German since last year, and I am currently at the high A1 level, which means I can discuss my daily routine, order food at a restaurant, and chat a little in German according to the international CEFR Levels. This is because I anticipate that Germany will play a key role in the Engineering Industry, and thus I am learning German to better understand the culture and language of the country so I can hopefully have an overseas internship or exchange programme to learn more about Germany's strategy in engineering.
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2vw" }}>
                    <Col xs lg="6">
                        <Card style={{ padding: "2vw" }}>
                            <Card.Title>Experience of <acronym title="Object-Oriented Programming">OOP</acronym> Languages in the Real World</Card.Title>
                            <Card.Header variant="top">
                                <iframe src="https://ee-4453.projects.earthengine.app/view/nitrogen-dioxide-in-sg-overtime" style={{ width: "100%", minHeight: "400px" }}></iframe>
                            </Card.Header>
                            <Card.Subtitle style={{ marginTop: "6px" }}>Satellite applet made using Javascript</Card.Subtitle>
                            <Card.Text> I have garnered much experience from constantly programming in <strong>Object-Oriented Programming</strong> languages for real world projects, like <strong>C++</strong> in Arduino, <strong>Javascript</strong> and <strong>Python</strong> for all my projects, above is an example of me using Javascript to utilise the Google Earth Engine database of remote sensing data.</Card.Text>
                            <Card.Link href="#/engineering">Details about my engineering projects</Card.Link>
                        </Card>
                    </Col>
                    <Col xs lg="6">
                        <Card style={{ padding: "2vw" }}>
                            <Card.Title>Video Game Design</Card.Title>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "2vw" }}>
                    <Col xs lg="6">
                        <Card>
                            <Card.Title>Presentation Skills</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                        </Card>
                    </Col>
                    <Col xs lg="6">
                        <Card style={{ padding: "2vw" }}>
                            <Card.Title>Advocate of the Humanities</Card.Title>
                        </Card>
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs lg="4">
                        <Card>
                            <Card.Img variant="top" alt="showcasing how I integrated geography and game design to design a water saving game" src="./waterSaver.png" style={{ maxHeight: "284px" }} />
                            <Card.Body>
                                <Card.Title>Game and Website Design</Card.Title>
                                <Card.Subtitle style={{ marginBottom: "1vw" }}>饮水思源</Card.Subtitle>
                                <Card.Text>
                                    Find out more about how I use my knowledge in HTML, Javascript, CSS and C languages to build Immerisve Media products like Games and Websites which we we use in our daily life.
                                </Card.Text>
                                <Card.Link href="#/web-and-games">Find out more</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs lg="4">
                        <Card>
                            <Card.Img variant="top" src="./appliedResearchCard.png" style={{ maxHeight: "284px" }} />
                            <Card.Body>
                                <Card.Title>A Scientific Mind</Card.Title>
                                <Card.Text>
                                    I am curious about the study of science in our everchanging world, and have conducted research through my own Applied Research Projects. I am particularly fond of Physics.
                                </Card.Text>
                                <Card.Link href="#/applied-research">Find out more</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="4">
                        <Card>
                            <Card.Img variant="top" alt="Humanities pic" src="./humanityCard.jpg" />
                            <Card.Body>
                                <Card.Title>Passion for Humanities</Card.Title>
                                <Card.Text>
                                    I am passionate for humantities and concepts like diplomacy and public policy, which I develop by going to Model United Nations and volunteering myself in service projects.
                                </Card.Text>
                                <Card.Link href="#/public-service">Find out more</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
            </section>
            <Footer id="bottomFooter">
                <Footer.Top>
                    <Footer.Top.ContactLinks>
                        <a href="mailto:soundwavedecepticonleader@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i class="fa fas-contact" style={{ fontSize: 'relative', color: '#464d77', marginRight: '4px' }} ></i>
                            Contact Me!
                        </a>
                        <a href="https://boxd.it/cfpnX" target="_blank">
                            Letterboxd
                            <i class="fa fa-film" style={{ fontSize: 'relative', color: '#464d77', marginLeft: '4px' }}></i>
                        </a>
                    </Footer.Top.ContactLinks>
                </Footer.Top>
            </Footer>
        </div>
    );
}

export default Homepage;
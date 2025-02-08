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

                        <NavDropdown
                            isMegaMenu
                            title="Publicity"
                            eventKey="publicity"
                            onClick={() => clickNavbarItem('publicity')}>
                            <Container fluid>
                                <Row className="p-4">
                                    <Col>
                                        <p>
                                            <strong>
                                                Publicity
                                            </strong>
                                            <p>These are stories of me and my projects being featured in various videos and stories publicly.</p>
                                        </p>
                                    </Col>
                                </Row>
                            </Container>

                        </NavDropdown>

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
                                            Social Projects
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
                                                Featuring the events I have actively engaged in
                                            </strong>
                                        </p>
                                        <p>
                                            These include the likes of forums, talks, or even participating in interesting activties!
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
                </Row>
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
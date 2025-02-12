import React from "react";
import Illustratum1 from "/Illustratum1.jpeg";
import "./index.css";
import '@govtechsg/sgds/css/sgds.css';
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row, Card, NavLink } from '@govtechsg/sgds-react';

function AwardsHum() {
    const clickNavbarItem = eventKey => {
        setActive(eventKey);
    };
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Navbar className="mt" expand="lg">
                <Navbar.Brand href="#">
                    <img src="/THDeveloperLogomark2.png" className="navIcon"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav navbarScroll defaultActiveKey="awards">
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
            <section className="m-8"></section>
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
    )
}

export default AwardsHum
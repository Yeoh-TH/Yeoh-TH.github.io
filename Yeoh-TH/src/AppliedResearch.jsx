
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row, Card } from '@govtechsg/sgds-react';
import '@govtechsg/sgds/css/sgds.css';
import "./index.css";

function AppliedResearch() {
    const clickNavbarItem = eventKey => {
        setActive(eventKey);
    };
    return (
        <div style={{ width: "100%" }}>
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
                                    Investigation of the use of the Butterfly Blue Pea Flower (Clitoria ternatea) and Red Cabbage as a natural pH indicator in foods
                                </Card.Title>
                                <Card.Img variant="top" src="/Tsunagu1.jpeg" />
                            </Card.Header>
                            <Card.Body style={{ textAlign: 'justify' }}>
                                With my group members, Nathan and Rishav, we were able to perform analysis of the pH of our school's pond water after following a procedure to
                                mix Butterfly Pea Flower and Red Cabbage in various quantities to test its effectiveness as a natural pH indicator compared to artificially made ones in the market.
                                <br style={{ fontSize: '1em' }} />
                                Suffice to say, our results proved that the Butterfly Pea Flower was a better indicator than the Red Cabbage, and was actually comparable with artificial pH indicators in the market.
                            </Card.Body>
                            <Card.Img variant="bottom" src="/Tsunagu2.jpeg" />

                        </Card>
                    </Col>
                    <Col xs lg="13">
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    Investigative Skills in Science
                                </Card.Title>
                                <Card.Img variant="top" src="/ISS2.jpg" />
                            </Card.Header>
                            <Card.Body>
                                <p>One of the big ticket research projects I undergone was one relating to the topic of the investigation on acetamiophen in fever and flu tablets.</p>
                                <video src="ISS_Video.mov" style={{ maxWidth: "45vw", borderRadius: "5%", borderWidth: "10px", borderColor: "black" }} controls />
                                <p>During this research project with my fellow teammates Justin and Nathan, I was able to apply my chemistry knowledge to use and inquire into the true amount of acetaminophen, or paracetamoul, in the fever and flue tablets we consume commonly.</p>
                                <p>Thus, we were able to present our project on many different stages as well, for instance in the global competition Opportunity-X or the NJC-ASTAR Science symposium</p>
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
    )
}

export default AppliedResearch
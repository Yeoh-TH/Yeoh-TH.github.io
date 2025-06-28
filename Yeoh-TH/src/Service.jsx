
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row, Card } from '@govtechsg/sgds-react';
import '@govtechsg/sgds/css/sgds.css';
import "./index.css";


function Service() {
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
                                    SST Food Drive 2024
                                </Card.Title>
                                <Card.Img variant="top" src="./FoodDrive2.JPG" />
                            </Card.Header>
                            <Card.Body style={{ textAlign: 'justify' }}>
                                <p>
                                    In 2024, I participated in the SST Food Drive, a community service initiative aimed at collecting food donations for those in need. The event was a great success, with students and staff coming together to contribute non-perishable food items.
                                </p >
                                <p>
                                    In particular for that year, our vision, with which I was the vice chairperson in charge for the project, was to not just give food to the beneficiaries, but also interact with them to build a deeper bond and understanding of their needs.

                                </p>
                                <p>
                                    My role involved organizing collection points around the school and promoting the event through a school assembly presentation. We managed to collect over $100 worth of food and donations, which was given to the local beneficiaries under Chong Pang Division.
                                </p>
                            </Card.Body>
                            <Card.Img variant="bottom" src="./FoodDrive3.JPG" />

                        </Card>
                    </Col>
                    <Col xs lg="13">
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    SST Interactions 2024
                                </Card.Title>
                                <Card.Img variant="top" src="Interactions2.JPG" />
                            </Card.Header>
                            <Card.Body style={{ textAlign: 'justify' }}>
                                <p>
                                    In the same year, I also participated in SST Interactions again, after I was able to lead as a participant last year. I was able to communicate with the residents using Chinese and host a morning dance session with them, before helpign to host some fun mini activities and games with them to bond further.
                                </p>
                                <p>
                                    Interactions that year was especially enriching as I was able to get a sense of how to lead my own group of ACE leaders and coordinate some of the activities. Though there were hiccups throughout the way, it was well worth it.
                                </p>
                            </Card.Body>
                            <Card.Img variant="bottom" src="Interactions2025.JPG" />
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

export default Service
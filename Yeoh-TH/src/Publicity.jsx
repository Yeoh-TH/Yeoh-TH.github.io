import React from "react";
import "./index.css";
import '@govtechsg/sgds/css/sgds.css';
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row, Card, NavLink } from '@govtechsg/sgds-react';
import spaceGroupPhoto from '/UNOOSASpaceTalk.png';

function Publicity() {
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
                    <Nav navbarScroll defaultActiveKey="publicity">
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
                                        {/* <NavDropdown.Item
                                            href="#/humanities"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Humanities Projects
                                        </NavDropdown.Item> */}

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

                        {/* <NavDropdown
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
                        </NavDropdown> */}
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
                        <Card style={{ margin: '10px' }}>
                            <Card.Body>
                                <Card.Title style={{ padding: '10px' }}>
                                    Presenter to the Minister at the STEM 2.0 Forum Opening: Featured on CNA
                                </Card.Title>
                                <Card.Text>
                                    <p>
                                        I was invited to present my space data series project using Google Earth Engine to the Second Minister of Education, Minister Maliki Bin Osman. The event was featured on Channel News Asia.
                                    </p>
                                </Card.Text>
                                <Card.Header>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/FXvvmecyalA?start=62&end=72&loop=1" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </Card.Header>
                            </Card.Body>
                        </Card>
                        <Card style={{ margin: "10px" }}>
                            <Card.Body>
                                <Card.Title style={{ padding: '10px' }}>
                                    Being featured on Space Faculty for their Satellite workshop
                                </Card.Title>
                                <Card.Text>
                                    <p>
                                        I was invited to present my views on the workshop, and I have learnt much from it, being for instance able to work with experts in Satellite development and also working with space-grade parts
                                    </p>
                                </Card.Text>
                                <Card.Header>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/CoTwshjq2bw?start=0&end=50&loop=1" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </Card.Header>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="13">
                        <Card style={{ margin: '10px' }}>
                            <Card.Body>
                                <Card.Title style={{ padding: '10px' }}>
                                    UNOOSA Space Talk
                                </Card.Title>
                                <Card.Header>
                                    <div className="insta-container">
                                        <img src={spaceGroupPhoto} alt="UNOOSA Space Talk" style={{ width: "100%" }} />
                                        <NavLink href="https://www.instagram.com/p/Cv1b2Y5P0aH/" target="_blank" />
                                    </div>
                                    <Card.Link>
                                        <a href="https://www.instagram.com/p/DGsZX1VzBxF/?img_index=4" target="_blank" rel="noopener noreferrer" >
                                            Instagram Post
                                        </a>
                                    </Card.Link>
                                </Card.Header>
                                <Card.Text>
                                    <p>
                                        I was able to lead a school delegation to the United Nations Office for Outer Space Affairs (UNOOSA) Space Talk, where I was able to connect with the director of UNOOSA, and learn more about the jobs that the United Nations takes up. This was a great opportunity to learn more on an international platform and network as well, knowing more hands-on knowledge in the space sector.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="13">
                        <Card style={{ margin: '10px' }}>
                            <Card.Body>
                                <Card.Title style={{ padding: '10px' }}>
                                    Asking Questions during the Youth Policy Forum
                                </Card.Title>
                                <Card.Text>
                                    <p>
                                        I was quite proactive in asking questions at the National Youth Policy Forum, try and spot me in this Tiktok Short!
                                    </p>
                                </Card.Text>
                                <Card.Link href="https://www.tiktok.com/@tropicmonsters/video/7410721192039959815">Click Here</Card.Link>
                            </Card.Body>
                            <Card.Img variant="bottom" alt="youth policy forum questionaire" src="./YouthPolicyForum.jpg" style={{ width: "100%" }} />
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
        </div >
    )
}

export default Publicity
import React, { useState } from "react";
import "./index.css";
import '@govtechsg/sgds/css/sgds.css';
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row } from '@govtechsg/sgds-react';

function Homepage() {
    const [active, setActive] = useState('about');

    const clickNavbarItem = eventKey => {
        setActive(eventKey);
    };

    return (
        <div style={{ height: "100%" }}>
            <Navbar>
                <Navbar.Brand href="#">
                    <img src="/THDeveloperLogomark2.png" className="navIcon"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav navbarScroll activeKey={active}>
                        <Nav.Item>
                            <Nav.Link className="navTopLink" href="#/" eventKey="home" onClick={() => clickNavbarItem('home')}>
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <NavDropdown
                            isMegaMenu
                            title="Projects"
                            id="basic-nav-dropdown"
                            href="https://google.com"
                            eventKey="firstDropdown"
                            onClick={() => clickNavbarItem('firstDropdown')}
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
                                            href="#"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Engineering Projects
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Science Projects
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="#"
                                            onClick={() => clickNavbarItem('firstDropdown')}
                                        >
                                            Web and Game Development
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
                            title="Events"
                            href="https://google.com"
                            eventKey="secondDropdown"
                            onClick={() => clickNavbarItem('secondDropdown')}>
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
                                </Row>
                            </Container>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <section className="m-8">
                <h4>


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim quis libero eu imperdiet. Maecenas nec lacus a odio volutpat consequat. Morbi lobortis augue in purus commodo pretium. Curabitur et neque sollicitudin, tempus ante ac, semper lacus. Cras risus dolor, bibendum eget ullamcorper eget, venenatis sit amet leo. Nam condimentum maximus lobortis. Nullam sed fringilla justo, ut dignissim diam. Proin commodo, urna ac blandit bibendum, massa diam dapibus risus, vitae commodo eros massa id erat. Nulla ut enim elit. Ut volutpat pellentesque suscipit. Etiam bibendum mauris in lorem facilisis placerat.

                    In viverra vehicula varius. Curabitur auctor nisi rhoncus diam convallis convallis. Suspendisse ut enim convallis elit lobortis vestibulum in varius ligula. Pellentesque et lacus volutpat, scelerisque nulla lobortis, facilisis velit. Cras diam turpis, finibus in diam id, fringilla fermentum risus. Suspendisse aliquam turpis ut lectus blandit condimentum. In hac habitasse platea dictumst. Nam ut aliquam purus.

                    Cras sollicitudin risus tempor tellus accumsan, at condimentum leo sodales. In hac habitasse platea dictumst. Curabitur semper nisi ac sollicitudin tincidunt. Nunc vitae ex vitae tortor facilisis dictum ut nec orci. Aenean vehicula pretium elementum. Proin vitae dolor ac nibh interdum finibus vel in ex. Aliquam convallis augue et fermentum pellentesque. Vestibulum nec elit libero. Donec nisl metus, congue id faucibus nec, interdum eget lacus. Quisque porta turpis lacus. Proin ac mattis eros. Nulla maximus magna sit amet commodo molestie.

                    Duis leo lacus, faucibus in tempor in, lobortis ut mi. Sed venenatis purus non tortor imperdiet ultrices. Praesent magna orci, dignissim et varius quis, cursus sed augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus metus neque, euismod maximus libero efficitur a. Morbi elementum, nisi sed vehicula maximus, felis magna tempor tortor, ac dapibus est risus sed risus. Proin justo odio, fermentum nec neque sit amet, semper consequat eros. Integer vehicula sapien ac semper malesuada. Proin cursus congue urna, eget varius mi congue cursus. Etiam odio est, scelerisque sed imperdiet eu, suscipit in leo. Maecenas luctus diam sapien, quis semper nisl blandit a. Suspendisse ac tellus lobortis enim ullamcorper sollicitudin sit amet eget nisi. Suspendisse eget porta ipsum, eget tristique arcu. Morbi quis ante quis ligula pretium mattis in in mauris.

                    Ut vel congue mi. Sed in ipsum feugiat, laoreet orci quis, laoreet nibh. Sed vitae velit sed massa egestas maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu est sed est rutrum aliquam sit amet in nibh. Nulla iaculis vulputate varius. Sed risus felis, dictum nec accumsan id, rutrum ut ante. Nam lobortis lectus eget ultrices cursus. Suspendisse libero lacus, rhoncus et vehicula ut, mattis non magna.</h4>
            </section>
            <Footer style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
                <Footer.Top>
                    <Footer.Top.ContactLinks>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Contact Me!
                        </a>
                        <a href="https://boxd.it/cfpnX" target="_blank">
                            Letterboxd
                            <span>  </span>
                            <i class="fa fa-film" style={{ fontSize: 'relative', color: '#464d77' }}></i>
                        </a>
                    </Footer.Top.ContactLinks>
                </Footer.Top>
            </Footer>
        </div>
    );
}

export default Homepage;
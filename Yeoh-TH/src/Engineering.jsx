import "./index.css";
import '@govtechsg/sgds/css/sgds.css';
import { Navbar, Nav, NavDropdown, Footer, Container, Col, Row, Card } from '@govtechsg/sgds-react';
import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function Engineering() {
    useEffect(() => {
        const container = document.getElementById('toroid-mirror-3d');
        if (!container) return;

        // Set size
        const width = container.clientWidth || 400;
        const height = container.clientHeight || 400;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.set(0, 0, 30);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Light
        const light = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 1)
        // scene.add(new THREE.AmbientLight(0xffffff, 10));
        scene.add(light);

        // Load Model
        const loader = new GLTFLoader();
        loader.load('/toroidContainer.glb', gltf => {
            scene.add(gltf.scene);
            animate();
        }, undefined, error => {
            console.error(error);
        });

        // Animate
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        // Cleanup
        return () => {
            renderer.dispose();
            if (container) container.innerHTML = '';
        };
    }, []);

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
                                    Properties of a Toroidal Mirror
                                    <Card.Img style={{ maxWidth: "17vw" }} src="/DiagonalViewofToroidalMirrorSolarConcentrator.jpeg" />
                                    <Card.Img style={{ maxWidth: "24vw" }} src="/ReflectedLightBehindLamp.jpeg" />
                                </Card.Title>
                            </Card.Header>
                            <Card.Body style={{ textAlign: 'justify' }}>
                                <p>
                                    Currently I am embarking on a project which will investigate and engineer an optimum toroidal mirror solar concentrator for solar panels, which was part of my interest in learning about power systems for CubeSates.
                                </p>
                                <p>
                                    This project is still currently under work in progress, and I am currently working on the 3D model of the toroidal mirror. The 3D models are created using Blender, and I am still working on a few iterations to try and boil water with. Here, I have used Three.js to render one of my 3D models in this page.
                                </p>
                                <p>Feel free to take a look!</p>
                                <div id="toroid-mirror-3d" style={{ width: "100%", height: "400px" }} />
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
            {/* ...Footer... */}
        </div>
    );
}

export default Engineering;
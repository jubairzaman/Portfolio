import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgUrl from '../../../images/bg.jpg'
import pp from '../../../images/man-03.png'
import Particles from "react-tsparticles";

const Header = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <div> <div style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
            <Container>
                <Row  >

                    <Col className=" " sm={6}>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"><img className="mb-auto img-fluid" src={pp} ></img></div>
                    </Col>
                    <Col className=" d-flex align-items-center" sm={6}>
                        <div data-aos="fade-left">
                            <h1 className="text-white" >I am <span className="text-danger">Jubair Zaman</span> </h1>
                            <h4 className="text-white mt-4">A Full Stack Web-Developer Expert In React , Node.js , Express.js , MongoDb And Many More Cool Libraries </h4>

                            <div className="mt-3">
                                <Button onClick={() => openInNewTab(`https://drive.google.com/file/d/1bTwlD7uhFdkyqs6ez5BUQ6wZVC-drRWE/view?usp=sharing`)} variant="danger">My-Resume</Button>

                                <Link to="/contact"> <Button className="ms-2" variant="danger">Contact-Me</Button></Link>

                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-12 mt-3">
                                <ul class="social-icons">
                                    <li><a class="linkedin" href="https://www.linkedin.com/in/jubair-zaman01/"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a class="dribbble" href="https://github.com/jubairzaman"><i class="fab fa-github-alt"></i></a></li>
                                    <li><a class="facebook" href="https://www.facebook.com/profile.php?id=100021941829549"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="twitter" href="https://twitter.com/JubairZaman1"><i class="fa fa-twitter"></i></a></li>


                                </ul>
                            </div>
                        </div>



                    </Col>
                </Row>
            </Container>








        </div>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {

                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 100,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 90,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 1700,
                            },
                            value: 70,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />








        </div>





    );
};

export default Header;
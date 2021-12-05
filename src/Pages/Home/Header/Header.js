import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgUrl from '../../../images/bg.jpg'
import pp from '../../../images/man-03.png'

const Header = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <div style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '90vh'
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

                            <div className="mt-5">
                                <Button onClick={() => openInNewTab(`https://drive.google.com/file/d/1bTwlD7uhFdkyqs6ez5BUQ6wZVC-drRWE/view?usp=sharing`)} variant="danger">My-Resume</Button>

                                <Link to="/contact"> <Button className="ms-3" variant="danger">Contact-Me</Button></Link>

                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
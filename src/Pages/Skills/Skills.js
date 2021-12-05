import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';


const Skills = () => {
    return (
        <div className='container'>
            <h1 className='App text-danger mt-5'>Skills</h1>
            <h5 className="App my-3 mb-5">I used To Work In Both Front-end And Back-End</h5>
            <Container >
                <Row>
                    <Col data-aos="fade-right" className='mx-auto' sm={12} md={6}>
                        <div className=" container ">
                            <div className='my-2'>
                                <h3>Development</h3>
                                <Button size="sm" className='mx-2' variant="outline-danger">HTML5</Button>
                                <Button size="sm" className='mx-2' variant="outline-primary">CSS3</Button>
                                <Button size="sm" className='mx-2' variant="outline-warning">JavaScript</Button>
                                <Button size="sm" className='mx-2' variant="outline-info">React</Button>
                            </div>
                            <div className='my-2'>
                                <h3>Design</h3>
                                <Button size="sm" className='mx-2' variant="outline-primary">Figma</Button>
                                <Button size="sm" className='mx-2' variant="outline-primary">Adobe xd</Button>
                                <Button size="sm" className='mx-2' variant="outline-primary">Photoshop</Button>

                            </div>
                            <div className='my-2'>
                                <h3>Development</h3>
                                <Button size="sm" className='mx-1' variant="success">Node.js</Button>
                                <Button size="sm" className='mx-1' variant="dark">Express.js</Button>
                                <Button size="sm" className='mx-1' variant="success">MongoDb</Button>
                                <Button size="sm" className='mx-1' variant="info">React</Button>
                            </div>
                        </div>


                    </Col>
                    <Col data-aos="fade-left" sm={12} md={6}>
                        <img className="mb-auto img-fluid " style={{ borderRadius: "20px" }} src="https://www.aalpha.net/wp-content/uploads/2020/12/full-stack-development.gif" ></img>
                    </Col>
                </Row>
            </Container>



        </div>

    );
};

export default Skills;
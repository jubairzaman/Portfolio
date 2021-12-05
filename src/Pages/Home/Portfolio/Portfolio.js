import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';



const Portfolio = () => {
    const [projects, setProjects] = useState();
    useEffect(() => {
        fetch('./projectdata.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])

    return (
        <div className="container ">
            <h1 className="App mt-5 text-danger">
                PROJECTS
            </h1>
            <h5 className="App">Recent Projects Made By Me </h5>

            <div className="mt-5 App ">
                <Row xs={1} md={3} className=" g-1">


                    {projects?.map(project => (
                        <Col >
                            <ProjectCard
                                key={project.name}
                                project={project}

                            ></ProjectCard>

                        </Col>
                    ))}
                </Row>
            </div>


        </div>
    );
};

export default Portfolio;
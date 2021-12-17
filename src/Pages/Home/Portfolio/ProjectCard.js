import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './projectCard.css';

const ProjectCard = (props) => {
    const { name, img, livelink, des, tech } = props.project;

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <div className=" mx-auto">
            <Card
                className="card"

                data-aos="flip-left" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img className=" img" style={{ height: '250px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{ height: "100px" }}>
                        <p>{des}</p>
                        <h6 className="mt-2"> Technology: {tech}</h6>
                    </Card.Text>

                    <Button className="w-75 mt-2" onClick={() => openInNewTab(`${livelink}`)} variant="primary">Live Link</Button>

                </Card.Body>
            </Card>

        </div>








    );
};

export default ProjectCard;
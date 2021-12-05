import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './projectCard.css';

const ProjectCard = (props) => {
    const { name, img, livelink } = props.project;

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <div className="w-75 mx-auto">
            <Card
                className="card"

                data-aos="flip-left" className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img className="mt-2" style={{ height: '220px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button onClick={() => openInNewTab(`${livelink}`)} variant="primary">Live Link</Button>
                </Card.Body>
            </Card>

        </div>








    );
};

export default ProjectCard;
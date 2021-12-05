import React from 'react';
import { Form, Button } from 'react-bootstrap';


const Contact = () => {
    return (


        <div>
            <div className="App my-5">

                <h1 className="text-danger">Contact Me </h1>
            </div>






            <Form className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>

        </div>

    );
};

export default Contact;
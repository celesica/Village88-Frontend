import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { BsPersonFill, BsEnvelopeFill } from 'react-icons/bs';
import '../assets/css/ContactForm.css';

const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact({ name, email });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <InputGroup>
                    <InputGroup.Text><BsPersonFill /></InputGroup.Text>
                    <FormControl type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} className="custom-input" />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup>
                    <InputGroup.Text><BsEnvelopeFill /></InputGroup.Text>
                    <FormControl type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="custom-input" /> {/* Add the custom class */}
                </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    );
};

export default ContactForm;

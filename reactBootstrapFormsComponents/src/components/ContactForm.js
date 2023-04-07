import React from 'react';
import { Form, FormControl, FormText, FormSelect, FloatingLabel } from 'react-bootstrap';
import '../assets/css/ContactForm.css';

function ContactForm() {
    return (
        <div>
            <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "20px"}}>Contact Us</h2>
            <Form className="contact-form">
                <FloatingLabel controlId="formBasicFirstName" label="First Name">
                    <Form.Control type="text" placeholder="Enter your first name" required />
                </FloatingLabel>

                <FloatingLabel controlId="formBasicEmail" label="Email address">
                    <Form.Control type="email" placeholder="Enter your email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </FloatingLabel>

                <Form.Group controlId="formBasicRadio">
                    <Form.Label>Level</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Beginner"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        required
                    />
                    <Form.Check
                        type="radio"
                        label="Advanced"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicSelect">
                    <Form.Label>How did you hear about Kenyukai?</Form.Label>
                    <Form.Control as="select" required>
                        <option value="">Select an option</option>
                        <option>Friends and family</option>
                        <option>Social media</option>
                        <option>School</option>
                        <option>Search engine</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicRange">
                    <Form.Label>How much do you know about Kendo?</Form.Label>
                    <Form.Control type="range" min="1" max="10" defaultValue="5" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to be contacted via email" required />
                </Form.Group>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    );
}

export default ContactForm;

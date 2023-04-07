import React, { useState } from 'react';
import { Form, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { FaUser, FaHome, FaPhone } from 'react-icons/fa';
import "../assets/css/OrderForm.css"

function OrderForm() {
    // Define the state variables for the form fields and modal
    const [showModal, setShowModal] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [v88TShirtQty, setV88TShirtQty] = useState(0);
    const [v88CapQty, setV88CapQty] = useState(0);

    // Define the event handlers for each form field
    const handleCustomerNameChange = (event) => {
        setCustomerName(event.target.value);
    };

    const handleDeliveryAddressChange = (event) => {
        setDeliveryAddress(event.target.value);
    };

    const handleContactNumberChange = (event) => {
        setContactNumber(event.target.value);
    };

    const handleV88TShirtQtyChange = (event) => {
        setV88TShirtQty(Number(event.target.value));
    };

    const handleV88CapQtyChange = (event) => {
        setV88CapQty(Number(event.target.value));
    };

    // Define the submit handler for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    // Define the close handler for the modal
    const handleClose = () => {
        setShowModal(false);
    };

    // Define the prices and totals for each ordered item
    const v88TShirtPrice = 600.0;
    const v88CapPrice = 300.0;

    const v88TShirtTotal = v88TShirtQty * v88TShirtPrice;
    const v88CapTotal = v88CapQty * v88CapPrice;
    const total = v88TShirtTotal + v88CapTotal;

    // Render the form and modal
    return (
        <div className="wrapper">
            <h2>Order Form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCustomerName">
                    <Form.Label>Name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><FaUser /></InputGroup.Text>
                        <FormControl type="text" placeholder="Enter name" value={customerName} onChange={handleCustomerNameChange} className="custom-input" />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formDeliveryAddress">
                    <Form.Label>Delivery Address</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><FaHome /></InputGroup.Text>
                        <FormControl type="text" placeholder="Enter delivery address" value={deliveryAddress} onChange={handleDeliveryAddressChange} className="custom-input" />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formContactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <InputGroup>
                        <InputGroup.Text><FaPhone /></InputGroup.Text>
                        <FormControl type="text" placeholder="Enter contact number" value={contactNumber} onChange={handleContactNumberChange} className="custom-input" />
                    </InputGroup>
                </Form.Group>

                <h3>Products</h3>
                <Form.Group controlId="formV88TShirtQty">
                    <div className="quantity-input-container">
                        <Form.Check
                            type="checkbox"
                            label="Limited Edition V88 T-Shirt"
                            onChange={() => {
                                if (v88TShirtQty === 0) {
                                    setV88TShirtQty(1);
                                } else {
                                    setV88TShirtQty(0);
                                }
                            }}
                        />
                        <Form.Control
                            type="number"
                            min="1"
                            value={v88TShirtQty}
                            onChange={handleV88TShirtQtyChange}
                            disabled={!v88TShirtQty}
                            className="quantity-input"
                        />
                    </div>
                </Form.Group>
                <Form.Group controlId="formV88CapQty">
                    <div className="quantity-input-container">
                        <Form.Check
                            type="checkbox"
                            label="Limited Edition V88 Cap"
                            onChange={() => {
                                if (v88CapQty === 0) {
                                    setV88CapQty(1);
                                } else {
                                    setV88CapQty(0);
                                }
                            }}
                        />
                        <Form.Control
                            type="number"
                            min="1"
                            value={v88CapQty}
                            onChange={handleV88CapQtyChange}
                            disabled={!v88CapQty}
                            className="quantity-input"
                        />
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Place Order
                </Button>
            </Form>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Complete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Customer Name: {customerName}</p>
                    <p>Delivery Address: {deliveryAddress}</p>
                    <p>Contact #: {contactNumber}</p>
                    {v88TShirtQty > 0 && (
                        <p>
                            Limited Edition V88 T-Shirt x {v88TShirtQty} ={' '}
                            {v88TShirtTotal.toFixed(2)}
                        </p>
                    )}
                    {v88CapQty > 0 && (
                        <p>
                            Limited Edition V88 Cap x {v88CapQty} = {v88CapTotal.toFixed(2)}
                        </p>
                    )}
                    <p>
                        Total: <strong>{total.toFixed(2)}</strong>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default OrderForm;
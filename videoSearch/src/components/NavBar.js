import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import '../assets/NavBar.css';

const CustomNavbar = ({ onFormSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(event.target.search.value);
    };

    return (
        <Navbar variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Brand href="/" className="d-flex align-items-center">
                <img
                    src="/youtube_logo.svg"
                    width="100%"
                    height="100"
                    className="d-inline-block align-top"
                    alt="YouTube logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse id="navbar-nav">
                <Form className="d-flex mx-auto" onSubmit={handleSubmit}>
                    <FormControl type="text" placeholder="Search" name="search" className="mr-2 searchBar" />
                    <Button variant="outline-light" type="submit" className="searchBtn">
                        <BsSearch />
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};


export default CustomNavbar;

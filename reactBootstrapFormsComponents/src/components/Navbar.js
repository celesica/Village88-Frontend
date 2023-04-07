import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Navbar.css";

function CustomNavbar() {

    const scrollToCarousel = () => {
        const carouselElement = document.getElementById('carousel-section');
        carouselElement.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToGallery = () => {
        const galleryElement = document.getElementById('gallery-section');
        galleryElement.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToContact = () => {
        const contactElement = document.getElementById('contact-section');
        contactElement.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Navbar.Brand className="brand" href="#home">Kenyukai Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={scrollToCarousel}>Events</Nav.Link>
                    <Nav.Link onClick={scrollToGallery}>Gallery</Nav.Link>
                    <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;

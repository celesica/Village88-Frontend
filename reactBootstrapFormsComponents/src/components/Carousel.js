import React, { useState } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import kenyukai1 from '../assets/images/kenyukai1.jpg';
import kenyukai2 from '../assets/images/kenyukai2.jpg';
import kenyukai3 from '../assets/images/kenyukai3.jpg';
import '../assets/css/Carousel.css';

function CarouselComponent() {
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState([
        {title: '1st Philippine Dan Shinsa', text: 'November 13, 2022 | The Upper Deck - Ortigas Technopoint, Pasig City'},
        {title: 'Mindanao Leg - Shinsa Seminar', text: 'October 2022 | Rizal Memorial Colleges (RMC) Gym, Davao City'},
        {title: '4th Philippine National Kendo Tournament', text: 'October 26-27, 2019 | Celebrity Sports Plaza, Quezon City'}
    ]);
    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setShow(true);
        setIndex(index);
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="carousel-container"
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={kenyukai1}
                        alt="First slide"
                    />
                    <div className="carousel-caption">
                        <h3>{details[0].title}</h3>
                        <Button
                            variant="maroon"
                            className="carousel-button"
                            onClick={() => handleShow(0)}
                        >
                            Details
                        </Button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={kenyukai2}
                        alt="Second slide"
                    />

                    <div className="carousel-caption">
                        <h3>{details[1].title}</h3>
                        <Button
                            variant="maroon"
                            className="carousel-button"
                            onClick={() => handleShow(1)}
                        >
                            Details
                        </Button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={kenyukai3}
                        alt="Third slide"
                    />

                    <div className="carousel-caption">
                        <h3>{details[2].title}</h3>
                        <Button
                            variant="maroon"
                            className="carousel-button"
                            onClick={() => handleShow(2)}
                        >
                            Details
                        </Button>
                    </div>
                </Carousel.Item>
            </Carousel>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{details[index].title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{details[index].text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CarouselComponent;

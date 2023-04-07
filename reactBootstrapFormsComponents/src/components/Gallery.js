import React, { useState } from "react";
import { Row, Col, Pagination } from "react-bootstrap";
import "../assets/css/Gallery.css";

function Gallery() {
    const images = [
        { id: 1, src: "./assets/images/gal1.jpg", title: "Image 1" },
        { id: 2, src: "./assets/images/gal2.jpg", title: "Image 2" },
        { id: 3, src: "./assets/images/gal3.jpg", title: "Image 3" },
        { id: 4, src: "./assets/images/gal4.jpg", title: "Image 4" },
        { id: 5, src: "./assets/images/gal5.jpg", title: "Image 5" },
        { id: 6, src: "./assets/images/gal6.jpg", title: "Image 6" },
        { id: 7, src: "./assets/images/gal7.jpg", title: "Image 7" },
        { id: 8, src: "./assets/images/gal8.jpg", title: "Image 8" },
        { id: 9, src: "./assets/images/gal9.jpg", title: "Image 9" },
        { id: 10, src: "./assets/images/gal10.jpg", title: "Image 10" },
        { id: 11, src: "./assets/images/gal11.jpg", title: "Image 11" },
        { id: 12, src: "./assets/images/gal12.jpg", title: "Image 12" },
    ];

    const imagesPerPage = 4; // Maximum number of images per page
    const pageCount = Math.ceil(images.length / imagesPerPage); // Total number of pages

    const [activePage, setActivePage] = useState(1); // Current active page

    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
    };

    let startIndex = (activePage - 1) * imagesPerPage; // Index of first image to display
    if (activePage === 1) {
        startIndex = 0; // Reset startIndex when activePage is 1
    }
    const endIndex = startIndex + imagesPerPage; // Index of last image to display
    const imagesToDisplay = images.slice(startIndex, endIndex); // Array of images to display

    return (
        <div className="gallery-container">
            <h2 className="gallery-heading" style={{ color: "#fff" }}>
                Club Gallery
            </h2>
            <Row>
                {imagesToDisplay.map((image) => (
                    <Col key={image.id}>
                        <img src={image.src} alt={image.title} className="gallery-image" />
                    </Col>
                ))}
            </Row>
            <Pagination className="gallery-pagination">
                <Pagination.First
                    disabled={activePage === 1}
                    onClick={() => handlePageClick(1)}
                />
                <Pagination.Prev
                    disabled={activePage === 1}
                    onClick={() => handlePageClick(activePage - 1)}
                />
                {Array.from({ length: pageCount }).map((_, index) => (
                    <Pagination.Item
                        key={index}
                        active={index + 1 === activePage}
                        onClick={() => handlePageClick(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    disabled={activePage === pageCount}
                    onClick={() => handlePageClick(activePage + 1)}
                />
                <Pagination.Last
                    disabled={activePage === pageCount}
                    onClick={() => handlePageClick(pageCount)}
                />
            </Pagination>
        </div>
    );
}

export default Gallery;

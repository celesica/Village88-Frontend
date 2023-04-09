import React, { useState, useEffect } from 'react';
import { Container, Modal } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import { fetchImages, accessKey } from '../assets/api/unsplash';
import '../assets/css/ImageGallery.css';

const ImageGallery = ({ searchTerm }) => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setPage(1);
        setImages([]);
    }, [searchTerm]);

    useEffect(() => {
        const getImages = async () => {
            const results = await fetchImages(searchTerm, page);
            if (page === 1) {
                setImages(results);
            } else {
                setImages((prevImages) => [...prevImages, ...results]);
            }
        };
        getImages();
    }, [searchTerm, page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        setPage((prevPage) => prevPage + 1);
    };

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <Container fluid>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image) => (
                    <div key={image.id} className='imageItem'>
                        <img
                            src={image.urls.thumb}
                            alt={image.description || 'Image from Unsplash'}
                            className='image'
                            onClick={() => openModal(image)}
                        />
                    </div>
                ))}
            </Masonry>
            {selectedImage && (
                <Modal show={true} onHide={closeModal} centered>
                    <Modal.Body>
                        <img src={selectedImage.urls.full} alt={selectedImage.description || 'Image from Unsplash'} className='modalImage' />
                    </Modal.Body>
                </Modal>
            )}
        </Container>
    );
};

export default ImageGallery;

import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Masonry from 'react-masonry-css';
import "../assets/css/Gallery.css"

function Gallery() {
    const [filter, setFilter] = useState('All');

    const images = [
        { url: '../assets/images/self1.jpg', category: 'Selfies' },
        { url: '../assets/images/fam1.jpg', category: 'My Family and Friends' },
        { url: '../assets/images/ad1.jpg', category: 'Adventures' },
        { url: '../assets/images/self2.jpg', category: 'Selfies' },
        { url: '../assets/images/adventure-2.jpg', category: 'Adventures' },
        { url: '../assets/images/fam3.jpg', category: 'My Family and Friends' },
        { url: '../assets/images/self3.jpg', category: 'Selfies' },
        { url: '../assets/images/fam4.jpg', category: 'My Family and Friends' },
        { url: '../assets/images/adventure-3.jpg', category: 'Adventures' },
        { url: '../assets/images/self4.jpg', category: 'Selfies' },
        { url: '../assets/images/fam5.jpg', category: 'My Family and Friends' },
        { url: '../assets/images/self5.jpg', category: 'Selfies' },
        { url: '../assets/images/adventure-6.jpg', category: 'Adventures' },
        { url: '../assets/images/fam6.jpg', category: 'My Family and Friends' },
        { url: '../assets/images/self6.jpg', category: 'Selfies' },
        { url: '../assets/images/adventure-4.jpg', category: 'Adventures' },
        { url: '../assets/images/fam2.jpg', category: 'My Family and Friends' },
        { url: '../assets/images/adventure-5.jpg', category: 'Adventures' },
    ];

    const filteredImages = filter === 'All' ? images : images.filter(image => image.category === filter);

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <Container className="text-center">
            <h1>Gallery</h1>
            <div className="btn-group" role="group">
                <Button variant="secondary" onClick={() => setFilter('All')}>All</Button>
                <Button variant="secondary" onClick={() => setFilter('Selfies')}>Selfies</Button>
                <Button variant="secondary" onClick={() => setFilter('My Family and Friends')}>My Family and Friends</Button>
                <Button variant="secondary" onClick={() => setFilter('Adventures')}>Adventures</Button>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {filteredImages.map((image, index) => (
                    <div key={index}>
                        <Image src={image.url} fluid />
                    </div>
                ))}
            </Masonry>
        </Container>
    );
}

export default Gallery;

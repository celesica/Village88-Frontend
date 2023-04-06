import React from 'react';
import ReactDOM from 'react-dom';
import PostDetails from './PostList';
import LuffyImage from './assets/images/LuffyImage.jpg';
import ZoroImage from './assets/images/ZoroImage.jpg';
import SanjiImage from './assets/images/SanjiImage.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <PostDetails
            image={LuffyImage}
            username="Monkey D. Luffy"
            time="January 25, 2022 3:00 PM"
            text="React is amazing!"
        />
        <PostDetails
            image={ZoroImage}
            username="Roronoa Zoro"
            time="January 25, 2022 3:30 PM"
            text="This website is cool!"
        />
        <PostDetails
            image={SanjiImage}
            username="Vinsmoke Sanji"
            time="January 25, 2022 4:00 PM"
            text="I love ReactJS!"
        />
    </React.StrictMode>,
    document.getElementById('root'),
);

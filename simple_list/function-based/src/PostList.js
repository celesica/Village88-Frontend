import React from 'react';
import LuffyImage from "./assets/images/LuffyImage.jpg";
import ZoroImage from "./assets/images/ZoroImage.jpg";
import SanjiImage from "./assets/images/SanjiImage.jpg";
import './PostList.css';

function PostList() {
    return (
        <div className="wrapper">
            <div className="post">
                <img src={LuffyImage} alt="LuffyImage" />
                <div className="post-details">
                    <div className="post-user">
                        <span className="post-username">Monkey D. Luffy</span>
                        <span className="post-time">January 25, 2022 3:00 PM</span>
                    </div>
                    <div className="post-text">React is amazing!</div>
                </div>
            </div>
            <div className="post">
                <img src={ZoroImage} alt="ZoroImage" />
                <div className="post-details">
                    <div className="post-user">
                        <span className="post-username">Roronoa Zoro</span>
                        <span className="post-time">January 25, 2022 3:30 PM</span>
                    </div>
                    <div className="post-text">This website is cool!</div>
                </div>
            </div>
            <div className="post">
                <img src={SanjiImage} alt="SanjiImage" />
                <div className="post-details">
                    <div className="post-user">
                        <span className="post-username">Vinsmoke Sanji</span>
                        <span className="post-time">January 25, 2022 4:00 PM</span>
                    </div>
                    <div className="post-text">I love ReactJS!</div>
                </div>
            </div>
        </div>
    );
}

export default PostList;

import React from 'react';
import './PostList.css';

function PostList(props) {
    const { image, username, time, text } = props;

    return (
        <div className="wrapper">
            <div className="post">
                <img src={image} alt="User Avatar" className="post-image" />
                <div className="post-details">
                    <div className="post-user">
                        <span className="post-username">{username}</span>
                        <span className="post-time">{time}</span>
                    </div>
                    <div className="post-text">{text}</div>
                </div>
            </div>
        </div>
    );
}

export default PostList;

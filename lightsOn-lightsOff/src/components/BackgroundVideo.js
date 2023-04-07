import React from 'react';
import '../assets/css/BackgroundVideo.css';

const BackgroundVideo = ({ mode }) => {
    const videoSource = mode === 'day' ? 'day-video.mp4' : 'night-video.mp4';
    const videoKey = `${mode}-${Math.random()}`;

    return (
        <video autoPlay loop playsInline key={videoKey} className="background-video">
            <source src={`assets/videos/${videoSource}`} type="video/mp4" />
        </video>
    );
};

export default BackgroundVideo;

import React, { useState, useEffect } from 'react';
import youtubeAPI from '../api/youtubeAPI';
import { formatViewCount } from '../utils/RoundViews';
import '../assets/MainVideo.css';

const MainVideo = ({ video }) => {
    const [channelTitle, setChannelTitle] = useState('');
    const [channelAvatar, setChannelAvatar] = useState('');
    const [viewCount, setViewCount] = useState('');
    const [publishedAt, setPublishedAt] = useState('');
    const [showFullDesc, setShowFullDesc] = useState(false);

    useEffect(() => {
        const getVideoDetails = async () => {
            const videoResponse = await youtubeAPI.get('/videos', {
                params: {
                    id: video.id.videoId,
                    part: 'snippet, statistics',
                },
            });
            const data = videoResponse.data.items[0];
            setChannelTitle(data.snippet.channelTitle);
            setViewCount(data.statistics.viewCount);
            setPublishedAt(data.snippet.publishedAt);

            const channelResponse = await youtubeAPI.get('/channels', {
                params: {
                    id: data.snippet.channelId,
                    part: 'snippet',
                },
            });
            setChannelAvatar(channelResponse.data.items[0].snippet.thumbnails.default.url);
        };
        getVideoDetails();
    }, [video]);

    if (!video) {
        return <div>No video searched yet...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const formattedViewCount = viewCount && formatViewCount(parseInt(viewCount, 10));
    const descLines = video.snippet.description.split('\n');
    const maxDescLines = 4;

    const toggleDesc = () => {
        setShowFullDesc(!showFullDesc);
    };

    return (
        <div className="main-video">
            <div className="video-wrapper">
                <iframe src={videoSrc} title="Video player" allowFullScreen />
            </div>
            <div className="video-info">
                <h4>{video.snippet.title}</h4>
                <div className="channel-info">
                    <p className="channelOwner">
                        <img
                            className="channelAvatar"
                            src={channelAvatar}
                            alt={channelTitle}
                        />
                        {channelTitle}
                    </p>
                </div>
                <div className="video-description">
                    <p className="details">
                        {formattedViewCount} views ·{' '}
                        {publishedAt &&
                            new Date(publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                    </p>
                    <div className="desc">
                        {descLines.slice(0, maxDescLines).map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                        {!showFullDesc && descLines.length > maxDescLines && (
                            <button className="show-more" onClick={toggleDesc}>
                                Show More
                            </button>
                        )}
                        {showFullDesc && (
                            <>
                                {descLines.slice(maxDescLines).map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                                {descLines.length > maxDescLines && (
                                    <button className="show-less" onClick={toggleDesc}>
                                        Show Less
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainVideo;

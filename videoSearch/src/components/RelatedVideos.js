import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import youtube from '../api/youtubeAPI';
import { formatViewCount } from '../utils/RoundViews';
import '../assets/RelatedVideos.css';

const RelatedVideos = ({ videos, onVideoSelect, mainVideoId }) => {
    const [videoStats, setVideoStats] = useState([]);

    useEffect(() => {
        const videoIds = videos.map((video) => video.id.videoId).join(',');
        youtube.get('/videos', {
            params: {
                part: 'statistics',
                id: videoIds,
            },
        })
            .then((response) => {
                if (Array.isArray(response.data.items)) {
                    setVideoStats(response.data.items);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [videos]);

    const videoList = videos
        .filter((video) => video.id.videoId !== mainVideoId)
        .map((video) => {
            // Find corresponding video stats by ID
            const stats = videoStats.find((stat) => stat.id === video.id.videoId)?.statistics;
            // Convert view count to a shorter format
            const viewCount = stats ? Number(stats.viewCount) : 0;
            const viewCountStr = formatViewCount(viewCount);
            const publishedDate = new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });

            return (
                <div
                    key={video.id.videoId || video.id}
                    onClick={() => onVideoSelect(video)}
                    style={{ cursor: 'pointer' }}
                >
                    <Row className="related-video-row">
                        <Col xs={5} >
                            <div className="video-thumbnail-wrapper">
                                <img className="video-thumbnail" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                            </div>
                        </Col>
                        <Col xs={7}>
                            <div className="video-title">{video.snippet.title}</div>
                            <div className="channel-name">{video.snippet.channelTitle}</div>
                            <div className="video-stats">
                                {viewCountStr} views<span className="separator">•</span>{publishedDate}
                            </div>
                        </Col>
                    </Row>
                </div>
            );
        });

    return <div className="related-videos">{videoList}</div>;
};

export default RelatedVideos;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/NavBar';
import MainVideo from './components/MainVideo';
import RelatedVideos from './components/RelatedVideos';
import CommentSection from './components/CommentsSection';
import youtubeAPI from './api/youtubeAPI';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [viewCount, setViewCount] = useState('');

    useEffect(() => {
        onTermSubmit('ReactJS');
    }, []);

    const getRelatedVideos = async (videoId) => {
        const response = await youtubeAPI.get('/search', {
            params: {
                relatedToVideoId: videoId,
                type: 'video',
                maxResults: 10,
            },
        });
        setVideos(response.data.items);
    };

    const onVideoSelect = async (video) => {
        setSelectedVideo(video);
        setViewCount(video.statistics?.viewCount);
        getRelatedVideos(video.id.videoId);
    };

    const onTermSubmit = async (term) => {
        const response = await youtubeAPI.get('/search', {
            params: {
                q: term,
                type: 'video',
            },
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
        setViewCount(response.data.items[0].statistics?.viewCount);
        getRelatedVideos(response.data.items[0].id.videoId);
    };

    return (
        <div className="App bgDark">
            <CustomNavbar onFormSubmit={onTermSubmit} />
            <Container>
                <Row>
                    <Col md={9}>
                        <MainVideo video={selectedVideo} viewCount={viewCount} />
                        {selectedVideo && (
                            <CommentSection videoId={selectedVideo.id.videoId} />
                        )}
                    </Col>
                    <Col md={3}>
                        <RelatedVideos
                            videos={videos}
                            onVideoSelect={onVideoSelect}
                            mainVideoId={selectedVideo?.id.videoId}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;

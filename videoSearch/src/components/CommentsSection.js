import React, {useEffect, useState} from 'react';
import {BiDislike, BiLike} from 'react-icons/bi';
import { Row, Col } from 'react-bootstrap';
import '../assets/CommentSection.css';
import LetteredAvatar from 'react-lettered-avatar';

const CommentSection = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('commentsData')) || {};
        setComments(storedData.comments || []);
    }, []);

    useEffect(() => {
        localStorage.setItem('commentsData', JSON.stringify({ comments }));
    }, [comments]);

    const generateRandomInitials = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const firstInitial = letters.charAt(Math.floor(Math.random() * letters.length));
        const secondInitial = letters.charAt(Math.floor(Math.random() * letters.length));
        return firstInitial + ' ' + secondInitial;
    };

    const generateUserAvatar = (userName) => {
        const name = userName === 'Anonymous' ? generateRandomInitials() : userName;
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return <LetteredAvatar name={name} size={40} radius={50} bgColor={randomColor} textColor="white" />;
    };

    const handleAddComment = (event) => {
        event.preventDefault();
        const newComment = event.target.comment.value;
        const userName = localStorage.getItem('userName') || 'Anonymous';
        const userAvatar = generateUserAvatar(userName);
        setComments([...comments, { text: newComment, likes: 0, userAvatar }]);
        event.target.comment.value = '';
    };

    const handleLike = (index) => {
        setComments((prevState) => {
            const updatedComments = prevState.map((comment, i) => (i === index ? { ...comment } : comment));
            updatedComments[index].likes = updatedComments[index].likes + 1;
            return updatedComments;
        });
    };

    const handleDislike = (index) => {
        setComments((prevState) => {
            const updatedComments = prevState.map((comment, i) => (i === index ? { ...comment } : comment));
            updatedComments[index].likes = updatedComments[index].likes - 1;
            return updatedComments;
        });
    };

    const commentList = comments.map((comment, index) => (
        <div key={index} className="comment">
            <Row>
                <Col xs="auto" className="userAvatar">
                    {comment.userAvatar}
                </Col>
                <Col>
                    <div className="commentContent">
                        <p>{comment.text}</p>
                    </div>
                    <div className="reactBtn">
                        <button className="likeBtn" onClick={() => handleLike(index)}>
                            <BiLike />
                        </button>{' '}
                        {comment.likes ? <span className="reactCount">{comment.likes}</span> : null}
                        <button className="dislikeBtn" onClick={() => handleDislike(index)}>
                            <BiDislike />
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    ));

    return (
        <div className="commentWrapper">
            <h4>
                {comments.length === 1
                    ? `${comments.length} Comment`
                    : `${comments.length} Comments`}
            </h4>
            <form onSubmit={handleAddComment}>
                <input className="commentInput" type="text" name="comment" placeholder="Add a comment" />
                <button className="commentBtn" type="submit">Comment</button>
            </form>
            <div>{commentList}</div>
        </div>
    );
};

export default CommentSection;

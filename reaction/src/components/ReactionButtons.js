import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import like from '../assets/images/like.gif';
import love from '../assets/images/love.gif';
import haha from '../assets/images/haha.gif';
import wow from '../assets/images/wow.gif';
import sad from '../assets/images/sad.gif';
import angry from '../assets/images/angry.gif';
import "../App.css";

const ReactionButtons = ({ onReaction, reactionCounts }) => {
    const reactions = [
        { name: 'Like', file: like },
        { name: 'Love', file: love },
        { name: 'Haha', file: haha },
        { name: 'Wow', file: wow },
        { name: 'Sad', file: sad },
        { name: 'Angry', file: angry },
    ];

    return (
        <ButtonGroup>
            {reactions.map((reaction) => (
                <Button
                    key={reaction.name}
                    onClick={() => onReaction(reaction.name)}
                    className="button"
                >
          <span className="count">
            {reactionCounts[reaction.name] || 0}
          </span>
                    <img src={reaction.file} alt={reaction.name} width="50" height="50" />
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default ReactionButtons;

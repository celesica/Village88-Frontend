import React, { useState, useEffect } from 'react';
import jokesAPI from '../api/jokes';
import ReactionButtons from './ReactionButtons';

const JokeList = () => {
    const [joke, setJoke] = useState(null);
    const [reactionCounts, setReactionCounts] = useState(() => {
        const storedCounts = localStorage.getItem('reactionCounts');
        return storedCounts ? JSON.parse(storedCounts) : {};
    });

    useEffect(() => {
        fetchJoke();
    }, []);

    useEffect(() => {
        localStorage.setItem('reactionCounts', JSON.stringify(reactionCounts));
    }, [reactionCounts]);

    const fetchJoke = async () => {
        const response = await jokesAPI.get('/random_joke');
        setJoke(response.data);
    };

    const handleReaction = (reaction) => {
        // Update the reaction counts
        setReactionCounts((prevCounts) => ({
            ...prevCounts,
            [reaction]: (prevCounts[reaction] || 0) + 1,
        }));

        // Fetch a new joke
        fetchJoke();
    };

    return (
        <div>
            {joke && (
                <>
                    <div className="jokeQuote">
                        <h4>{joke.setup}</h4>
                        <h2>{joke.punchline}</h2>
                    </div>
                    <ReactionButtons onReaction={handleReaction} reactionCounts={reactionCounts} />
                </>
            )}
        </div>
    );
};

export default JokeList;

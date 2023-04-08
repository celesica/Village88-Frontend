import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import questionsData from '../data/questions';

function Survey() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [housePoints, setHousePoints] = useState({
        Gryffindor: 0,
        Hufflepuff: 0,
        Ravenclaw: 0,
        Slytherin: 0,
    });

    const handleAnswer = (house) => {
        setHousePoints((prevPoints) => {
            const newPoints = { ...prevPoints };
            newPoints[house]++;
            return newPoints;
        });
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div>
            {currentQuestionIndex < questionsData.length ? (
                <Question
                    questionData={questionsData[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    onNextQuestion={handleNextQuestion}
                />
            ) : (
                <Results housePoints={housePoints} />
            )}
        </div>
    );
}

export default Survey;

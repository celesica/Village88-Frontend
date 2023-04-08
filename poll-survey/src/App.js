import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Survey from './components/Survey';
import Results from './components/Results';
import "./App.css"

function App() {
    const [results, setResults] = useState(null);
    const [showIntro, setShowIntro] = useState(true);

    const handleResults = (results) => {
        setResults(results);
    };

    const handleStart = () => {
        setShowIntro(false);
    };

    return (
        <Container className="mt-5">
            {showIntro ? (
                <div>
                    <h1>Find Out Your Hogwarts House</h1>
                    <img className="sorting-hat-image" src="../assets/images/sorting-hat.png" alt="Sorting Hat" />
                    <Button variant="primary" onClick={handleStart}>
                        Okay
                    </Button>
                </div>
            ) : results ? (
                <Results results={results} />
            ) : (
                <Survey onResults={handleResults} />
            )}
        </Container>
    );
}

export default App;
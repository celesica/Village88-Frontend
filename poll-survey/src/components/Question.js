import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Question({ questionData, onAnswer, onNextQuestion }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (house) => {
        setSelectedOption(house);
    };

    const handleSubmit = () => {
        if (selectedOption) {
            onAnswer(selectedOption);
            onNextQuestion();
            setSelectedOption(null);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{questionData.question}</h2>
                </Col>
            </Row>
            <Row>
                {questionData.options.map((option) => (
                    <Col key={option.label} xs={12}>
                        <Button
                            className="mt-2"
                            variant={selectedOption === option.house ? 'success' : 'outline-primary'}
                            onClick={() => handleOptionChange(option.house)}
                            block
                        >
                            {option.label}
                        </Button>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <Button className="mt-3" variant="primary" onClick={handleSubmit} disabled={!selectedOption}>Next</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Question;
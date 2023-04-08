import React from 'react';
import { Container, Row, Col, Alert, ProgressBar, Button } from 'react-bootstrap';

function Results({ housePoints }) {
    const totalPoints = Object.values(housePoints).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    const housePercentages = Object.entries(housePoints).map(([house, points]) => {
        const percentage = (points / totalPoints) * 100;
        return { house, percentage };
    }).sort((a, b) => b.percentage - a.percentage);

    const winningHouse = housePercentages.reduce((prev, current) =>
        prev.percentage > current.percentage ? prev : current
    );

    const houseDescription = {
        Gryffindor:
            'You belong in Gryffindor, where dwell the brave at heart. Their daring, nerve and chivalry set Gryffindors apart.',
        Hufflepuff:
            'You belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil.',
        Ravenclaw:
            'You belong in Ravenclaw, if you have a ready mind. Where those of wit and learning will always find their kind.',
        Slytherin:
            'You belong in Slytherin where you’ll make your real friends. Those cunning folk use any means to achieve their ends.',
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const imageFileName = `${winningHouse.house.toLowerCase()}.png`;

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Your House is {winningHouse.house}</h2>
                    <img className="houseCrest" src={`../assets/images/${imageFileName}`} alt={winningHouse.house} />
                    <p>{houseDescription[winningHouse.house]}</p>
                </Col>
            </Row>
            <Row className="houses">
                {housePercentages.map(({ house, percentage }) => (
                    <Col key={house} xs={12}>
                        <Alert variant={house.toLowerCase()}>
                            <h4>{house}</h4>
                            <ProgressBar now={percentage} label={`${percentage.toFixed(2)}%`} />
                        </Alert>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <Button onClick={handleRefresh} className="mt-3">Get Sorted Again</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Results;

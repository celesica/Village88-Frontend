import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutMe() {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Image src="../assets/images/about.png" fluid />
                </Col>
                <Col sm={8}>
                    <h1>About Me</h1>
                    <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from Toril, Davao City, Philippines. I code and create web elements for amazing people around the world. I like to work with new people. New people, new experiences.</p>
                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;

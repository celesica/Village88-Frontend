import { Container, Image } from 'react-bootstrap';

function Home() {
    return (
        <Container className="text-center">
            <h1>Welcome to My Personal Website</h1>
            <Image src="../assets/images/welcome.png" fluid style={{marginTop: '20px'}} />
        </Container>
    );
}

export default Home;
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import PetContext from './components/PetContext';
import PetName from './components/PetName';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
    const [petName, setPetName] = useState(localStorage.getItem('PET') || '');

    const handleSetPetName = (event) => {
        event.preventDefault();
        const newPetName = event.target.elements.petName.value;
        setPetName(newPetName);
        localStorage.setItem('PET', newPetName);
    };

    return (
        <PetContext.Provider value={{ petName, setPetName }}>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h1 className="text-center mb-3">My Pet</h1>
                        <Form onSubmit={handleSetPetName} className="mt-3 d-flex">
                            <Form.Control id="petName" type="text" placeholder="Pet name" className="mr-3" />
                            <Button variant="primary" type="submit">
                                Set Pet Name
                            </Button>
                        </Form>
                        <img src="/assets/images/pet.webp" alt="Pet" className="img-fluid my-3 mx-auto d-block" />
                        <PetName />
                    </Col>
                </Row>
            </Container>
        </PetContext.Provider>
    );
}

export default App;

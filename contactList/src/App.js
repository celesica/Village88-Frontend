import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
      <Container fluid>
        <Row>
          <Col md={6} className="form-col"> {/* Add a className to the first column */}
            <h2>Contact Registration Form</h2>
            <ContactForm onAddContact={handleAddContact} />
          </Col>
          <Col md={6} className="list-col"> {/* Add a className to the second column */}
            <h2 className="contacts">Contacts</h2>
            <ContactList contacts={contacts} />
          </Col>
        </Row>
      </Container>
  );
};

export default App;

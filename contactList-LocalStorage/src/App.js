import React, { useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { initialState, contactsReducer } from './components/contactsReducer';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  return (
      <Container fluid>
        <Row>
          <Col md={6} className="form-col">
            <h2>Contact Registration Form</h2>
            <ContactForm onAddContact={(newContact) => dispatch({ type: 'ADD_CONTACT', payload: newContact })} />
          </Col>
          <Col md={6} className="list-col">
            <h2 className="contacts">Contacts</h2>
            <ContactList contacts={state.contacts} dispatch={dispatch} />
          </Col>
        </Row>
      </Container>
  );
};

export default App;

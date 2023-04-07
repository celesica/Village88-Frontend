import React from 'react';
import { Card } from 'react-bootstrap';
import LetteredAvatar from 'react-lettered-avatar';
import '../assets/css/ContactList.css';

const ContactList = ({ contacts }) => {
    return (
        <>
            {contacts.map((contact) => (
                <Card key={contact.email} style={{ marginBottom: '10px' }}>
                    <Card.Body>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '10px' }}>
                                <LetteredAvatar
                                    name={contact.name}
                                    shape="circle"
                                    bgColor="#007bff"
                                    fgColor="#fff"
                                    size={40}
                                />
                            </div>
                            <div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{contact.name}</div>
                                <div style={{ fontSize: '14px' }}>
                                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default ContactList;

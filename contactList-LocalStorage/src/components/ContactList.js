import React from 'react';
import { Card } from 'react-bootstrap';
import LetteredAvatar from 'react-lettered-avatar';
import { BsXCircleFill } from 'react-icons/bs';
import '../assets/css/ContactList.css';

const ContactList = ({ contacts, dispatch }) => {
    const handleDeleteContact = (contact) => {
        const confirmed = window.confirm(`Delete the contact (${contact.name}, ${contact.email})?`);
        if (confirmed) {
            dispatch({ type: 'DELETE_CONTACT', payload: contact });
        }
    };

    return (
        <>
            {contacts.map((contact) => (
                <Card key={contact.email} className="card-contact">
                    <Card.Body>
                        <div className="contact-container">
                            <div className="contact-avatar">
                                <LetteredAvatar
                                    name={contact.name}
                                    shape="circle"
                                    bgColor="rgb(0, 123, 255)"
                                    fgColor="#fff"
                                    size={40}
                                />
                            </div>
                            <div>
                                <div className="contact-name">{contact.name}</div>
                                <div className="contact-email">
                                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                </div>
                            </div>
                            <div className="deleteIcon">
                                <BsXCircleFill onClick={() => handleDeleteContact(contact)} />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default ContactList;

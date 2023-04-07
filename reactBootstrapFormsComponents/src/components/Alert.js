import React from 'react';
import { Alert, Badge } from 'react-bootstrap';
import { BsFillBellFill } from 'react-icons/bs';

function CustomAlert(props) {
    return (
        <Alert variant="warning" style={{margin: '100px auto 30px', width: '1000px'}}>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <BsFillBellFill size={24} className="me-2" />
                    {props.message}
                    <Badge variant="info" className="ms-2">New</Badge>
                </div>
            </div>
        </Alert>
    );
}

export default CustomAlert;

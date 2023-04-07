import React from 'react';
import { Button } from 'react-bootstrap';

function LightSwitch(props) {
    return (
        <div className="light-switch">
            <Button onClick={props.onClick}>
                {props.isOn ? 'Night' : 'Day'}
            </Button>
        </div>
    );
}

export default LightSwitch;

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClickCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <Button variant="primary" onClick={handleClick}>Click Me</Button>
            <p className="mt-3 font-weight-bold fs-3">Total No. Of Clicks: {count}</p>
        </div>
    );
}

export default ClickCounter;

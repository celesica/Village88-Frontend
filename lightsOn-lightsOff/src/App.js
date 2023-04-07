import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiSun, BiMoon } from 'react-icons/bi';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css';

const App = () => {
    const [mode, setMode] = useState('day');

    const handleModeChange = () => {
        const newMode = mode === 'day' ? 'night' : 'day';
        console.log('Mode changed to', newMode);
        setMode(newMode);
    };

    return (
        <div className="app-container">
            <div className="toggle-container">
                <Button variant="outline-light" onClick={handleModeChange} className={`toggle-button ${mode}`}>
                    <div className="toggle-button-icon">
                        {mode === 'day' ? <BiSun /> : <BiMoon />}
                    </div>
                </Button>
            </div>
            <BackgroundVideo mode={mode} />
        </div>
    );
};

export default App;

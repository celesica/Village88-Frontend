import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        const storedTime = localStorage.getItem('time');
        const currentTime = getTime();
        this.state = {
            time: storedTime && Math.abs(currentTime - storedTime) <= 1000 ? storedTime : currentTime
        };
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    }

    handleBeforeUnload = () => {
        localStorage.setItem('time', this.state.time);
    }

    render() {
        const currentTime = getTime();
        const storedTime = localStorage.getItem('time');
        const updateTime = storedTime && Math.abs(currentTime - storedTime) <= 1000;
        const timeToDisplay = updateTime ? currentTime : storedTime || currentTime;

        return (
            <div>
                <h1>Hello, world!</h1>
                <p>It is {timeToDisplay}.</p>
            </div>
        );
    }
}

root.render(<App />);
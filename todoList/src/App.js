import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Board from './components/Board/Board';
import { TaskContextProvider } from './context/TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <TaskContextProvider>
            <div className="App">
                <AppHeader />
                <Board />
            </div>
        </TaskContextProvider>
    );
};

export default App;

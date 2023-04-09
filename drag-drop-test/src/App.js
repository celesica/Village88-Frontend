import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppHeader from './components/AppHeader/AppHeader';
import Board from './components/Board/Board';
import { TaskContextProvider } from './context/TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
      <TaskContextProvider>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
            <AppHeader />
            <Board />
          </div>
        </DndProvider>
      </TaskContextProvider>
  );
};

export default App;

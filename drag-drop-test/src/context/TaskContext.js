// TaskContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import taskReducer from '../reducer/taskReducer';
import useLocalStorage from '../components/hooks/useLocalStorage';

const TaskContext = createContext();

const initialState = [];

const TaskContextProvider = ({ children }) => {
    const [storedTasks, setStoredTasks] = useLocalStorage('tasks', initialState);
    const [state, dispatch] = useReducer(taskReducer, storedTasks);

    useEffect(() => {
        setStoredTasks(state);
    }, [state, setStoredTasks]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContextProvider, TaskContext };

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'UPDATE_TASK':
            return state.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.payload);
        case 'SET_TASKS':
            return action.payload;
        default:
            return state;
    }
};

export default taskReducer;

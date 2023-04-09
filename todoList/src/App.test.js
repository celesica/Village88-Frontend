import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import App from './App';
import { TaskContextProvider } from './context/TaskContext';
import Card from './components/Card/Card';
import { act } from 'react-dom/test-utils';


describe('<App/> Component', () => {
    it('renders the Tasks Board title', () => {
        render(
            <TaskContextProvider>
                <App />
            </TaskContextProvider>
        );
        const titleElement = screen.getByText(/Tasks Board/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('opens the task modal when clicking the Create Task button', () => {
        render(
            <TaskContextProvider>
                <App />
            </TaskContextProvider>
        );
        const createTaskButton = screen.getByText(/Create Task/i);
        userEvent.click(createTaskButton);
        const modalTitle = screen.getByText(/Create Task/i);
        expect(modalTitle).toBeInTheDocument();
    });

    it('closes the task modal when clicking the Cancel button', () => {
        render(
            <TaskContextProvider>
                <App />
            </TaskContextProvider>
        );
        const createTaskButton = screen.getByText(/Create Task/i);
        userEvent.click(createTaskButton);
        const cancelButton = screen.getByText(/Cancel/i);
        userEvent.click(cancelButton);
        expect(screen.queryByText(/Create Task/i)).toBeInTheDocument();
        expect(screen.queryByText(/Edit Task/i)).not.toBeInTheDocument();
    });

    it('successfully creates a task', async () => {
        // Render the app
        render(
            <DragDropContext onDragEnd={() => {}}>
                <TaskContextProvider>
                    <App />
                </TaskContextProvider>
            </DragDropContext>
        );

        // Wait for the "Create Task" button to appear
        await waitFor(() => screen.getByText(/Create Task/i));

        // Click the "Create Task" button to open the modal
        userEvent.click(screen.getByText(/Create Task/i));

        // Wait for the modal to appear
        await waitFor(() => screen.getByRole('dialog'));

        // Fill out the task creation form
        userEvent.selectOptions(screen.getByLabelText(/Project Name/i), 'God of War');
        userEvent.selectOptions(screen.getByLabelText(/Task Category/i), 'Game Design');
        userEvent.selectOptions(screen.getByLabelText(/Task Status/i), 'Pending');
        userEvent.type(screen.getByLabelText(/Task Start Date/i), '2023-05-01');
        userEvent.type(screen.getByLabelText(/Task End Date/i), '2023-05-15');
        userEvent.selectOptions(screen.getByLabelText(/Task Priority/i), 'High');
        userEvent.type(screen.getByLabelText(/Description/i), 'Task description');

        // Click the "Create" button to submit the form
        await act(async () => {
            userEvent.click(screen.getByText(/Add/i));
            // Wait for the task card to appear on the board
            await waitFor(() => screen.queryAllByText(/Task description/i));
        });

        // Select the first element with the text "Task description"
        const taskCard = screen.getAllByText(/Task description/i)[0];

        // Check that the task card is in the "Pending" column
        expect(taskCard).toBeInTheDocument();
    });

    it('successfully drags a task card from one column to another', async () => {
        // Create mock tasks and columns
        const tasks = [
            {
                id: 'task-1',
                project: 'God of War',
                category: 'Game Design',
                status: 'Pending',
                startDate: '2023-05-01',
                endDate: '2023-05-15',
                priority: 'High',
                description: 'Task 1',
            },
            {
                id: 'task-2',
                project: 'God of War',
                category: 'Game Design',
                status: 'Ongoing',
                startDate: '2023-05-01',
                endDate: '2023-05-15',
                priority: 'High',
                description: 'Task 2',
            },
        ];

        const columns = {
            'column-1': {
                id: 'column-1',
                title: 'Pending',
                taskIds: ['task-1'],
            },
            'column-2': {
                id: 'column-2',
                title: 'Ongoing',
                taskIds: ['task-2'],
            },
        };

        // Render the app with the mock tasks and columns
        render(
            <DragDropContext onDragEnd={() => {}}>
                <TaskContextProvider initialTasks={tasks} initialColumns={columns}>
                    {Object.entries(columns).map(([columnId, column]) => (
                        <Droppable key={columnId} droppableId={columnId}>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    data-rbd-droppable-id={columnId}
                                    className="column"
                                >
                                    <h2>{column.title}</h2>
                                    {column.taskIds.map((taskId, index) => {
                                        const task = tasks.find((task) => task.id === taskId);
                                        return (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided) => (
                                                    <div
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        data-rbd-draggable-id={task.id}
                                                        data-testid={`task-card-${task.id}`}
                                                        className="task-card"
                                                    >
                                                        <Card task={task} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </TaskContextProvider>
            </DragDropContext>
        );

        // Wait for the task cards to appear on the screen
        await waitFor(() => screen.queryAllByTestId(/task-card-/i));

        // Get the task cards and their starting positions
        const taskCards = screen.getAllByRole('button');
        const startPosition = { droppableId: 'Pending', index: 0 };
        const endPosition = { droppableId: 'Ongoing', index: 0 };

        // Find the columns with the matching text
        const startColumn = screen.getByText(startPosition.droppableId);
        const endColumn = screen.getByText(endPosition.droppableId);

        // Simulate a drag and drop interaction
        await act(async () => {
            fireEvent.dragStart(taskCards[0], {
                dataTransfer: {
                    setData: jest.fn(),
                },
            });
            fireEvent.dragEnter(endColumn, { clientY: 0 });

            fireEvent.drop(taskCards[0]);

            fireEvent.dragEnd(taskCards[0]);
        });

        // Wait for the task cards to move to their new positions
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Check that the task cards are in their new positions
        expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Ongoing/i)).toBeInTheDocument();
        expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Pending/i)).toBeInTheDocument();
    });

});

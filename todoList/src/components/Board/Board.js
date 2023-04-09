import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from '../Card/Card';
import { TaskContext } from '../../context/TaskContext';
import './Board.css';

const Board = () => {
    const { state, dispatch } = useContext(TaskContext);
    const [columns] = useState([
        { title: 'Pending', status: 'Pending' },
        { title: 'Ongoing', status: 'Ongoing' },
        { title: 'Completed', status: 'Completed' },
    ]);

    const moveTask = (sourceId, destinationId, sourceIndex, destinationIndex) => {
        const sourceTaskIndex = state.findIndex((task) => task.id === sourceId);
        const destinationColumnTasks = state.filter((task) => task.status === destinationId);

        const updatedState = Array.from(state);
        const draggedTask = updatedState[sourceTaskIndex];

        // Update the dragged task's status.
        draggedTask.status = destinationId;

        // Remove the dragged task from its original position.
        updatedState.splice(sourceTaskIndex, 1);

        // Calculate the destination task index.
        const destinationTaskIndex =
            destinationColumnTasks.length === 0
                ? updatedState.length
                : state.indexOf(destinationColumnTasks[destinationIndex]);

        // Insert the updated task into the new position.
        updatedState.splice(destinationTaskIndex, 0, draggedTask);

        dispatch({ type: 'SET_TASKS', payload: updatedState });
    };


    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const sourceTasks = state.filter((task) => task.status === source.droppableId);
        const sourceTask = sourceTasks[source.index];

        if (!sourceTask) {
            return;
        }

        moveTask(
            sourceTask.id,
            destination.droppableId,
            source.index,
            destination.index
        );
    };


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container fluid className="board-container">
                <Row>
                    {columns.map((column, columnIndex) => (
                        <Col key={columnIndex} className="board-column">
                            <h4>{column.title}</h4>
                            <Droppable droppableId={column.status}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className="board-column-content"
                                    >
                                        {state
                                            .filter((task) => task.status === column.status)
                                            .map((task, index) => (
                                                <Card
                                                    key={task.id}
                                                    task={task}
                                                    index={index}
                                                    status={column.status}
                                                />
                                            ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Col>
                    ))}
                </Row>
            </Container>
        </DragDropContext>
    );
};

export default Board;

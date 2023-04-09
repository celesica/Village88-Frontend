import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from '../Card/Card';
import { TaskContext } from '../../context/TaskContext';
import './Board.css';

const Board = () => {
    const { state, dispatch } = useContext(TaskContext);
    const [columns, setColumns] = useState([
        { title: 'Pending', status: 'Pending', tasks: [] },
        { title: 'Ongoing', status: 'Ongoing', tasks: [] },
        { title: 'Completed', status: 'Completed', tasks: [] }
    ]);

    const updateColumnTasks = (status, tasks) => {
        setColumns(
            columns.map(column => (column.status === status ? { ...column, tasks } : column))
        );
    };

    const moveTask = (dragIndex, hoverIndex, sourceStatus, targetStatus) => {
        const sourceColumn = columns.find(column => column.status === sourceStatus);
        const targetColumn = columns.find(column => column.status === targetStatus);

        const dragTask = sourceColumn.tasks[dragIndex];
        const updatedSourceTasks = [...sourceColumn.tasks];
        updatedSourceTasks.splice(dragIndex, 1);
        const updatedTargetTasks = [...targetColumn.tasks];
        updatedTargetTasks.splice(hoverIndex, 0, dragTask);

        updateColumnTasks(sourceStatus, updatedSourceTasks);
        updateColumnTasks(targetStatus, updatedTargetTasks);

        dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id: dragTask.id, status: targetStatus } });
    };

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: (item, monitor) => {
            moveTask(item.index, 0, item.status, columns[0].status);
            item.index = 0;
            item.status = columns[0].status;
            dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id: item.id, status: columns[0].status } });
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }), [columns]);

    return (
        <DndProvider backend={HTML5Backend}>
            <Container fluid className="board-container">
                <Row>
                    {columns.map((column, columnIndex) => (
                        <Col key={columnIndex} className="board-column">
                            <h4>{column.title}</h4>
                            <div ref={drop} style={{ backgroundColor: isOver ? '#f0f0f0' : 'white' }}>
                                {state
                                    .filter(task => task.status === column.status)
                                    .map((task, index) => (
                                        <Card
                                            key={task.id}
                                            task={task}
                                            index={index}
                                            status={column.status}
                                            moveTask={moveTask}
                                        />
                                    ))}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </DndProvider>
    );
};

export default Board;

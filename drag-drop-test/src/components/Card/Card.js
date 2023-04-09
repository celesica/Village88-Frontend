import React, { useContext } from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import { useDrag, useDrop } from 'react-dnd';
import { TaskContext } from '../../context/TaskContext';
import './Card.css';

const Card = ({ task, index, status, moveTask }) => {
    const { dispatch } = useContext(TaskContext);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CARD',
        item: { id: task.id, index, status },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [task, index, status]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: (item, monitor) => {
            moveTask(item.index, index, item.status, status);
            item.index = index;
            item.status = status;
            dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id: item.id, status } });
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }), [status]);

    const getBorderColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'red';
            case 'Ongoing':
                return 'blue';
            case 'Completed':
                return 'green';
            default:
                return 'black';
        }
    };

    return (
        <BootstrapCard
            ref={(node) => drag(drop(node))}
            className="task-card"
            style={{
                opacity: isDragging ? 0.5 : 1,
                borderColor: getBorderColor(status),
                backgroundColor: isOver ? '#f0f0f0' : 'white',
            }}
        >
            <BootstrapCard.Body>
                <BootstrapCard.Title>{task.projectName}</BootstrapCard.Title>
                <BootstrapCard.Text>{task.description}</BootstrapCard.Text>
                <Button onClick={() => dispatch({ type: 'UPDATE_TASK', payload: task })}>Edit</Button>
                <Button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })} variant="danger">Delete</Button>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
};

export default Card;

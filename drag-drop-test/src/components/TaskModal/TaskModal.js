import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { TaskContext } from '../../context/TaskContext';
import './TaskModal.css';

const TaskModal = ({ show, handleClose, editTask }) => {
    const { dispatch } = useContext(TaskContext);

    const [task, setTask] = useState({
        id: '',
        projectName: '',
        taskCategory: '',
        status: '',
        startDate: '',
        endDate: '',
        priority: '',
        description: '',
    });

    useEffect(() => {
        if (editTask) {
            setTask(editTask);
        }
    }, [editTask]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!editTask) {
            const newTask = { ...task, id: Date.now() };
            dispatch({ type: 'ADD_TASK', payload: newTask });
        } else {
            dispatch({ type: 'UPDATE_TASK', payload: task });
        }

        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editTask ? 'Edit Task' : 'Create Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control
                            as="select"
                            name="projectName"
                            value={task.projectName}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a project</option>
                            <option value="God of War">God of War</option>
                            <option value="Death Stranding">Death Stranding</option>
                            <option value="Elden Ring">Elden Ring</option>
                            <option value="The Last of Us II">The Last of Us II</option>
                            <option value="Cyberpunk">Cyberpunk</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Task Category</Form.Label>
                        <Form.Control
                            as="select"
                            name="taskCategory"
                            value={task.taskCategory}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Game Design">Game Design</option>
                            <option value="Art and Visual Design">Art and Visual Design</option>
                            <option value="Development">Development</option>
                            <option value="Quality Assurance/Testing">Quality Assurance/Testing</option>
                            <option value="Audio and Music">Audio and Music</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Localization">Localization</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Task Status</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            value={task.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a status</option>
                            <option value="Pending">Pending</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Completed">Completed</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Task Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            name        ="startDate"
                            value={task.startDate}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Task End Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="endDate"
                            value={task.endDate}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Task Priority</Form.Label>
                        <Form.Control
                            as="select"
                            name="priority"
                            value={task.priority}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a priority</option>
                            <option value="Highest">Highest</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            <option value="Lowest">Lowest</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description (optional)</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            value={task.description || ''}
                            onChange={handleChange}
                            placeholder="Lorem ipsum dolor sit amet"
                        />
                    </Form.Group>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        {editTask ? 'Update' : 'Create'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default TaskModal;

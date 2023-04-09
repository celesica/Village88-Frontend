import React, { useState } from 'react';
import { Card as BootstrapCard, Button, Modal, Row, Col, Dropdown } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';
import { BsFlagFill, BsFillGearFill } from 'react-icons/bs';
import { TaskContext } from '../../context/TaskContext';
import TaskModal from '../TaskModal/TaskModal';
import './Card.css';

const Card = ({ task, index }) => {
    const { dispatch } = React.useContext(TaskContext);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const getBorderColor = (status) => {
        switch (status) {
            case 'Pending':
                return '#FF83A9';
            case 'Ongoing':
                return '#73C2FB';
            case 'Completed':
                return '#98EAB6';
            default:
                return 'black';
        }
    };

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TASK', payload: task.id });
        setShowDeleteModal(false);
    };

    const handleEdit = () => {
        setShowEditModal(true);
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <Draggable draggableId={String(task.id)} index={index}>
                {(provided) => (
                    <BootstrapCard
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task-card"
                        style={{
                            ...provided.draggableProps.style,
                            borderBottomColor: getBorderColor(task.status),
                        }}
                    >
                        <BootstrapCard.Body>
                            <Row>
                                <Col xs={6} className="d-flex align-items-center">
                                    <span className={`task-category ${task.taskCategory ? task.taskCategory.toLowerCase() : ''}`}>
                                        {task.taskCategory}
                                    </span>
                                </Col>
                                <Col xs={6} className="d-flex justify-content-end align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <BsFillGearFill className="settings-icon" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
                                            <Dropdown.Item onClick={() => setShowDeleteModal(true)}>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <BootstrapCard.Text>{task.description}</BootstrapCard.Text>
                            <Row>
                                <Col xs={6} className="d-flex align-items-center flag">
                                    <BsFlagFill />
                                    <span className="end-date">{formatDate(task.endDate)}</span>
                                    <span className={`task-priority ${task.priority.toLowerCase()}`}>
                                        {task.priority}
                                    </span>
                                </Col>
                                <Col xs={6} className="d-flex justify-content-end">
                                    <span className="project-name">{task.projectName}</span>
                                </Col>
                            </Row>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                )}
            </Draggable>

            <TaskModal
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                editTask={task}
            />

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Card;

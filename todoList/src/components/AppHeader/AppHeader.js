import React, { useState } from 'react';
import { Navbar, Button, Row, Col } from 'react-bootstrap';
import TaskModal from '../TaskModal/TaskModal';
import { FaPlusCircle } from 'react-icons/fa';
import './AppHeader.css';

const AppHeader = () => {
    const [showTaskModal, setShowTaskModal] = useState(false);

    const handleClose = () => setShowTaskModal(false);
    const handleShow = () => setShowTaskModal(true);

    return (
        <>
            <Navbar className="app-header">
                <Row className="w-100">
                    <Col xs={6}>
                        <Navbar.Brand>Tasks Board</Navbar.Brand>
                    </Col>
                    <Col xs={6} className="d-flex justify-content-end">
                        <Button className="create-task-button" onClick={handleShow}>
                            <span className="add-icon"><FaPlusCircle /></span>
                            Create Task
                        </Button>
                    </Col>
                </Row>
            </Navbar>
            <TaskModal show={showTaskModal} handleClose={handleClose} />
        </>
    );
};

export default AppHeader;

import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import TaskModal from '../TaskModal/TaskModal';
import './AppHeader.css';

const AppHeader = () => {
    const [showTaskModal, setShowTaskModal] = useState(false);

    const handleClose = () => setShowTaskModal(false);
    const handleShow = () => setShowTaskModal(true);

    return (
        <>
            <Navbar bg="dark" variant="dark" className="app-header">
                <Navbar.Brand>Kanban Board</Navbar.Brand>
                <div className="ml-auto">
                    <Button className="create-task-button" variant="outline-light" onClick={handleShow}>
                        Create Task
                    </Button>
                </div>
            </Navbar>
            <TaskModal show={showTaskModal} handleClose={handleClose} />
        </>
    );
};

export default AppHeader;

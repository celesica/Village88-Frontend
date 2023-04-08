import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaImages } from 'react-icons/fa';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Gallery from './components/Gallery';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <div className="d-flex flex-row">
                <Navbar expand="lg" className="flex-column">
                    <Navbar.Brand as={Link} to="/" className="mb-auto order-0">
                        <span className="me-2">My Personal Website</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-1" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mt-2 flex-column">
                            <Nav.Link as={Link} to="/" className="mb-auto d-flex align-items-center">
                                <FaHome className="me-2" />
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/aboutMe" className="mb-auto d-flex align-items-center">
                                <FaUser className="me-2" />
                                About Me
                            </Nav.Link>
                            <Nav.Link as={Link} to="/gallery" className="mb-auto d-flex align-items-center">
                                <FaImages className="me-2" />
                                Gallery
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutMe" element={<AboutMe />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

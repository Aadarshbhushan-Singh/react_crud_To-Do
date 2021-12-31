import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">ToDo</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link> 
                        </Nav>
                        <Link className="btn btn-outline-light" to="/tasks/add">Add Task</Link>{' '}
                    </Container>
                </Navbar>

                
        </div>
    )
}

export default NavBar;



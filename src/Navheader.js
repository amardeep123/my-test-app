import {Button, Form, Nav, Navbar} from "react-bootstrap";
import logo from "./logo.svg";
import {LinkContainer} from "react-router-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

function Navheader() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        alt="Brand Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className=""
                    />
                    My Test App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-info">
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Navheader;
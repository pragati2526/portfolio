import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/fin.svg";
import Image from "react-bootstrap/Image";
import './Navbar.css';
import {Link} from 'react-scroll';

function Navigbar()
{
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Image src={logo} style={{width:'120px'}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link className="l1"> <Link activeClass="active" to="home" spy={true} smooth={true}>HOME </Link></Nav.Link>
                            <Nav.Link className="l1"> <Link to='about' spy={true} smooth={true}>ABOUT</Link></Nav.Link>
                            <Nav.Link className="l1"> <Link to='projects'>PROJECTS</Link></Nav.Link>
                            <Nav.Link className="l1"> <Link to='skills'>SKILLS</Link></Nav.Link>
                            <Nav.Link className="l1"> <Link to='contact'>CONTACT ME</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigbar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/joanne-lee-logo.png";

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg" fixed="top" className={styles.NavBar}>
          <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img alt="portfolio logo" height="50" src={logo} />
            </Navbar.Brand>
          </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`ml-auto text-left`}>
                <NavLink className={({ isActive }) =>
                isActive ? styles.Active : styles.LinkFont
              } to="/"><i className="fa-solid fa-house"></i> Home</NavLink>
              <span className="ml-4">
                <NavLink className={({ isActive }) =>
                isActive ? styles.Active : styles.LinkFont
              } to="/contact"><i className="fa-solid fa-envelope"></i> Contact</NavLink>
              </span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavBar
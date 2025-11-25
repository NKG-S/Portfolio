import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork, CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setIsExpanded(false);

  return (
    <Navbar
      expanded={isExpanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="brand"
            className="img-fluid navbar-logo"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          aria-label="Toggle navigation"
          onClick={() => setIsExpanded(prev => !prev)}
          className="border-0 p-0"
        >
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
        </Navbar.Toggle>

        {/* Links */}
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="ms-auto align-items-center">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleClose}
                className="d-flex align-items-center nav-link-item"
              >
                <AiOutlineHome className="me-1" />
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={handleClose}
                className="d-flex align-items-center nav-link-item"
              >
                <AiOutlineUser className="me-1" />
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={handleClose}
                className="d-flex align-items-center nav-link-item"
              >
                <AiOutlineFundProjectionScreen className="me-1" />
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={handleClose}
                className="d-flex align-items-center nav-link-item"
              >
                <CgFileDocument className="me-1" />
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>

            {/* GitHub Button */}
            <Nav.Item className="fork-btn ms-md-2 mt-2 mt-md-0">
              <Button
                href="https://github.com/NKG-S/Portfolio"
                target="_blank"
                className="fork-btn-inner d-flex align-items-center justify-content-center"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                <AiFillStar style={{ fontSize: "1.1em", marginLeft: "4px" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

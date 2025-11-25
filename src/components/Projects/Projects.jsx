import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import Particle from "../Particle.jsx";

// Importing images - please ensure these files exist in your assets folder
import agriInfo from "../../Assets/Projects/agriInfo.jpg";
import icom from "../../Assets/Projects/icom.png";
import eduNews from "../../Assets/Projects/eduNews.jpeg";
import whatsappStatus from "../../Assets/Projects/whatsappStatus.jpeg";
import librarySystem from "../../Assets/Projects/librarySystem.png";
import firebaseAuth from "../../Assets/Projects/firebaseAuth.jpg";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* 2. Agri-Info Platform */}
          <Col md={4} xs={12} className="project-card">
            <ProjectCard
              imgPath={agriInfo}
              isBlog={false}
              title="Agri-Info Platform"
              description="A comprehensive agricultural platform designed to assist farmers. It features a crop calendar, AI chatbot for instant support, and intelligent disease detection from images. Built using React.js for the frontend and Laravel for the backend."
              ghLink="https://github.com/sahansara/Agricultural-Information-Platform-with-Crop-Calendar.git"
            />
          </Col>

          {/* 3. i-com Premium E-Commerce */}
          <Col md={4} xs={12} className="project-card">
            <ProjectCard
              imgPath={icom}
              isBlog={false}
              title="i-com Premium E-Commerce"
              description="A full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). Features include secure JWT authentication, real-time inventory management, admin dashboard for product control, and Supabase cloud storage for images."
              ghLink="https://github.com/NKG-S/Commercial-website"
            />
          </Col>

          {/* 4. EduNews App */}
          <Col md={4} xs={12} className="project-card">
            <ProjectCard
              imgPath={eduNews}
              isBlog={false}
              title="EduNews App"
              description="A robust Android news application developed for the University of Colombo. It facilitates creating, editing, and viewing news articles with a category-based organization. Powered by Google Firebase for real-time data storage and secure user authentication."
              ghLink="https://github.com/NKG-S/NEWS-Application"
            />
          </Col>

          {/* 5. WhatsApp Status Manager */}
          <Col md={4} xs={12} className="project-card">
            <ProjectCard
              imgPath={whatsappStatus}
              isBlog={false}
              title="WhatsApp Status Manager"
              description="An Android application that allows users to seamlessly save, share, and manage WhatsApp status media. It features a built-in media viewer, batch deletion capabilities, and privacy-centric design with optimized storage management."
              ghLink="https://github.com/NKG-S/Save-Status"
            />
          </Col>

          {/* 6. Library Management System */}
          <Col md={4} xs={12} className="project-card">
            <ProjectCard
              imgPath={librarySystem}
              isBlog={false}
              title="Library Management System"
              description="A web-based system for managing library operations. Includes features for user login and registration, book borrowing tracking, membership management, and an admin panel for maintaining book inventory. Built with PHP and MySQL."
              ghLink="https://github.com/your-username/library-management-system.git"
            />
          </Col>

          {/* 7. Firebase Auth System */}
          <Col md={4} xs={12} className="project-card">
            <ProjectCard
              imgPath={firebaseAuth}
              isBlog={false}
              title="Firebase Auth System"
              description="An Android application demonstrating a complete authentication flow. It handles user registration, login, password resets, and user profile management using Firebase Authentication and Cloud Firestore for secure data handling."
              ghLink="https://github.com/NKG-S/Basic-Login-and-registration-application.git"
            />
          </Col>
          
          {/* 1. Personal Portfolio */}
          <Col md={4} xs={12} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="A modern and responsive personal portfolio website built with React and Vite. Features smooth animations, project showcase, skills display, certifications, and resume download functionality. Designed with a clean UI/UX for optimal user experience across all devices."
              ghLink="https://github.com/NKG-S/Portfolio"
              demoLink="https://nkg-s.github.io/Portfolio"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

// Project List: 
// 1. Agri-Info Platform
// 2. i-com Premium E-Commerce
// 3. EduNews App
// 4. WhatsApp Status Manager
// 5. Library Management System
// 6. Firebase Auth System
// 7. Personal Portfolio Website
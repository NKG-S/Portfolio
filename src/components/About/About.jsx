import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle.jsx";
import Techstack from "./Techstack.jsx";
import Aboutcard from "./AboutCard.jsx";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack.jsx";
import BackendStack from "./BackendStack.jsx";
import CloudStack from "./CloudStack.jsx";
import DatabaseStack from "./DatabaseStack.jsx";
import FrontendStack from "./FrontendStack.jsx";
import OSStack from "./OSStack.jsx";
import Certificate from "../Certificates/Certificate.jsx";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* ABOUT ME */}
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          {/* SKILLS & TOOLS */}
          <section className="skills-section">
            <h1 className="project-heading">
              <strong className="purple">Skills</strong> & Tech
            </h1>
            <p className="skills-subtitle">
              A quick look at the technologies, tools, and platforms I work with.
            </p>

            {/* General tech icons row (your original Techstack) */}
            <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
              <Col md={12}>
                <Techstack />
              </Col>
            </Row>

            {/* Topic-based grouped stacks */}
            <Row style={{ justifyContent: "center", rowGap: "30px" }}>
              <Col md={4} className="skill-column">
                <h2 className="skill-heading">Frontend</h2>
                <FrontendStack />
              </Col>

              <Col md={4} className="skill-column">
                <h2 className="skill-heading">Backend & APIs</h2>
                <BackendStack />
              </Col>
              
              <Col md={4} className="skill-column">
                <h2 className="skill-heading">Cloud & DevOps</h2>
                <CloudStack />
              </Col>

            </Row>

            <Row
              style={{
                justifyContent: "center",
                marginTop: "40px",
                rowGap: "30px",
              }}
            >
              <Col md={4} className="skill-column">
                <h2 className="skill-heading">Databases</h2>
                <DatabaseStack />
              </Col>

              <Col md={4} className="skill-column">
                <h2 className="skill-heading">Tools</h2>
                <Toolstack />
              </Col>

              <Col md={4} className="skill-column">
                <h2 className="skill-heading">Operating Systems</h2>
                <OSStack />
              </Col>
            </Row>
          </section>
          <section className="certificates-section" style={{ marginTop: "50px" }}>
            <Certificate />
          </section>
        </Container>
      </Container>
    </>
  );
}

export default About;

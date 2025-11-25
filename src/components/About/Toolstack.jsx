import React from "react";
import { Col, Row } from "react-bootstrap";

// Importing existing Assets
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import GitHub from "../../Assets/TechIcons/Github.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* --- Git --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* --- GitHub --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={GitHub} alt="GitHub" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      {/* --- VS Code --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      {/* --- IntelliJ IDEA --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="IntelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>

      {/* --- Postman --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

    </Row>
  );
}

export default Toolstack;




// Git

// GitHub

// VS Code

// IntelliJ IDEA

// Postman
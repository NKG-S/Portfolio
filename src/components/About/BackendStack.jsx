// src/components/About/BackendStack.js
// Node.js
// Express.js
// Laravel
// REST APIs

import React from "react";
import { Col, Row } from "react-bootstrap";

// Importing assets as requested (assuming these files exist in your folder)
import Node from "../../Assets/TechIcons/Node.svg";
import Express from "../../Assets/TechIcons/Express.svg";
import Laravel from "../../Assets/TechIcons/Laravel.svg";

function BackendStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* --- Node.js --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="tech-icon-images" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      {/* --- Express.js --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Express} alt="Express.js" className="tech-icon-images" />
        <div className="tech-icons-text">Express.js</div>
      </Col>

      {/* --- Laravel --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Laravel} alt="Laravel" className="tech-icon-images" />
        <div className="tech-icons-text">Laravel</div>
      </Col>

    </Row>
  );
}

export default BackendStack;
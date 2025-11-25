// src/components/About/FrontendStack.js

import { Col, Row } from "react-bootstrap";
import HTML from "../../Assets/TechIcons/HTML.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg"; // Renamed to avoid conflict

function FrontendStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* --- HTML --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" className="tech-icon-images" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      {/* --- CSS --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" className="tech-icon-images" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      {/* --- Bootstrap --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="Bootstrap" className="tech-icon-images" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      {/* --- Tailwind CSS --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" className="tech-icon-images" />
        <div className="tech-icons-text">Tailwind CSS</div>
        
      </Col>

      {/* --- Material UI --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="Material UI" className="tech-icon-images" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      {/* --- React.js --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" className="tech-icon-images" />
        <div className="tech-icons-text">React.js</div>
      </Col>

    </Row>
  );
}

export default FrontendStack;

// HTML

// CSS

// Bootstrap

// Tailwind CSS

// Material UI

// React.js
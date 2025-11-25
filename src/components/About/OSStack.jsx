// src/components/About/OSStack.js

import { Col, Row } from "react-bootstrap";
import Windows from "../../Assets/TechIcons/Windows.svg";
import Linux from "../../Assets/TechIcons/Linux.svg";

function OSStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* --- Windows --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>

      {/* --- Linux --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>

    </Row>
  );
}

export default OSStack;

// Windows

// Linux
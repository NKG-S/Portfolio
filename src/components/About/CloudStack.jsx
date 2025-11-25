// src/components/About/CloudStack.js

import { Col, Row } from "react-bootstrap";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Azure from "../../Assets/TechIcons/Azure.svg";
import Heroku from "../../Assets/TechIcons/Heroku.svg";
import Supabase from "../../Assets/TechIcons/Supabase.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";

function CloudStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* --- AWS --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      {/* --- Azure --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Azure} alt="Azure" className="tech-icon-images" />
        <div className="tech-icons-text">Azure</div>
      </Col>

      {/* --- Heroku --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Heroku} alt="Heroku" className="tech-icon-images" />
        <div className="tech-icons-text">Heroku</div>
      </Col>

      {/* --- Supabase --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Supabase} alt="Supabase" className="tech-icon-images" />
        <div className="tech-icons-text">Supabase</div>
      </Col>


      {/* --- Firebase --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" className="tech-icon-images" />
        <div className="tech-icons-text">Firebase</div>
      </Col>


    </Row>
  );
}

export default CloudStack;

// AWS

// Azure

// Heroku

// Supabase (optional here too)
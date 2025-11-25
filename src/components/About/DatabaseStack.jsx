// src/components/About/DatabaseStack.js

import React from "react";
import { Col, Row } from "react-bootstrap";

// Importing assets as requested (assuming these files exist in your folder)
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";

function DatabaseStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* --- MongoDB --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      {/* --- SQL / SQLite / PL SQL --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">SQL / SQLite</div>
      </Col>

    </Row>
  );
}

export default DatabaseStack;

// MongoDB

// SQLite / SQL

// Supabase
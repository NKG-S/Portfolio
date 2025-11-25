import React from "react";
import { Col, Row } from "react-bootstrap";

// Importing existing Assets (kept the ones that match your list)
import Cpp from "../../Assets/TechIcons/C++.svg"; // Renamed from C to Cpp for clarity
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import C from "../../Assets/TechIcons/C.svg"; // Added C icon
import PHP from "../../Assets/TechIcons/PHP.svg"; // Added PHP icon
import Dart from "../../Assets/TechIcons/Dart.svg"; // Added Dart icon
import Kotlin from "../../Assets/TechIcons/Kotlin.svg"; // Added Kotlin icon
import Bash from "../../Assets/TechIcons/Bash.svg"; // Added Bash icon
import Arduino from "../../Assets/TechIcons/Arduino.svg"; // Added Arduino icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* --- Java --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java"  className="tech-icon-images" />
        <div className="tech-icons-text">Java</div>
      </Col>

      {/* --- Python --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python"  height={25} width={25}/>
        <div className="tech-icons-text">Python</div>
      </Col>

      {/* --- C Language (Using React Icon) --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" className="tech-icon-images" />
        <div className="tech-icons-text">C</div>
      </Col>

      {/* --- C++ (Using your existing Asset) --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++"  className="tech-icon-images" />
        <div className="tech-icons-text">C++</div>
      </Col>

      {/* --- PHP --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={PHP} alt="PHP"   className="tech-icon-images" />
        <div className="tech-icons-text">PHP</div>
      </Col>

      {/* --- Dart --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Dart} alt="Dart"   className="tech-icon-images" />
        <div className="tech-icons-text">Dart</div>
      </Col>

      {/* --- Kotlin --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kotlin} alt="Kotlin"   className="tech-icon-images" />
        <div className="tech-icons-text">Kotlin</div>
      </Col>

      {/* --- Bash --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Bash} alt="Bash"   className="tech-icon-images" />
        <div className="tech-icons-text">Bash</div>
      </Col>

      {/* --- SQL --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL"  className="tech-icon-images" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* --- Arduino --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Arduino} alt="Arduino"  className="tech-icon-images" />
        <div className="tech-icons-text">Arduino</div>
      </Col>

    </Row>
  );
}

export default Techstack;


// Java

// Python

// C

// C++

// PHP

// Dart

// Kotlin

// Bash

// SQL

// Arduino
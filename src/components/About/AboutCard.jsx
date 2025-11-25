import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nethmin Kavindu</span>
            from <span className="purple"> Sri Lanka.</span>
            <br />
            I am currently an undergraduate pursuing a Bachelor of Information and Communication Technology at the{" "}
            <a 
              href="https://tech.cmb.ac.lk/" 
              target="_blank" 
              rel="noreferrer" 
              className="purple"
              style={{ textDecoration: "none" }}
            >
              Faculty of Technology, University of Colombo
            </a>.
            <br />
            <br />
            {/* Revised line */}
            I love creating new solutions and am always eager to explore new technologies.
            <br />
            Apart from coding, here are the specific fields I am passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Internet of Things (IoT) & Automation
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile App Development
            </li>
            <li className="about-activity">
              <ImPointRight /> DevOps & Cloud Architecture
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
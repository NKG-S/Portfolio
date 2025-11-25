import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer py-4">
      <Row className="align-items-center text-center">

        {/* Developer Credit */}
        <Col md={4} className="mb-3 mb-md-0 footer-copywright">
          <h3 className="footer-title">
            {" "}
            <span className="footer-highlight">Nethmin Kavindu</span>
          </h3>
        </Col>

        {/* Copyright */}
        <Col md={4} className="mb-3 mb-md-0 footer-copywright">
          <h3 className="footer-title">© {year} NKG-S</h3>
        </Col>

        {/* Social Icons */}
        <Col md={4} className="footer-body">
          <ul className="footer-icons d-flex justify-content-center gap-3">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/NKG-S"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-link"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nethmin-kavindu-386978349/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-link"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* WhatsApp */}
            <li className="social-icons">
              <a
                href="https://wa.me/94721663030"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-link"
              >
                <FaWhatsapp />
              </a>
            </li>

            {/* Email */}
            <li className="social-icons">
              <a
                href="mailto:nethminkavindu@gmail.com"
                className="footer-icon-link"
              >
                <AiFillMail />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

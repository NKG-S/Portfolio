import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../../Assets/PDF/Nethmin-Kavindu-Gimhan-Resume.pdf";
import "bootstrap/dist/css/bootstrap.min.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className="min-vh-100 py-5"
    >
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <h1 
              className="display-4 fw-bold text-white mb-3"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
            >
              My <span style={{ color: "#c770f0" }}>Resume</span>
            </h1>
            <p className="lead text-white-50">
              Feel free to download my resume
            </p>
          </Col>
        </Row>

        {/* Download Button */}
        <Row className="justify-content-center mb-5">
          <Col xs="auto">
            <Button
              href={resume}
              download="Nethmin-Kavindu-Gimhan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 px-4 py-3 fw-semibold rounded-pill shadow-lg"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
              }}
            >
              <AiOutlineDownload size={20} />
              <span>Download The Resume</span>
            </Button>
          </Col>
        </Row>

        {/* PDF Viewer */}
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <div 
              className="bg-white rounded-3 overflow-hidden shadow-lg"
              style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)" }}
            >
              <iframe
                src={resume}
                title="Resume"
                className="w-100 border-0"
                style={{ 
                  height: width < 768 ? "600px" : "800px",
                  display: "block"
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
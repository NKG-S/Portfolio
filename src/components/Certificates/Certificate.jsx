// src/components/Certificates/Certificate.jsx
import React, { useState } from "react";
import { Container, Row, Col, Nav, Badge } from "react-bootstrap";
import CertificateCard from "./CertificateCard";

// FIX: Correct relative paths. 
// ../../ takes you from 'Certificates' -> 'components' -> 'src'
import azureFundamentalsPdf from "../../Assets/PDF/azure-fundamentals.pdf";
import pythonPart2Pdf from "../../Assets/PDF/python-part2.pdf";
import pythonPart1Pdf from "../../Assets/PDF/python-part1.pdf";

function Certificate() {
  const [activeTab, setActiveTab] = useState("all");

  const certificates = [
    {
      id: 1,
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      issued: "Nov 2025",
      credentialId: "31D41AACAA8B74DF",
      credentialUrl: "#", // Add your actual credential URL
      skills: ["Microsoft Azure", "DevOps", "AZ-900"],
      description: "Demonstrated foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      category: "cloud",
      pdfUrl: azureFundamentalsPdf // Uses the imported file
    },
    {
      id: 2,
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
      issued: "Oct 2025",
      credentialUrl: "#",
      skills: ["AWS", "Cloud Computing", "Cloud Architecture"],
      description: "Successfully completed AWS Academy Cloud Foundations course, gaining comprehensive knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      category: "cloud"
      // No pdfUrl for this one
    },
    {
      id: 3,
      title: "Programming in Python - 2. Python Programming",
      issuer: "University of Moratuwa",
      issuerLogo: "https://uom.lk/assets/images/Uni_emblem.jpg",
      issued: "Aug 2025",
      credentialId: "CjVvwVVQwD",
      credentialUrl: "#",
      skills: ["Python (Programming Language)"],
      description: "Completed Python Programming – Part 2, covering advanced Python concepts, structured problem-solving, debugging, and practical applications.",
      category: "programming",
      pdfUrl: pythonPart2Pdf // Uses the imported file
    },
    {
      id: 4,
      title: "Introduction to Programming Using Python",
      issuer: "University of Moratuwa",
      issuerLogo: "https://uom.lk/assets/images/Uni_emblem.jpg",
      issued: "May 2022",
      credentialId: "cnfFfklEXb",
      credentialUrl: "#",
      skills: ["Python (Programming Language)"],
      description: "Successfully completed Python for Beginners – Part 1, strengthening foundation in Python programming and problem-solving.",
      category: "programming",
      pdfUrl: pythonPart1Pdf // Uses the imported file
    }
  ];

  const filteredCertificates = activeTab === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === activeTab);

  const tabs = [
    { key: "all", label: "All Certificates", count: certificates.length },
    { key: "cloud", label: "Cloud & DevOps", count: certificates.filter(c => c.category === "cloud").length },
    { key: "programming", label: "Programming", count: certificates.filter(c => c.category === "programming").length }
  ];

  return (
    <Container fluid className="certificate-section">
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white", paddingBottom: "30px" }}>
          Professional certifications and training achievements
        </p>

        {/* Tab Navigation */}
        <Nav 
          variant="pills" 
          className="justify-content-center mb-5"
          style={{ gap: "10px" }}
        >
          {tabs.map(tab => (
            <Nav.Item key={tab.key}>
              <Nav.Link
                active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  backgroundColor: activeTab === tab.key ? "#623686" : "transparent",
                  color: activeTab === tab.key ? "white" : "#a391b5",
                  border: "1px solid #623686",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                {tab.label} <Badge bg="light" text="dark">{tab.count}</Badge>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Certificates Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {filteredCertificates.map((cert) => (
            <Col 
              key={cert.id} 
              md={6} 
              lg={6} 
              className="certificate-card-col" 
              style={{ marginBottom: "30px" }}
            >
              <CertificateCard certificate={cert} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
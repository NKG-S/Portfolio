// src/components/Certificates/CertificateCard.jsx
import React from "react";
import { Card, Badge } from "react-bootstrap";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function CertificateCard({ certificate }) {
  const {
    title,
    issuer,
    issuerLogo,
    issued,
    credentialId,
    credentialUrl,
    skills,
    description,
    pdfUrl
  } = certificate;

  return (
    <Card 
      className="certificate-card"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(200, 137, 230, 0.4)",
        borderRadius: "15px",
        padding: "25px",
        height: "100%",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(200, 137, 230, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Card.Body style={{ padding: 0 }}>
        {/* Header with Logo and Issuer */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          <img 
            src={issuerLogo} 
            alt={issuer}
            style={{ 
              width: "50px", 
              height: "50px", 
              objectFit: "contain",
              marginRight: "15px",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "8px"
            }}
          />
          <div>
            <h5 style={{ color: "white", margin: 0, fontSize: "1.1rem" }}>
              {title}
            </h5>
            <p style={{ color: "#a391b5", margin: 0, fontSize: "0.9rem" }}>
              {issuer}
            </p>
          </div>
        </div>

        {/* Issued Date and Credential ID */}
        <div style={{ marginBottom: "15px" }}>
          <p style={{ color: "#c89de6", margin: "5px 0", fontSize: "0.9rem" }}>
            <FaAward style={{ marginRight: "8px" }} />
            Issued {issued}
          </p>
          {credentialId && (
            <p style={{ color: "#a391b5", margin: "5px 0", fontSize: "0.85rem" }}>
              Credential ID: <span style={{ color: "white" }}>{credentialId}</span>
            </p>
          )}
        </div>

        {/* Description */}
        <p style={{ 
          color: "#d4c5df", 
          fontSize: "0.9rem", 
          lineHeight: "1.6",
          marginBottom: "15px"
        }}>
          {description}
        </p>

        {/* Skills */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ color: "#c89de6", fontSize: "0.85rem", marginBottom: "8px" }}>
            Skills:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                bg="light"
                text="dark"
                style={{
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  fontWeight: "500"
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          {credentialUrl && (
            <a /* Added missing <a> tag */
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#623686",
                color: "white",
                textAlign: "center",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7b46a7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#623686";
              }}
            >
              Show Credential <FaExternalLinkAlt style={{ marginLeft: "5px", fontSize: "0.8rem" }} />
            </a> /* Added missing closing </a> tag */
          )}
          {pdfUrl && (
            <a /* Added missing <a> tag */
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                textAlign: "center",
                borderRadius: "8px",
                textDecoration: "none",
                border: "1px solid #623686",
                fontSize: "0.9rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              View PDF
            </a> /* Added missing closing </a> tag */
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
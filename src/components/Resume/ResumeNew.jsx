import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import resume from "../../Assets/PDF/Nethmin-Kavindu-Gimhan.pdf";

// Fix 1: Use a more reliable CDN path for the worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fix 2: Add proper loading handlers
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF file. Please try downloading it instead.');
    setLoading(false);
  }

  return (
    <div>
      <Container fluid className="resume-section">

        <Row className="resume">
          {loading && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>Loading PDF...</p>
            </div>
          )}
          
          {error && (
            <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
              <p>{error}</p>
            </div>
          )}

          <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div style={{ textAlign: 'center' }}>Loading document...</div>}
            className="d-flex justify-content-center"
            options={{
              // Fix 3: Add options for better compatibility
              cMapUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/cmaps/`,
              cMapPacked: true,
              standardFontDataUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/standard_fonts/`,
            }}
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>

          {numPages && numPages > 1 && (
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <Button
                variant="secondary"
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
                style={{ marginRight: '10px' }}
              >
                Previous
              </Button>
              <Button
                variant="secondary"
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resume}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
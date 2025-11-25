// src/App.jsx
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Resume from "./components/Resume/ResumeNew.jsx";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import MouseStarTrail from "./components/MouseStarTrail.jsx"; 
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      
      <div 
        className="App" 
        id={load ? "no-scroll" : "scroll"}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <MouseStarTrail maxStars={140} />

        <Navbar />
        <ScrollToTop />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
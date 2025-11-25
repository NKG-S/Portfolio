import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Me.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an undergraduate passionate about engineering and technology.
              I love solving problems and creating innovative solutions.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Python, C++, and JavaScript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">IoT Systems, Mobile Applications </b> and
                also in areas related to{" "}
                <b className="purple">
                  Cloud Computing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
              , while also exploring the fascinating world of
              <i>
                <b className="purple"> Machine Learning.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg} className="img-fluid" alt="Nethmin Kavindu" style={{ borderRadius: "50%",  maxHeight: "450px",  width: "auto",   border: "3px solid #c770f0"  }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
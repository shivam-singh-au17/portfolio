import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import About2 from "./About2";
import BackEnd from "./BackEnd";
import Languages from "./Languages";
import FrontEnd from "./FrontEnd";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Footer from "../Footer";

function About() {
  return (
    <>
      <Particle />
      <About2 />
      <Container fluid className="about-section">
        <Container>
          {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row> */}
          <h1 className="project-heading">
            Programming <strong className="purple"> Languages </strong>
          </h1>

          <Languages />

          <h1 className="project-heading">
            <strong className="purple">FrontEnd </strong> Tools
          </h1>

          <FrontEnd />

          <h1 className="project-heading">
            <strong className="purple">BackEnd </strong>Tools
          </h1>

          <BackEnd />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong>
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default About;

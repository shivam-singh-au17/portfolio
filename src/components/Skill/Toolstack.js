import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import {
  DiGit,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><span><br />Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><span>VSCode</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><span>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /><span>Heroku</span>
      </Col>
    </Row>
  );
}

export default Toolstack;

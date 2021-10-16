import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import {
  // SiExpress,
  SiFirebase,
} from "react-icons/si";
// import SiExpress from "react-icons/SiExpress";

function BackEnd() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col> */}
    </Row>
  );
}

export default BackEnd;


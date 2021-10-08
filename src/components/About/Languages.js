import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiPython,
} from "react-icons/di";

function Languages() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
        </Row>
    );
}

export default Languages;

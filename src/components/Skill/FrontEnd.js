import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiRedux,
    // SiStyledcomponents,
    // SiMaterialui,
} from "react-icons/si";
import {
    DiHtml5,
    DiCss3,
    DiReact,
    DiNpm,
    DiBootstrap,
} from "react-icons/di";

function FrontEnd() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNpm />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap />
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiStyledcomponents />
            </Col> */}
        </Row>
    );
}

export default FrontEnd;

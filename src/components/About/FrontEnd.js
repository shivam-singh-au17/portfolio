import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    // SiMaterialui,
    SiRedux
} from "react-icons/si";
import {
    DiReact,
    DiNpm,
    DiBootstrap,
} from "react-icons/di";
function FrontEnd() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
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
                <SiMaterialui />
            </Col> */}
        </Row>
    );
}

export default FrontEnd;

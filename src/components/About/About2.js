import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "3em" }}>
                            “About <span className="purple"> me” </span>
                        </h1>
                        <p className="home-about-body">
                            A passionate programmer, born and brought up in India. I am a Full Stack Web Developer with <b className="purple"> React.js, Redux, Express.js, Node.js, NestJS and SQL </b> as my tech stack.
                            <br />
                            <br />
                            I fell in love with programming and <b className="purple">“I have learnt a lot”</b>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Deep Learning and Natural Launguage Processing.
                                </b>
                            </i>
                            <br />
                            <br />
                            I love learning about new technologies, what problems are they solving and How can <b className="purple">I use them to build better and scalable products.</b>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;

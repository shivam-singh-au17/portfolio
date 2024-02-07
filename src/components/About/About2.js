import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "3em" }}>
                            <span className="purple">“About  me” </span>
                        </h1>
                        <p className="home-about-body">
                            <span className="myabout first-about">
                                Hello, I'm Shivam Singh, a seasoned Full Stack Web Developer based in Mirzapur, Uttar Pradesh, India. With a wealth of experience in web development, I bring a solid foundation in diverse technologies and frameworks, specializing in both front-end and back-end development to craft dynamic and captivating web applications.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                                My skills extend to database management, where I adeptly handle MySQL, PostgreSQL, and MongoDB to efficiently store and retrieve data for applications. My commitment to staying current with industry trends drives me to continuously enhance my knowledge and skills. This dedication, paired with my problem-solving mindset, ensures that I consistently deliver exceptional quality web applications that exceed client expectations.
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                In summary, I am a dedicated web developer with a passion for innovation and problem-solving. My expertise in JavaScript, React, Node.js, MongoDB, and other cutting-edge technologies, combined with my commitment to ongoing learning, positions me as a valuable asset in the development of top-notch web solutions.
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;

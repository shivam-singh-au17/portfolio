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
                                Hello, I am Shivam Singh, a Full Stack Web Developer based in Mirzapur, Uttar Pradesh, India. As an experienced web developer, I possess a strong foundation in a wide range of technologies and frameworks. I am well-versed in both front-end and back-end development, with expertise in creating dynamic and engaging web applications.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                                My expertise encompasses a deep understanding of JavaScript, enabling me to leverage frameworks like React, Redux, AdonisJS, ExpressJS, and Node.js to create robust and scalable web solutions. I excel in database management, working seamlessly with Mysql, PostgreSql, and MongoDB to efficiently store and retrieve data for applications. Additionally, I have hands-on experience in implementing microservices architecture, contributing to the development of modular and scalable systems.
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                In summary, I am a dedicated web developer driven by a strong passion for problem-solving and a continuous pursuit of knowledge. My proficiency in JavaScript, React, Node.js, MongoDB, microservices, and other technologies, combined with an adaptive mindset to stay abreast of industry advancements, empowers me to deliver high-quality web applications that not only meet but exceed client expectations.
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;

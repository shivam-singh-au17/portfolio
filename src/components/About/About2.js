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
                                My mastery extends to a profound understanding of JavaScript, allowing me to harness frameworks such as React, Redux, AdonisJS, ExpressJS, and Node.js, culminating in the creation of robust and scalable web solutions. Proficient in database management, I seamlessly navigate Mysql, PostgreSql, and MongoDB to efficiently store and retrieve data for applications. Furthermore, my hands-on experience in implementing microservices architecture contributes to the development of modular and scalable systems.
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                In essence, I am a committed web developer propelled by a fervent passion for problem-solving and an unwavering commitment to knowledge advancement. My proficiency in JavaScript, React, Node.js, MongoDB, microservices, and other cutting-edge technologies, coupled with an adaptive mindset to stay abreast of industry advancements, empowers me to deliver web applications of exceptional quality, consistently surpassing client expectations.
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;

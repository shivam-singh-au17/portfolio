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
                                Greetings, I'm Shivam Singh, a seasoned Full Stack Web Developer from Mirzapur, Uttar Pradesh, India. With extensive expertise in web development, I specialize in crafting dynamic web applications by leveraging a range of technologies and frameworks for both front-end and back-end development.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                                My mastery lies in JavaScript, enabling me to utilize frameworks like React, Redux, AdonisJS, ExpressJS, and Node.js to create robust web solutions. Proficient in database management, I adeptly handle Mysql, PostgreSql, and MongoDB for efficient data storage and retrieval. Committed to staying at the forefront of industry trends, I continuously enhance my skills to deliver exceptional quality web applications that exceed client expectations.
                            </span>
                            {/* <br />
                            <br />
                            <span className="myabout third-about">
                                In essence, I am a committed web developer propelled by a fervent passion for problem-solving and an unwavering commitment to knowledge advancement. My proficiency in JavaScript, React, Node.js, MongoDB, microservices, and other cutting-edge technologies, coupled with an adaptive mindset to stay abreast of industry advancements, empowers me to deliver web applications of exceptional quality, consistently surpassing client expectations.
                            </span> */}
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;

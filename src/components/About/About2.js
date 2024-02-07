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
                                Greetings, I'm Shivam Singh, an experienced Full Stack Web Developer from Mirzapur, Uttar Pradesh, India. I possess a comprehensive skill set in web development, honed through roles as a Back End Developer at Cidroy Technologies LLP, a Full Stack Developer at Ariantech Solutions Private Limited, and a Junior Back-End Developer specializing in the MERN stack at The DeveLearn Institute.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                                My proficiency extends across both front-end and back-end development, utilizing technologies like JavaScript, React, Node.js, and TypeScript to craft dynamic web apps. With expertise in managing databases such as MySQL, PostgreSQL, and MongoDB, I ensure smooth data operations for top-notch application performance.
                            </span>
                            <br />
                            <br />
                            <span className="myabout third-about">
                                Driven by a relentless pursuit of staying abreast of industry trends and a proactive approach fueled by my problem-solving acumen, I consistently augment my expertise to remain at the forefront of technological advancements, delivering innovative solutions that surpass client expectations. In summary, I'm a dedicated web developer with a passion for innovation and ongoing learning, poised to deliver top-notch solutions.
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;

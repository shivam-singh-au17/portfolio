import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCard from "./BlogsCard";
import Particle from "../Particle";
import Footer from "../Footer";

import project01 from "../../Assets/Projects/project01.png";
import project02 from "../../Assets/Projects/project02.png";

function Blogs() {
    return (
        <>
            <Container fluid className="project-section">
                <Particle />
                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={12} className="project-card">
                            <BlogsCard
                                imgPath={project01}
                                isBlog={false}
                                title="ONN Bikes"
                                description="ONN Bikes is a Rent a Bike or Scooty with Most Flexible Daily, Weekly & Monthly Bike Rental Plans @ Most Affordable Price. Free Helmet & Easy Booking. ONN Bikes are working with all our blood and sweat to create an alternative way of travel by the means of Bike rental services and ONN Bikes also provide excellent transport at very less cost."
                                link="https://github.com/shivam-singh-au17/BackEndOnnBikes"
                            />
                        </Col>

                        <Col md={12} className="project-card">
                            <BlogsCard
                                imgPath={project02}
                                isBlog={false}
                                title="Medium"
                                description="Medium is an American online publishing platform developed by Evan Williams and launched in August 2012. It is owned by A Medium Corporation. The platform is an example of social journalism, having a hybrid collection of amateur and professional people and publications, or exclusive blogs or publishers on Medium, and is regularly regarded as a blog host."
                                link="https://github.com/shivam-singh-au17/ProjectMediumClone"
                            />
                        </Col>

                        <Col md={12} className="project-card">
                            <BlogsCard
                                imgPath={project01}
                                isBlog={false}
                                title="ONN Bikes"
                                description="ONN Bikes is a Rent a Bike or Scooty with Most Flexible Daily, Weekly & Monthly Bike Rental Plans @ Most Affordable Price. Free Helmet & Easy Booking. ONN Bikes are working with all our blood and sweat to create an alternative way of travel by the means of Bike rental services and ONN Bikes also provide excellent transport at very less cost."
                                link="https://github.com/shivam-singh-au17/BackEndOnnBikes"
                            />
                        </Col>

                        <Col md={12} className="project-card">
                            <BlogsCard
                                imgPath={project02}
                                isBlog={false}
                                title="Medium"
                                description="Medium is an American online publishing platform developed by Evan Williams and launched in August 2012. It is owned by A Medium Corporation. The platform is an example of social journalism, having a hybrid collection of amateur and professional people and publications, or exclusive blogs or publishers on Medium, and is regularly regarded as a blog host."
                                link="https://github.com/shivam-singh-au17/ProjectMediumClone"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default Blogs;

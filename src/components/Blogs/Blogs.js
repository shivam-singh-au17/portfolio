import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCard from "./BlogsCard";
import Particle2 from "../Particle2";
import Footer from "../Footer";

import project01 from "../../Assets/Blogs/project01.png";
import project02 from "../../Assets/Blogs/project02.png";

function Blogs() {
    return (
        <div className="blog-background">
            <Particle2 />
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        My Recent <strong className="purple">Blogs </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Here are a few blogs I've recently wrote.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={12} className="project-card first-blog">
                            <BlogsCard
                                imgPath={project01}
                                isBlog={false}
                                date="Aug 29, 2021"
                                time="4 min read"
                                title="A great experience cloning the onnbikes.com website using frontend and backend tools."
                                description="This is a website where one can rent bikes at their convenience and this was my first big project and what I experienced in making this project and how me and my team completed this project all those things are written in this blog I hope you enjoy reading it."
                                link="https://hashnode.com/post/a-great-experience-cloning-the-onnbikescom-website-using-frontend-and-backend-tools-cksx1w6e00iykkxs1e9eu8iz8"
                            />
                        </Col>

                        <Col md={12} className="project-card second-blog">
                            <BlogsCard
                                imgPath={project02}
                                isBlog={false}
                                date="Oct 3, 2021"
                                time="4 min read"
                                title="My first React website and my first experience of cloning a website using React Framework."
                                description="On this website, anyone can post by writing on any topic and blog written by someone have to read and how I cloned this website and what tools did I have to use to make this website I have written about all these things me and what was my experience, it is not so good but I hope you will enjoy reading it."
                                link="https://hashnode.com/post/my-first-react-website-and-my-first-experience-of-cloning-a-website-using-react-framework-ckubc4ifx06xg0gs12zxddjbl"
                            />
                        </Col>

                        <Col md={12} className="project-card third-blog">
                            <BlogsCard
                                imgPath={project01}
                                isBlog={false}
                                date="Aug 29, 2021"
                                time="4 min read"
                                title="A great experience cloning the onnbikes.com website using frontend and backend tools."
                                description="This is a website where one can rent bikes at their convenience and this was my first big project and what I experienced in making this project and how me and my team completed this project all those things are written in this blog I hope you enjoy reading it."
                                link="https://hashnode.com/post/a-great-experience-cloning-the-onnbikescom-website-using-frontend-and-backend-tools-cksx1w6e00iykkxs1e9eu8iz8"
                            />
                        </Col>

                        <Col md={12} className="project-card fourth-blog">
                            <BlogsCard
                                imgPath={project02}
                                isBlog={false}
                                date="Oct 3, 2021"
                                time="4 min read"
                                title="My first React website and my first experience of cloning a website using React Framework."
                                description="On this website, anyone can post by writing on any topic and blog written by someone have to read and how I cloned this website and what tools did I have to use to make this website I have written about all these things me and what was my experience, it is not so good but I hope you will enjoy reading it."
                                link="https://hashnode.com/post/my-first-react-website-and-my-first-experience-of-cloning-a-website-using-react-framework-ckubc4ifx06xg0gs12zxddjbl"
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    );
}

export default Blogs;

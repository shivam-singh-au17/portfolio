import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle2 from "../Particle2";
import Footer from "../Footer";

import project01 from "../../Assets/Projects/project01.png";
import project02 from "../../Assets/Projects/project02.png";
import project03 from "../../Assets/Projects/project03.png";

function Projects() {
  return (
    <div className="project-background ">
      <Particle2 />
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={6} className="project-card first-blog">
              <ProjectCard
                imgPath={project02}
                isBlog={false}
                title="Medium"
                tool=" HTML, CSS, JavaScript, React, Express.JS, MongoDB, NodeJS, EJS, Bootstrap "
                description="This website is a clone of Medium.com, it is a platform where a person can write and host a professional blog and any user comes to my clone website then he can log in by his email and after logging in he can write a blog and he also gets facility that he can read blogs written by others and he can also host his blog, his blog is visible to all users."
                link="https://github.com/shivam-singh-au17/ProjectMediumClone"
                demoLink="https://mediumapp.vercel.app/"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={project01}
                isBlog={false}
                title="ONN Bikes 2.0"
                tool=" HTML, CSS, JavaScript, Express.JS, MongoDB, NodeJS, EJS, Bootstrap "
                description="This is another clone of my previous project Onnbikes.com In this project all the data is linked to the database and the whole website is built with the help of backend tools. It is a platform where bikes or scooters can rent bikes at the cheapest price with the most flexible daily, weekly, and monthly bike rental plans and all these facilities are available on our website too."
                link="https://github.com/shivam-singh-au17/BackEndOnnBikes"
                demoLink="https://onnbikes.herokuapp.com/"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={project01}
                isBlog={false}
                title="ONN Bikes"
                tool=" HTML, CSS, JavaScript "
                description="This website is a clone of Onnbikes.com, It is a platform where bikes or scooters can rent bikes at the cheapest price with the most flexible daily, weekly, and monthly bike rental plans and all these facilities are available on our website too, the user can log in by email and mobile and after that, he can book the bike according to his location and he also gets to see different types of bikes and their prices here."
                link="https://github.com/shivam-singh-au17/project_oonbikes"
                demoLink="https://onnbikes.vercel.app/"
              />
            </Col>

            <Col md={6} className="project-card second-blog">
              <ProjectCard
                imgPath={project03}
                isBlog={false}
                title="Animoto"
                tool=" HTML, CSS "
                description="This website is a clone of Animoto.com and it is a cloud-based video creation service that produces video from photos, video clips, and music into video slideshows. This was the first project in my web development journey and it was made with just HTML and CSS. On our clone website, any user can see many types of video templates and can see the pricing of how much is charged for making a video."
                link="https://github.com/shivam-singh-au17/Project_Damodar"
                demoLink="https://project-damodar.vercel.app/"
              />
            </Col>

          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;

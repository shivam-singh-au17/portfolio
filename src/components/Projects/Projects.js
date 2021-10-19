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
                description="Medium is an American online publishing platform developed by Evan Williams and launched in August 2012. It is owned by A Medium Corporation. The platform is an example of social journalism, having a hybrid collection of amateur and professional people and publications, or exclusive blogs or publishers on Medium, and is regularly regarded as a blog host."
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
                description="ONN Bikes is a Rent a Bike or Scooty with Most Flexible Daily, Weekly & Monthly Bike Rental Plans @ Most Affordable Price. Free Helmet & Easy Booking. ONN Bikes are working with all our blood and sweat to create an alternative way of travel by the means of Bike rental services and ONN Bikes also provide excellent transport at very less cost."
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
                description="ONN Bikes is a Rent a Bike or Scooty with Most Flexible Daily, Weekly & Monthly Bike Rental Plans @ Most Affordable Price. Free Helmet & Easy Booking. ONN Bikes are working with all our blood and sweat to create an alternative way of travel by the means of Bike rental services and ONN Bikes also provide excellent transport at very less cost."
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
                description="Animoto is a cloud-based video creation service that produces video from photos, video clips, and music into video slideshows, and customized web-based presentations. Animoto is based in New York City with an office in San Francisco.Join millions of people creating and sharing videos with our easy drag and drop video maker. No experience necessary."
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

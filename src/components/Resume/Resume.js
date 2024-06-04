import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle2 from "../Particle2";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Shivam_Singh_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <div className="resume-background activeNavlink" id="scrollResume">
      <Particle2 />
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-left">


              {/*  EXPERIENCES AND EDUCATION */}
              <h3 className="resume-title">Work Experiences</h3>
              <Resumecontent
                title="Back End Developer"
                company="CIDROY TECHNOLOGIES LLP "
                date="( Jan 2023 - Present )"
                content={[
                  "Spearheaded crucial projects for a retail store, overseeing tasks from order generation to sales returns.",
                  "Implemented robust features such as WhatsApp and Telegram notifications, enhancing customer engagement and communication.",
                  "Proficiently utilized technologies including S3, Redis, JavaScript, TypeScript,MongoDB, AdonisJs, Socket.io, and MySQL.",
                  "Played a pivotal role in optimizing system performance and data management through the effective use of MongoDB and MySQL databases.",
                  "Collaborated remotely with cross-functional teams, ensuring seamless integration of back-end functionalities.",
                  "Contributed to the overall success of the team by leveraging expertise in back-end development and problem-solving."
                ]}
              />

              <Resumecontent
                title="Full Stack Developer"
                company="Ariantech Solutions Pvt. Ltd. "
                date="( Dec 2021 - Dec 2022 )"
                content={[
                  "Spearheaded the development of 80% of the Back-End for financial and loanrelated websites.",
                  "Implemented robust and scalable solutions to enhance the overall performance of the applications.",
                  "Orchestrated the entire database architecture, ensuring optimal efficiency and reliability.",
                  "Conducted regular performance assessments and implemented optimizations to maintain database integrity.",
                  "Successfully implemented and fine-tuned Role-Based Authentication and Authorization systems, enhancing security measures.",
                  "Integrated Email Notification services, streamlining communication channels for users and stakeholders.",
                  "Orchestrated the integration of a secure Payment Gateway, facilitating seamless and secure financial transactions.",
                ]}
              />

              <Resumecontent
                title="Junior Back-End Developer || MERN"
                company="The DeveLearn Institute "
                date="( Feb 2021 - Dec 2021 )"
                content={[
                  "Developed the Back-End of multi-tenant websites using a microservices architecture.",
                  "Conducted a thorough study of data structures to propose algorithmic improvements and implemented new features accordingly.",
                  "Implemented essential functionalities such as Multi-Tenant architecture, Multi-Tenant Authentication & Authorization, and managed AWS S3, EC2, Lambda, etc.",
                  "Collaborated with interns to revamp the API, resulting in a more streamlined and flexible integration with third-party applications."
                ]}
              />
            </Col>

            {/*  INTERNSHIPS AND ACHIEVEMENTS */}
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Internships</h3>
              <Resumecontent
                title="Full Stack Web Developer"
                company="Masai School "
                date="( April 2021 - Dec 2021 )"
                content={[
                  "1200 hours of hands - on coding.", "100 hours for DSA.", "100 hours for soft skills development.", "5 collaborative projects and 50 mini-projects.", "2 hackathons and 1 capstone project",
                ]}
              />

              <Resumecontent
                title="Intern"
                company="Techpile Technology Pvt. Ltd."
                date="( June 2019 - Aug 2019 )"
                content={[
                  "Hands-on training by industry experts on the 'Samachar India' project.",
                  "Learnt how system deployment is organized into small major parts.",
                  "Learned how to periodically test our code and complete it within the given time frame.",
                ]}
              />

              <h3 className="resume-title">ACHIEVEMENTS</h3>
              <Resumecontent
                title=""
                content={[
                  "Getting started with python LinkedIn Skill Assessment badge.", "LinkedIn Skill Assessment badge in CSS, JavaScript, Git, Bash, Node.js, and MongoDB.",
                ]}
              />

              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="Tathagat Gautam Buddha Government Polytechnic, Shravasti "
                date="2017 - 2020"
                content={[`Diploma in Computer Science and Engineering`]}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;

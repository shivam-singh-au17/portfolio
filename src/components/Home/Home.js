import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../Assets/profile.png";
import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";
import Type2 from "./Type2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h4 style={{ paddingLeft: 47, textAlign: "left" }}>
              {/* <h6 style={{ paddingBottom: 1 }} className="heading"> */}
                <Type2 />
                {/* Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> */}
              {/* </h6> */}
              </h4>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHIVAM SINGH</strong>
              </h1>
              <h1 className="heading-name">
                From
                <strong className="main-name"> Mirzapur, Uttar Pradesh</strong>
              </h1>

              <div style={{ paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 15 }}>
              <img style={{ width: "90%"}} src={profile} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}
export default Home;

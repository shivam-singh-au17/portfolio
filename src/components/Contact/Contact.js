import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Footer from "../Footer";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import MyModal from "./Modal";

function Contact() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Particle />
            <Container fluid className="home-about-section" id="about">
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1 style={{ fontSize: "7em", marginTop: "50px" }}>FIND ME ON</h1>
                        <p style={{ fontSize: "2em" }}>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/shivam-singh-au17"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/SHIVAMSINGH4458"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/shivamsingh4458/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <MyModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                                <span
                                    onClick={() => setModalShow(true)}
                                    className="icon-colour home-social-icons"
                                >
                                    <CgMail />
                                </span>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/shivamsingh9350/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
export default Contact;

import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const Message = (props) => {
  const recordSearchName = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
      document.getElementById("recordSearchName").value +=
        event.results[0][0].transcript;
    };
    recognition.start();
  };

  const recordSearchEmail = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
      document.getElementById("recordSearchEmail").value +=
        event.results[0][0].transcript;
    };
    recognition.start();
  };

  const recordSearchMessage = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
      document.getElementById("recordSearchMessage").value +=
        event.results[0][0].transcript;
    };
    recognition.start();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          className="Home-Message-Img"
          style={{ fontSize: "5em" }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: ".4em", padding: "20px 50px" }}
          >
            <span>I look forward to receiving your message.</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Home-Message-Img">
          <Form
            style={{ padding: "20px 50px" }}
            action="https://formspree.io/f/xyylaeoa"
            method="POST"
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="formContect"
                required
                type="text"
                name="name"
                placeholder="type or speak your name"
                id="recordSearchName"
                onClick={recordSearchName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="formContect"
                required
                type="email"
                name="_replyto"
                placeholder="type or speak your email"
                id="recordSearchEmail"
                onClick={recordSearchEmail}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                className="formContect"
                as="textarea"
                name="message"
                rows={3}
                placeholder="type or speak your message"
                id="recordSearchMessage"
                onClick={recordSearchMessage}
              />
              <span className="myMessageWarniingColor">
                <span style={{ color: "red" }}>&#9755; </span>
                <span className="myMessageWarniing">
                  To initiate voice typing, simply click on the designated box.
                </span>
              </span>
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Message;

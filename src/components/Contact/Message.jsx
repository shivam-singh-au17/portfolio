import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const Message = (props) => {
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
            {/* <span style={{ opacity: "0" }}>---------------</span> */}
            {"I will be glad to receive your message."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Home-Message-Img">
          <Form style={{ padding: "20px 50px" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="formContect"
                required
                type="text"
                placeholder="Please Write Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="formContect"
                required
                type="email"
                placeholder="Please Write Your Email"
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
                rows={3}
                placeholder="Please Type Your Message Here"
              />
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Message;

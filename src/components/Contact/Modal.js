import React from 'react'
import { Modal } from "react-bootstrap";

const MyModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton style={{ fontSize: "5em", background: "#ba083f"}} >
                    <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: ".7em", color:"#FFFFFF"}}>
                        <span style={{ color: "#0095FF" }}>---------</span>{" Mail me at "}<span style={{ color: "#0095FF" }}>---------</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "#ba083f" }}>
                    <p style={{ fontSize: "2.5em", color: "#0095FF"}}>
                        <span style={{ color: "#FFFFFF" }}>-----</span>{" shivamsingh4458@gmail.com "}<span style={{ color: "#FFFFFF" }}>-----</span>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MyModal

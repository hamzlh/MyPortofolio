import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ModalComponent({ onShowChange }) {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('');

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("isLoggedIn", false);
  };

  const handleInputChange = (event) => {
    setName(event.target.value); // Update name state
  };

  const handleSubmit = () => {
    console.log("Name submitted:", name);
    localStorage.setItem("userName", name);
    localStorage.setItem("isLoggedIn", false);
    setShow(false);
  };

  useEffect(() => {
    console.log("modal :", show);
    onShowChange(show);
  }, [show, onShowChange]);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
        className="custom-modal"
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title>Give me something!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputname">Name</Form.Label>
          <Form.Control type="text" id="inputname" placeholder="your name" value={name}
          onChange={handleInputChange} />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Ignore
          </Button>
          <Link to={"/"}>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ModalComponent.propTypes = {
  // isShow should be a boolean and is required
  onShowChange: PropTypes.func.isRequired, // onShowChange should be a function and is required
};

export default ModalComponent;

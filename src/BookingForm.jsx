import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingForm = ({ onNewBooking }) => {
  const [show, setShow] = useState(false);
  const [court, setCourt] = useState("Court 1");
  const [sport, setSport] = useState("Tennis");
  const [bookedBy, setBookedBy] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewBooking({ court, sport, bookedBy, startTime, endTime });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Booking
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Booking</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Court</Form.Label>
              <Form.Control
                as="select"
                value={court}
                onChange={(e) => setCourt(e.target.value)}
              >
                <option>Court 1</option>
                <option>Court 2</option>
                <option>Court 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sport</Form.Label>
              <Form.Control
                type="text"
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Booked By</Form.Label>
              <Form.Control
                type="text"
                value={bookedBy}
                onChange={(e) => setBookedBy(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Booking
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default BookingForm;

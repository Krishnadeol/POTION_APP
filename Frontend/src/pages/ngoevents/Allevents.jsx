// handle validation not working for add email

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Allevents() {
  const [curUser, setUser] = useState([]);
  const [myEvents, setEvents] = useState([]);
  const [eventId, setId] = useState("");
  const [cred, setcred] = useState({
    name: "",
    email: "",
    description: "",
    startDate: "",
    endDate: "",
    stipend: 0,
    tag: "",
    opportunity: "",
  });

  const tobj = {
    position: "bottom-right",
    autoclose: 5000,
    pauseOnhover: true,
    draggable: true,
    theme: "dark",
  };

  const [showApp, setshowApp] = useState(false);

  const handleCloseApp = () => {
    setshowApp(false);
  };

  const [appUser, setappUser] = useState([]);

  const handleShowApp = async (event) => {
    try {
      setcred({ ...cred, name: event.name });
      let { data } = await axios.get(
        `http://localhost:5000/ngo/findusers?eid=${event._id}`
      );
      console.log(event._id);
      if (data.success) {
        setappUser(data.data);
        console.log("Applicants", appUser);
        setshowApp(true);
      } else {
        toast.error("Some Error occurred", tobj);
      }
    } catch (error) {
      toast.error("Some server error", tobj);
    }
  };
  // for editing an event

  const [showE, setShowE] = useState(false);
  const handleShowE = (event) => {
    setcred([]);
    setcred({ ...cred, ...event });
    setId(event._id);
    setShowE(true);
  };

  const handleCloseE = () => {
    setShowE(false);
  };

  const handleEdit = async () => {
    try {
      if (handleValidA()) {
        const { data } = await axios.patch(
          `http://localhost:5000/ngo/updateevent?eid=${eventId}`,
          {
            email: cred.email,
            name: cred.name,
            description: cred.description,
            startDate: cred.startDate,
            stipend: cred.stipend,
            endDate: cred.endDate,
            oppportunity: cred.opportunity,
          }
        );
        if (data.success) {
          toast.success("Event updated successfully", tobj);
          handleCloseE;
        } else {
          toast.error("Could not update ! try after some time", tobj);
        }
      } else return;
    } catch (error) {
      toast.error(error.message, tobj);
    }
  };

  // for DELETING  event
  const [showD, setShowD] = useState(false);
  const handleShowD = (id) => {
    setId(id);
    setShowD(true);
  };
  const handleCloseD = () => {
    setShowD(false);
  };
  const handleDelete = async (id) => {
    try {
      handleCloseD();
      const { data } = await axios.delete(
        `http://localhost:5000/ngo/deleteevent/${eventId}`
      );

      if (data.success) toast.success("Event deleted successfully", tobj);
      else toast.error("Event deleted successfully", tobj);
    } catch (error) {
      toast.error(error.message, tobj);
    }
  };

  // For  adding an event

  const [showA, setShowA] = useState(false);
  const handleCloseA = () => {
    setShowA(false);
  };

  const handleA = () => {
    if (handleValidA()) {
      cred.email = curUser.email;
      handleAdd();
      setShowA(false);
    } else {
      alert("ok");
      return;
    }
  };

  // for setting the all the cred values to empty string
  const resetCred = () => {
    const emptyCred = Object.fromEntries(
      Object.entries(cred).map(([key, _]) => [key, ""])
    );
    setcred(emptyCred);
  };

  const handleShowA = () => {
    resetCred();
    setcred({ ...cred, email: curUser.email });
    console.log(cred);
    setShowA(true);
  };

  const handleValidA = () => {
    if (
      cred.email == "" ||
      cred.name == "" ||
      cred.startDate == "" ||
      cred.endDate == "" ||
      cred.description.length < 4
    ) {
      toast.error("Fields cannot be left blank", tobj);
      return false;
    } else {
      return true;
    }
  };

  // Modal to add event
  const handleAdd = async () => {
    try {
      let { data } = await axios.post(`${import.meta.env.VITE_URL}`, {
        email: cred.email,
        name: cred.name,
        description: cred.description,
        startDate: cred.startDate,
        stipend: cred.stipend,
        endDate: cred.endDate,
        oppportunity: cred.opportunity,
      });

      if (data.success) {
        toast.success("Event added successfully ", tobj);
        window.location.reload();
      } else {
        toast.error(" Server error", tobj);
        alert("not sending the request");
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setcred({ ...cred, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("crowd-app-ngo-data")) {
          navigate("/ngo_events");  //will change after frontend done
        } else {
          console.log(localStorage.getItem("crowd-app-ngo-data"));
          setUser(JSON.parse(localStorage.getItem("crowd-app-ngo-data")));
        }
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/ngo/getevents?email=${curUser.email}`
        );

        setEvents(data.data);
        console.log("myEvents", myEvents);
        cred.email = curUser.email;
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [curUser]);

  function getEvents() {
    const cards = myEvents.map((event) => (
      <li key={event._id}>
        <h1>{event.name}</h1>

        <button
          onClick={() => {
            handleShowApp(event);
          }}
        >
          {" "}
          Show Applicants
        </button>

        <button
          onClick={() => {
            handleShowE(event);
          }}
        >
          {" "}
          Edit
        </button>

        {/* The refrence passing in the button */}
        <button
          onClick={() => {
            handleShowD(event._id);
          }}
        >
          Delete
        </button>
      </li>
    ));
    return cards;
  }

  // APPLICANTS TO APPEAR OM MODALS
  const getApplicants = () => {
    const applicants = appUser.map((applicant) => (
      <Card
        key={applicant._id}
        style={{ width: "90%", maxWidth: "29rem", marginBottom: "20px" }}
      >
        <Card.Body>
          <Card.Title>{applicant.name}</Card.Title>
          <Card.Text>Email: {applicant.email}</Card.Text>
          <Button variant="success">Accept</Button>
          <Button variant="danger">Reject</Button>
        </Card.Body>
      </Card>
    ));
    return applicants;
  };
  return (
    <>
      <h1>events</h1>
      <Button variant="primary" onClick={handleShowA}>
        Add an event
      </Button>

      <ul> {myEvents && getEvents()}</ul>
      {/*modal for adding an event */}

      <Modal show={showA} onHide={handleCloseA}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Event </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={cred.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Opportunity</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="opportunity"
                value={cred.opportunity}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stipend</Form.Label>
              <Form.Control
                type="text"
                placeholder="Stipend Amount"
                name="stipend"
                value={cred.stipend}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={cred.startDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={cred.endDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={cred.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleA}>
            Add event
          </Button>
        </Modal.Footer>
      </Modal>

      {/*modal for deleting  an event */}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showD}
        onHide={handleCloseD}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Sure you want to delete it</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseD}>No</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>

      {/*modal for editing and event */}

      <Modal show={showE} onHide={handleCloseE}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Event </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={cred.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Opportunity</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="opportunity"
                value={cred.opportunity}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stipend</Form.Label>
              <Form.Control
                type="text"
                placeholder="Stipend Amount"
                name="stipend"
                value={cred.stipend}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={cred.startDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={cred.endDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={cred.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleEdit}>
            Edit event
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for Applicatns*/}
      <Modal show={showApp} onHide={handleCloseApp}>
        <Modal.Header closeButton>
          <Modal.Title>Applicants for {cred.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*mapping function for showing applicants who applied*/}
          {getApplicants()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseApp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

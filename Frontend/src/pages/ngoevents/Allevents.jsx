import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Allevents() {
  const [curUser, setUser] = useState([]);
  const [myEvents, setEvents] = useState([]);
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

  // For showing add modal for adding an event
  const [showA, setShowA] = useState(false);
  const handleCloseA = () => {
    if (handleValidA()) {
      cred.email = curUser.email;
      console.log(cred);
      handleAdd();
      setShowA(false);
    } else return;
  };
  const handleShowA = () => setShowA(true);

  const handleValidA = () => {
    if (
      cred.email === "" ||
      cred.name === "" ||
      cred.startDate === "" ||
      cred.endDate === "" ||
      cred.description.length < 4
    ) {
      toast.error("Fields cannot be left blank", tobj);
      return false;
    } else return true;
  };
  // Modal to add event
  const handleAdd = async () => {
    try {
      let { data } = await axios.post("http://localhost:5000/ngo/addevent", {
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

  // for mapping the data
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("crowd-app-ngo-data")) {
          navigate("/");
        } else {
          console.log(localStorage.getItem("crowd-app-ngo-data"));
          setUser(JSON.parse(localStorage.getItem("crowd-app-ngo-data")));

          const { data } = await axios.get(
            `http://localhost:5000/ngo/getevents?email=${curUser.email}`
          );
          setEvents(data.data);
          console.log(myEvents);
          cred.email = curUser.email;
        }
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchData();
  }, []);

  function getEvents() {
    const cards = myEvents.map((event) => (
      <li key={event._id}>
        <h1>{event.name}</h1>
      </li>
    ));
    return cards;
  }

  // A MODAL OPENS TO CONFIRM WHETHER TO DELETE OR NOT
  const handleDelete = async () => {};

  // a modal with all input fields but only the one that have to be updated must be changed
  const handleEdit = async () => {};

  // APPLICANTS TO APPEAR OM MODALS
  const findApplicants = async () => {};

  return (
    <>
      <></>
      <h1>events</h1>
      <Button variant="primary" onClick={handleShowA}>
        Add an event
      </Button>

      <ul> {getEvents()}</ul>

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
          <Button variant="primary" onClick={handleCloseA}>
            Add event
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

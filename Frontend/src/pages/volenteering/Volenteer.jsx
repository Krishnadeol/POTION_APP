import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function volenteer() {
  const tobj = {
    position: "bottom-right",
    autoclose: 5000,
    pauseOnhover: true,
    draggable: true,
    theme: "dark",
  };

  const [curUser, setUser] = useState([]);
  const [myEvents, setEvents] = useState([]);
  const [eventId, setId] = useState("");
  const [cred, setcred] = useState({
    name: "",
    email: "",
    message: "",
    Eid: "",
  });

  const [showA, setShowA] = useState(false);
  const handleCloseA = () => {
    setShowA(false);
  };

  const handleApply = async () => {
    try {
      if (handleValidA()) {
        const { data } = await axios.post(`http://localhost:5000/user/apply`, {
          name: cred.name,
          email: cred.email,
          message: cred.message,
          resume: "ddfgdfgdfgdffdgddfgdfgdsfsdfsdf",
          Eid: eventId,
        });
        if (data.success) {
          toast.success("Applied successfully", tobj);
        } else {
          toast.error("You have already applied for event");
          setShowA(false);
        }
      } else {
        return;
      }
    } catch (error) {
      toast.error("Some error occured", tobj);
    }
  };

  // for setting the all the cred values to empty string
  const resetCred = () => {
    const emptyCred = Object.fromEntries(
      Object.entries(cred).map(([key, _]) => [key, ""])
    );
    setcred(emptyCred);
  };

  const handleShowA = (event) => {
    resetCred();
    setcred((prevState) => ({
      ...prevState,
      email: curUser.email,
      name: curUser.name,
    }));

    setId(event._id);

    console.log("credentials", cred);
    console.log("cur", curUser);
    setShowA(true);
  };

  const handleValidA = () => {
    if (cred.message.length < 4) {
      toast.error("Fields cannot be left blank", tobj);
      return false;
    } else {
      return true;
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
          navigate("/");
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
          `http://localhost:5000/user/getevents`
        );

        setEvents(data.data);
        console.log("myEvents", myEvents);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [curUser]);

  useEffect(() => {
    console.log("cred after setting credentials", cred);
  }, [cred]);

  function getEvents() {
    const cards = myEvents.map((event) => (
      <Card
        key={event._id}
        style={{ width: "90%", maxWidth: "29rem", marginBottom: "20px" }}
      >
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>Email: {event.email}</Card.Text>
          <Button variant="success" onClick={() => handleShowA(event)}>
            Apply
          </Button>
        </Card.Body>
      </Card>
    ));
    return cards;
  }

  return (
    <>
      <h1>All Events</h1>
      {getEvents()}
      <Modal show={showA} onHide={handleCloseA}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for event </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Why do you want to apply ?</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={6}
                value={cred.message}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleApply}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import upiqr from "upiqr";
import Sidebar from "../../components/NGO/sidebar/sidebar";
import Navbar from "../../components/NGO/navbar/navbar";
import "./campaign.css"


export default function Campaigns() {
  //All the functions, Modals, upi, etc. are shifted to Frontend/src/components/NGO/CampaignModal
  const baseURL = import.meta.env.VITE_API_URL;
  const [curUser, setUser] = useState([]);
  const [myEvents, setEvents] = useState([]);
  const [eventId, setId] = useState("");
  const [cred, setcred] = useState({
    name: "",
    email: "",
    description: "",
    target: 0,
  });

  const tobj = {
    position: "bottom-right",
    autoclose: 5000,
    pauseOnhover: true,
    draggable: true,
    theme: "dark",
  };

  // for editing an campaign

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
          `${baseURL}/ngo/updatecampaign?eid=${eventId}`,
          {
            email: cred.email,
            name: cred.name,
            description: cred.description,
            target: cred.target,
          }
        );
        if (data.success) {
          toast.success("campaign updated successfully", tobj);
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
        `${baseURL}/ngo/deletecampaign/${eventId}`
      );

      if (data.success) toast.success("Event deleted successfully", tobj);
      else toast.error("Not successfull successfull", tobj);
    } catch (error) {
      toast.error(error.message, tobj);
    }
  };

  // For  adding an campaign

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
      cred.email === "" ||
      cred.name === "" ||
      cred.target === "" ||
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
        target: cred.target,
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

  // for handleling the donation  => flow  event se upi id and payee name lao
  // modal pr amount dal wao click on generate qr button
  // then if the payment is successfull then update the value in the
  // donated section  => ye kam do tareeko se ho skta either manually or automatically ( sochna padega :) )

  const [showDo, setShowDo] = useState(false);
  const handleCloseDo = () => {
    setShowDo(false);
  };

  const [donCred, setdonCred] = useState({
    payee: "",
    UPI: "",
  });
  const handleDonation = async (e) => {
    try {
      let email = "d.12a@gmail.com";
      const { data } = await axios.get(`${baseURL}/ngo/upi?email=${email}`, {});
      if (data.success) {
        donCred.UPI = data.data.UPI;
        donCred.payee = data.data.payee;
        generateQR();
      } else toast.error("some network error", tobj);
    } catch (error) {
      toast.error(error.message, tobj);
    }
  };
  const [qrImage, setQrImage] = useState(null);

  const generateQR = () => {
    upiqr({
      payeeVPA: donCred.UPI,
      payeeName: donCred.payee,
    })
      .then((upi) => {
        console.log(upi.qr); // data:image/png;base64,eR0lGODP...
        console.log(upi.intent); // upi://pay?pa=bhar4t@upi&pn=Bharat..
        setQrImage(upi.qr);
        setShowDo(true);
      })
      .catch((err) => {
        console.log(err);
      });
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
        const { data } = await axios.get(`${baseURL}/ngo/getcampaigns`);

        setEvents(data.data);
        console.log("myEvents", myEvents);
        cred.email = curUser.email;
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [curUser]);

  function getCampaigns() {
    const cards = myEvents.map((event) => (
      <Card
        key={event._id}
        style={{ width: "90%", maxWidth: "29rem", marginBottom: "20px" }}
      >
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>Email: {event.email}</Card.Text>
          {localStorage.getItem("crowd-app-ngo-data") ? (
            <Button
              variant="primary"
              onClick={() => {
                handleDonation(event);
              }}
            >
              Donate
            </Button>
          ) : (
            <>
              {curUser.email === event.email && (
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShowE(event);
                  }}
                >
                  Update
                </Button>
              )}

              {curUser.email === event.email && (
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShowD(event._id);
                  }}
                >
                  Delete
                </Button>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    ));
    return cards;
  }

  //Frontend work starts here
  return (
    <div className="Campaign_Home">
      <Sidebar />
      <div className="Campaign_Home_Container">
        <Navbar />
        <br></br>
        CONTAINER
      </div>
    </div>
  );
}
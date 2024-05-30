import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import transition from "../../../transition";
import video from "../../../../src/Zero Hunger Film _ Global Goals.mp4";

function RegisterI() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    category: "",
  });

  const [show, setShow] = useState(false);
  const [enteredOtp, setOtp] = useState("");
  const [rOtp, setrOtp] = useState("");

  const tobj = {
    position: "bottom-right",
    autoclose: 5000,
    pauseOnhover: true,
    draggable: true,
    theme: "dark",
  };

  const handleShow = async () => {
    let { data } = await axios.post("http://localhost:5000/otp", {
      email: cred.email,
    });
    setrOtp(data.otp);
    console.log(rOtp);
    setShow(true);
  };

  const handleClose = async () => {
    setShow(false);

    if (rOtp === enteredOtp) {
      let { data } = await axios.post("http://localhost:5000/user/Register", {
        name: cred.name,
        email: cred.email,
        password: cred.password,
        category: cred.category,
      });
      if (data.success) {
        localStorage.setItem("crowd-app-user-data", JSON.stringify(data.user));
        navigate("/login");
      } else if (!data.success) {
        toast.error(data.error, tobj);
      }
    } else {
      toast.error("Wrong Otp Entered", tobj);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        console.log("a");
        let { data } = await axios.post(
          "http://localhost:5000/user/check_user",
          {
            email: cred.email,
          }
        );

        if (data.check === true) {
          handleShow();
        } else {
          toast.error("This Email is arleady has an account", tobj);
        }
      } catch (error) {
        toast.error(error.message, tobj);
        console.log("loda");
      }
    }
  };

  const handleValidation = () => {
    const { name, password, cpassword, category } = cred;

    if (name.length < 3) {
      toast.error("Too short name", tobj);
      return false;
    } else if (password.length < 5) {
      toast.error("Password should atleast 5 char long", tobj);
      return false;
    } else if (password !== cpassword) {
      toast.error("Confired password does not match", tobj);
      return false;
    } else if (category === "") {
      toast.error("Please select a cetegory type", tobj);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <div className="bgContainer">
      <div className="overlay">
        <video className="vid" src={video} autoPlay={true} loop />
        <div className="bd">
          <form className="wrapper" onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign UP</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="name"
                value={cred.name}
                onChange={handleChange}
              />
              <FaUser className="ic" />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={cred.email}
                required
                onChange={handleChange}
              />
              <MdEmail className="ic" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={cred.password}
                onChange={handleChange}
              />
              <FaLock className="ic" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                value={cred.cpassword}
                onChange={handleChange}
              />
              <FaLock className="ic" />
            </div>
            <button type="submit">Get Started</button>
            <div className="login-link">
              <p>
                Already have an account?<Link to="/ind_login"> SignIn</Link>
              </p>
            </div>
          </form>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Otp Verification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="eotp">
                  <Form.Label>6 DIGITS OTP </Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="Enter your otp"
                    autoFocus
                    onChange={handleOtpChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Submit Otp
              </Button>
            </Modal.Footer>
          </Modal>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
export default transition(RegisterI);

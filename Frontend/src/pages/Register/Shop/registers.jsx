import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import transition from "../../../transition";
import video from "../../../../src/Zero Hunger Film _ Global Goals.mp4";
import "./shopr.css"


function RegisterS() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const tobj = {
    position: "bottom-right",
    autoclose: 5000,
    pauseOnhover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/shop/Register",
          {
            name: cred.name,
            email: cred.email,
            password: cred.password,
          }
        );
        if (data.success) {
          localStorage.setItem("Ngo-user-data", JSON.stringify(data.user));
          navigate("/login");
        } else if (!data.success) {
          toast.error(data.error, tobj);
        }
      } catch (error) {
        toast.error("user exists", tobj);

        console.log({ error: error.message });
      }
    }
  };

  const handleValidation = () => {
    const { name, password, cpassword } = cred;

    if (name.length < 3) {
      toast.error("Too short name", tobj);
      return false;
    } else if (password.length < 5) {
      toast.error("Password should atleast 5 char long", tobj);
      return false;
    } else if (password !== cpassword) {
      toast.error("Confired password does not match", tobj);
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
                Already have an account?<Link to="/shop_login"> SignIn</Link>
              </p>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
   </div>
  );
}

export default transition(RegisterS);

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import transition from "../../../transition";
import video from "../../../../src/Zero Hunger Film _ Global Goals.mp4";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

function LoginI() {
  console.log("checking for user");

  const navigate = useNavigate();
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const tobj = {
    position: "bottom-right",
    autoclose: 5000,
    pauseOnhover: true,
    draggable: true,
  };
  useEffect(() => {
    if (localStorage.getItem("crowd-app-ind-data")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        const { data } = await axios.post(`http://localhost:5000/user/Login`, {
          email: cred.email,
          pass: cred.password,
        });
        console.log(cred.email, "this is the email");
        if (data.success) {
          console.log(data, "Login successfull");
          localStorage.setItem("crowd-app-ind-data", JSON.stringify(data.user));
          navigate("/");
        } else if (!data.success) {
          toast.error(data.error, tobj);
        }
      } catch (error) {
        toast.error("wrong credentials", tobj);

        console.log({ error: error.message });
      }
    }
  };

  const handleValidation = async () => {
    console.log("inSide handle Validation");
    const { password } = cred;

    if (password.length === "") {
      toast.error("Password cannot be blank", tobj);
      return false;
    }
    console.log("Ending handle Validation");
    return true;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bgContainer">
        <div className="overlay">
          <video className="vid" src={video} autoPlay={true} loop />
          <div className="bd">
            <form className="wrapper" onSubmit={(e) => handleSubmit(e)}>
              <h1>Sign In</h1>

              <div className="input-box  inp">
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

              <button type="submit">Welcome</button>
              <div className="register-link">
                <p>
                  Already have an account?
                  <Link to="/ind_register"> SignUp</Link>
                </p>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}
export default transition(LoginI);

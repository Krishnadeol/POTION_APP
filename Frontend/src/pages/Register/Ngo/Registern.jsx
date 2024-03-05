import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Registern() {
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
          "http://localhost:5000/ngo/Register",
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
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <h1>Welcome to our App</h1>
        </div>

        <input
          type="text"
          placeholder="Username"
          name="name"
          value={cred.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={cred.email}
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={cred.password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
          value={cred.cpassword}
          onChange={handleChange}
        />

        <button type="submit">Create User</button>
        <span>
          already have an account ?<Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </>
  );
}

export default Registern;

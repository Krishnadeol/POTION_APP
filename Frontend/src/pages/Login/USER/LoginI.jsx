import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function LoginI() {
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
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation) {
      try {
        const { data } = await axios.post("http://localhost:5000/user/login", {
          email: cred.email,
          pass: cred.password,
        });

        if (data.success) {
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
    const { password } = cred;

    if (password.length === "") {
      toast.error("Password cannot be blank", tobj);
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
      \{" "}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <h1>Crowd App</h1>
        </div>

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

        <button type="submit">Login in</button>
        <span>
          Dont have an account ?<Link to="/ind_register">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </>
  );
}
export default LoginI;

import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaUser, FaStore } from "react-icons/fa";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  const [signInValue, setSignInValue] = useState("");
  const [signUpValue, setSignUpValue] = useState("");

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (signInValue === "0") {
      navigate("/ind_login");
    } else if (signInValue === "1") {
      navigate("/ngo_login");
    } else if (signInValue === "2") {
      navigate("/shop_login");
    }
  };

  const handleSignUpSubmit = (f) => {
    f.preventDefault();
    if (signUpValue === "3") {
      navigate("/ind_register");
    } else if (signUpValue === "4") {
      navigate("/ngo_register");
    } else if (signUpValue === "5") {
      navigate("/shop_register");
    }
  };

  useEffect(() => {
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const container = document.querySelector(".container");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");

    const handleSignUpClick = () => {
      container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      container.classList.remove("sign-up-mode");
    };

    const handleSignUpClick2 = () => {
      container.classList.add("sign-up-mode2");
    };

    const handleSignInClick2 = () => {
      container.classList.remove("sign-up-mode2");
    };

    sign_up_btn.addEventListener("click", handleSignUpClick);
    sign_in_btn.addEventListener("click", handleSignInClick);
    sign_up_btn2.addEventListener("click", handleSignUpClick2);
    sign_in_btn2.addEventListener("click", handleSignInClick2);

    return () => {
      sign_up_btn.removeEventListener("click", handleSignUpClick);
      sign_in_btn.removeEventListener("click", handleSignInClick);
      sign_up_btn2.removeEventListener("click", handleSignUpClick2);
      sign_in_btn2.removeEventListener("click", handleSignInClick2);
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="popUp">
        <button onClick={onClose} className="cross">
          <IoIosClose size={30} />
        </button>

        <div className="container">
          <div className="signin-signup">
            <form
              id="my-form"
              className="sign-in-form"
              onSubmit={handleSignInSubmit}
            >
              <h2 className="title">Sign in</h2>

              {/*Individal*/}
              <div className="input-field">
                <input
                  type="radio"
                  name="signIn"
                  value="0"
                  className="login-user"
                  onChange={(e) => setSignInValue(e.target.value)}
                />
                <label htmlFor="User">Individual</label>
                <FaUser className="ic login-icon" />
              </div>
              {/*NGO*/}
              <div className="input-field">
                <input
                  type="radio"
                  name="signIn"
                  value="1"
                  className="login-ngo"
                  onChange={(e) => setSignInValue(e.target.value)}
                />
                <label htmlFor="Ngo">Non Govt. Organization</label>
                <BiSolidBuildingHouse className="ic login-icon" />
              </div>
              {/*StoreOwner*/}
              <div className="input-field">
                <input
                  type="radio"
                  name="signIn"
                  value="2"
                  className="login-store"
                  onChange={(e) => setSignInValue(e.target.value)}
                />
                <label for="Store">StoreOwner</label>
                <FaStore className="ic login-icon" />
              </div>

              <input type="submit" value="Login" className="button" />
              {/*<button className="button">LogIn</button>*/}
              <p className="account-text">
                Don't have an account?
                <a href="#" id="sign-up-btn2">
                  Sign up
                </a>
              </p>
            </form>

            <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
              <h2 className="title">Sign up</h2>

              {/*Individual*/}
              <div className="input-field">
                <input
                  type="radio"
                  name="signUp"
                  value="3"
                  className="register-ngo"
                  onChange={(f) => setSignUpValue(f.target.value)}
                />
                <label htmlFor="User">Individual</label>
                <FaUser className="ic login-icon" />
              </div>
              {/*NGO*/}
              <div className="input-field">
                <input
                  type="radio"
                  name="signUp"
                  value="4"
                  className="register-ngo"
                  onChange={(f) => setSignUpValue(f.target.value)}
                />
                <label htmlFor="Ngo">Non Govt. Organization</label>
                <BiSolidBuildingHouse className="ic register-icon" />
              </div>
              {/*StoreOwner*/}
              <div className="input-field">
                <input
                  type="radio"
                  name="signUp"
                  value="5"
                  className="register-store"
                  onChange={(f) => setSignUpValue(f.target.value)}
                />
                <label for="Store">StoreOwner</label>
                <FaStore className="ic register-icon" />
              </div>

              <input type="submit" value="Sign up" className="button" />
              {/*<button className="button">SignUp</button>*/}
              <p className="account-text">
                Already have an account?{" "}
                <a href="#" id="sign-in-btn2">
                  Sign in
                </a>
              </p>
            </form>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Already joined?</h3>
                <p>
                  Your compassion fuels our mission, turning hunger into hope.
                  Thank you for lighting up lives with your generosity.
                </p>
                <button className="button" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <br />
              <img src="FoodSignIn.png" alt="" class="image" />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>Haven't joined Yet?</h3>
                <p>
                  Join us in feeding hope and nourishing hearts. Your kindness
                  can fill empty stomachs and bring smiles that last.
                </p>
                <button className="button" id="sign-up-btn">
                  SignUp
                </button>
              </div>
              <br />
              <img src="FoodSignUp.png" alt="" className="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

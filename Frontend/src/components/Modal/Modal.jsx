import React from 'react'
import {Link} from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import signUp from "../signUp/signUp.jsx"
import "./Modal.css";

const Modal = ({onClose}) => {

    return (
        <div className="Modal">
            <div className="popUp">


                <button onClick={onClose} className='cross'><IoIosClose size={30}/></button>

                <div className="container">
                    <div className="signin-signup">

                        <form action="" className="sign-in-form">
                            <h2 className="title">Sign in</h2>

                            <div className="input-field">
                              <i className="fas fa-user"></i>
                              {/*<input type="text" placeholder="Username" />*/}
                              <input type="radio" className="signIn" value="USER" id="signIn"/>
                              <label htmlFor="User">User</label>
                            </div>
                            <div className="input-field">
                              <i className="fas fa-lock"></i>
                              {/*<input type="password" placeholder="Password" />*/}
                              <input type="radio" className="signIn" value="NGO" id="signIn"/>
                              <label htmlFor="Ngo">ngo</label>
                            </div>
                            <div class="input-field">
                              <i class="fas fa-user"></i>
                              {/*<input type="text" placeholder="Username" />*/}
                              <input type="radio" className="signIn" value="STORE" id="signIn"/>
                              <label for="Store">StoreOwner</label>
                            </div>
                            <input type="submit" value="Login" class="btn" />
                
                            <p class="account-text">Don't have an account?<a href="#" id="sign-up-btn2">Sign up</a></p>
                        </form>

                        <form action="" class="sign-up-form">
                            <h2 class="title">Sign up</h2>

                            <div class="input-field">
                              <i class="fas fa-user"></i>
                              <input type="text" placeholder="Username" />
                            </div>
                            <div class="input-field">
                              <i class="fas fa-envelope"></i>
                              <input type="text" placeholder="Email" />
                            </div>
                            <div class="input-field">
                              <i class="fas fa-lock"></i>
                              <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Sign up" class="btn" />
                
                            <p class="account-text">Already have an account? <a href="#" id="sign-in-btn2">Sign in</a></p>
                        </form>

                    </div>
                    <div class="panels-container">
                        <div class="panel left-panel">
                            <div class="content">
                              <h3>Member of Brand?</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                              <button class="btn" id="sign-in-btn">Sign in</button>
                            </div>
                            <img src="Iskcon.png" alt="" class="image" />
                        </div>
                        <div class="panel right-panel">
                            <div class="content">
                              <h3>New to Brand?</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                              <button class="btn" id="sign-up-btn">Sign up</button>
                            </div>
                            <img src="PMPOSHAN.png" alt="" class="image" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Modal;
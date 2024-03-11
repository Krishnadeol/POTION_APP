import React from 'react' 
import './signUp.css'

const signUp = () => {
    return (
        <div className="container">
                    <div className="signin-signup">

                        <form action="" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
  
                            {/*Individal*/}
                            <div className="input-field">
                              <FaUser className="i" />
                              <input type="radio" className="signIn" value="USER" id="signIn"/>
                              <label htmlFor="User">User</label>
                            </div>
                            {/*NGO*/}
                            <div className="input-field">
                              <BiSolidBuildingHouse className="i" /> 
                              <input type="radio" className="signIn" value="NGO" id="signIn"/>
                              <label htmlFor="Ngo">ngo</label>
                            </div>
                            {/*StoreOwner*/}
                            <div className="input-field">
                              <FaStore className="i" />
                              <input type="radio" className="signIn" value="STORE" id="signIn"/>
                              <label for="Store">StoreOwner</label>
                            </div>

                            <input type="submit" value="Login" className="btn" />
                            <p className="account-text">Don't have an account?<a href="#" id="sign-up-btn2">Sign up</a></p>
                        </form>

                        <form action="" className="sign-up-form">
                            <h2 className="title">Sign up</h2>

                            {/*Individual*/}
                            <div className="input-field">
                              <FaUser className="i" />
                              <input type="text" placeholder="Username" />
                            </div>
                            {/*NGO*/}
                            <div className="input-field">
                              <BiSolidBuildingHouse className="i" /> 
                              <input type="text" placeholder="Email" />
                            </div>
                            {/*StoreOwner*/}
                            <div className="input-field">
                              <FaStore className="i" />
                              <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Sign up" className="btn" />
                
                            <p className="account-text">Already have an account? <a href="#" id="sign-in-btn2">Sign in</a></p>
                        </form>

                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                              <h3>Member of Brand?</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                              <button className="btn" id="sign-in-btn">Sign in</button>
                            </div>
                            <img src="Iskcon.png" alt="" class="image" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                              <h3>New to Brand?</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                              <button className="btn" id="sign-up-btn">Sign up</button>
                            </div>
                            <img src="PMPOSHAN.png" alt="" className="image" />
                        </div>
                    </div>
                </div>
    )}

export default signUp;
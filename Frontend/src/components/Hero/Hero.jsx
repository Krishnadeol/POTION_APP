import React from 'react';
import "./Hero.css";
import { useState } from 'react'
import Modal from "../Modal/Modal.jsx"
import { IoFastFood } from "react-icons/io5";
import Typewriter  from 'typewriter-effect';
import CountUp from 'react-countup';

const Hero = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <section className="hero-wrapper">

            <div className="paddings innerWidth flexCenter hero-container">
                {showModal && <Modal onClose={() => setShowModal(false)} />}
                
                {/* <!-- Left Side --> */}
                <div className="flexColStart hero-left">

                   <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>
                          Feeding <br />
                          Hope, Defeating <br /> Hunger
                        </h1>
                   </div>

                   <div className="flexColStart hero-des">
                        <span>Join us in the fight against hunger, providing food for all.</span>
                        <span>Offering food at reasonable price, turning waste into compassion.</span>
                   </div>

                   <div className="flexCenter Register">
                        <IoFastFood color="black" size="22" />
                        <div className="auto-type">
                            <Typewriter
                              options={{
                              strings: ['for NGOs', 'Store Owners', 'Individuals'],
                              autoStart: true,
                              loop: true,
                              }}
                            />
                        </div>
                        <button onClick={() => setShowModal(true)} className="button">Register</button>
                   </div>

                   <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8} end={12}/> <span>%</span>
                            </span>
                            <span className="secondaryText">
                                Waste Depreciated
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={18000} end={20000}/> <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Funded Programs
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8} end={20}/> <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Awards Winning
                            </span>
                        </div>
                   </div>

                </div>


                {/* <!-- Right side --> */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./FoodChildEat2.jpg" alt="Children Eating Food" />
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero

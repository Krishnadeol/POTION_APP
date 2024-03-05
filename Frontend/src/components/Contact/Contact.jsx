import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import './Contact.css'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

            {/* left side */}
            <div className="flexColStart c-left">
                <span className="orangeText">Contact Us</span>
                <span className="primaryText">Easy to Contact Us</span>
                <span className="secondaryText">Just like an act of charity binds us in unity, a conversation between two souls unites hearts.</span>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        
                        {/* mode A */}
                        <div className="flexColCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">+91 8852373098</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>

                        </div>
                        {/* mode B */}
                        <div className="flexColCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">+91 9298464308</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>

                        </div>
                    </div>
                    {/* second row */}
                    <div className="flexStart row">
                        
                        {/* mode A */}
                        <div className="flexColCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdMarkEmailRead size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Email</span>
                                    <span className="secondaryText">foodforall@mail.org</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Send Now</div>

                        </div>
                        {/* mode B */}
                        <div className="flexColCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaLocationDot size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Offline</span>
                                    <span className="secondaryText">Netaji Palace, Delhi</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Request Now</div>

                        </div>

                    </div>
                
                </div>
            </div>


            {/* right side */}
            <div className="c-right">
                <div className="img-con image-container">
                    <img src="./SmileChild.png" alt="Contact Us- Smile Child" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact
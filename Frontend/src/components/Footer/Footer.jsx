import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

          
            <div className="flexColStart f-left">
                <img src="./HelenaFoodShareLogo.png" alt="logo" width={100} />
                <span className="secondaryText">Our vision is to make a world free from Hunger.</span>
                <div className="i">
                    <FaFacebook size={25}/>
                    <FaSquareXTwitter size={25}/>
                    <FaInstagram size={25}/>
                    <FaLinkedin size={25}/>
                </div>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">Netaji Subhash Palace, New Delhi</span>
                <div className="flexCenter f-menu">
                    <a href="">Programs</a>
                    <a href="">Blogs</a>
                    <a href="">Donate Now</a>
                    <a href="">Get Food</a>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Footer
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
                    <FaFacebook size={25} className="Facebook" />
                    <FaSquareXTwitter size={25} className="Twitter" />
                    <FaInstagram size={25} className="Instagram" />
                    <FaLinkedin size={25} className="Linkedin" />
                </div>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">
                    <ul className="info-list">
                        <li>I</li>
                        <li>n</li>
                        <li>f</li>
                        <li>o</li>
                        <li>r</li>
                        <li>m</li>
                        <li>a</li>
                        <li>t</li>
                        <li>i</li>
                        <li>o</li>
                        <li>n</li>
                    </ul>
                </span>
                <span className="secondaryText">Netaji Subhash Palace, New Delhi</span>
                <div className="flexCenter f-menu">
                    <a href="" className="nav">Programs</a>
                    <a href="" className="nav">Blogs</a>
                    <a href="" className="nav">Donate Now</a>
                    <a href="" className="nav">Get Food</a>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Footer
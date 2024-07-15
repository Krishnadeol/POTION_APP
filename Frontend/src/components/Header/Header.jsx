import React, {useState} from 'react' 
import {BiMenuAltRight} from 'react-icons/bi'
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import OutsideClickHandler from "react-outside-click-handler";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Header.css'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles= (menuOpened) => {
        if(document.documentElement.clientWidth <= 800){
            return {right: !menuOpened && "-100%"}
        }
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container head">

                <img src="./HelenaFoodShareLogo.png" alt="logo" className="Logo" width={100} />

                <OutsideClickHandler onOutsideClick= { ()=> {setMenuOpened(false)}}>
                <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <AnchorLink href="#programs" className="nav">Programs</AnchorLink> 
                    <a href="" className="nav">Blogs</a>
                    <AnchorLink href="#about-us" className="nav">About us</AnchorLink>
                    <AnchorLink href="#contact-us" className="nav">Contact us</AnchorLink>
                    <a href="" className="nav">Donate Now</a>
                    <motion.button 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="but">
                        <a href="" className="but2">Get Food</a>
                    </motion.button>
                </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick= { () => setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30} />
                </div>

            </div>
        </section>
    )
}

export default Header;

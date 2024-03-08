import React, {useState} from 'react' 
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";
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
                <div className="flexCenter h-menu nav" style={getMenuStyles(menuOpened)}>
                    <a href="">Programs</a> 
                    <a href="">Blogs</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                    <a href="">Donate Now</a>
                    <button className="button">
                        <a href="">Get Food</a>
                    </button>
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

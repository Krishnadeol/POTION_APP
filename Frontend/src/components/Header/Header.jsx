import React from 'react' 
import './Header.css'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./HelenaFoodShareLogo.png" alt="logo" className="Logo" width={100} />

                <div className="flexCenter h-menu">
                    <a href="">Programs</a> 
                    <a href="">Blogs</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                    <a href="">Donate Now</a>
                    <button className="button">
                        <a href="">Get Food</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header

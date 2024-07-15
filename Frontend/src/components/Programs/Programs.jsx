import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Programs.css'
import data from '../../utils/slider.json'
import {sliderSettings} from "../../utils/common";
import {motion} from "framer-motion";
import transition from "../../transition"

const Programs = () => {
    return (
        <section className="r-wrapper" id="programs">
            <div className="paddings innerWidth r-container">

                <div className="r-head flexColStart">
                    <span className="orangeText">Popular</span>
                    <span className="primaryText">Funded Programs</span>
                </div>

                <Swiper {...sliderSettings} >
                    
                    <SliderButtons/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">

                                    <span className="r-card"> <img src={card.image} alt="FundSlider" /> </span>
                                    <span className="secondaryText r-amount">
                                        <span style={{color:"orange"}}>&#8377; </span> 
                                        <span>{card.amount}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                    <div className="text-center"><button className="button" style={{textalign: "center"}}>Donate Now</button></div>
                                    
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default transition(Programs);

const SliderButtons = () => {

    const swiper=useSwiper();
    return (
        <div className="flexCenter r-button">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};

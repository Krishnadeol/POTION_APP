import React, {useState} from "react";
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown, MdOutlineArrowDropDownCircle} from "react-icons/md";
import transition from "../../transition"
import "./WhatWeDo.css";
import data from "../../utils/accordion.jsx";


const WhatWeDo = () => {

    return (
        <section className="v-wrapper back">
            <div className="paddings innerWidth flexCenter v-container">

                {/* left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./FoodCharity.png" alt="Food Charity"/>
                    </div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="tt">Glimpse of</span>
                    <span className="primaryText">What We Do</span>
                    <span className="secondaryText">
                    Empower communities by promoting food security and sustainability.
                    <br/>
                    Experience the transformative power of fresh food.
                    </span>
                    
                    <Accordion
                    className="accordion" 
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    >
                        {
                            data.map((item, i) => {

                                const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordionButton">
                                                <AccordionItemState>
                                                    { ({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed") }
                                                </AccordionItemState>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primarytext">{item.heading}</span>
                                                <div className="flexCenter icon"><MdOutlineArrowDropDown size={20}/></div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                );

                            })}
                    </Accordion>
                </div>

            </div>
        </section>
    );
};

export default transition(WhatWeDo);
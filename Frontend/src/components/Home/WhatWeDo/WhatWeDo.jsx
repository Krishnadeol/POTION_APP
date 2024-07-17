import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import transition from "../../../transition";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants.jsx";
import "./WhatWeDo.css";
import data from "../../../utils/accordion.jsx";

const WhatWeDo = () => {
  return (
    <section className="v-wrapper back" id="about-us">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="v-left"
        >
          <div className="image-container">
            <img src="./FoodCharity.png" alt="Food Charity" />
          </div>
        </motion.div>

        {/* right side */}
        <div className="flexColStart v-right">
          <motion.span
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="glimpse"
          >
            Glimpse of
          </motion.span>
          <motion.span
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="primaryText weDo"
          >
            What We Do
          </motion.span>
          <motion.span
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="secondaryText weDo-para"
          >
            Empower communities by promoting food security and sustainability.
            <br />
            Experience the transformative power of fresh food.
          </motion.span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem className="accordionItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div className="flexCenter icon">{item.icon}</div>
                          <span className="primarytext">{item.heading}</span>
                          <div className="flexCenter icon">
                            {expanded ? (
                              <MdOutlineArrowDropDownCircle size={20} />
                            ) : (
                              <MdOutlineArrowDropDown size={20} />
                            )}
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

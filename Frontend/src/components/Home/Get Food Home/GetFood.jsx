import React from 'react'
import {motion} from "framer-motion"
import "./GetFood.css"

const GetFood = () => {
  return (
    <section className="getfoodnow">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get your Meal Now</span>
          <span className="secondaryText">We ensure no plates are left empty with our nourishing meals.</span>
          <motion.button 
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="but">
            <a href="" className="but2">Get Food</a>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default GetFood
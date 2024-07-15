import React from "react";
import Header from "../../components/Home/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import NGOs from "../../components/Home/NGOs/NGOs";
import Programs from "../../components/Home/Programs/Programs";
import WhatWeDo from "../../components/Home/WhatWeDo/WhatWeDo";
import Contact from '../../components/Home/Contact/Contact';
import GetFood from '../../components/Home/Get Food Home/GetFood';
import Curve from '../../components/Home/Curve/Curve';
import Footer from '../../components/Home/Footer/Footer';
import transition from "../../transition.jsx"
import './home.css'

function Home() {
  return (
    <div>
      <div className="App">
        <div>
          <Header />
          <Hero />
        </div>
        <NGOs />
        <Programs />
        <br />
        <WhatWeDo />
        <br/><br/>
        <Contact />
        <br/><br/>
        <GetFood />
        <br/><br/>
        <Curve />
        <Footer />
      </div>
    </div>
  );
}

export default transition(Home);

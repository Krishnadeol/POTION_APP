import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NGOs from "../../components/NGOs/NGOs";
import Programs from "../../components/Programs/Programs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Contact from '../../components/Contact/Contact';
import GetFood from '../../components/Get Food Home/GetFood.jsx';
import Curve from '../../components/Curve/Curve';
import Footer from '../../components/Footer/Footer';
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

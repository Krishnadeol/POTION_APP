import React from "react";
<<<<<<< HEAD
import Header from "../../components/Home/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import NGOs from "../../components/Home/NGOs/NGOs";
import Programs from "../../components/Home/Programs/Programs";
import WhatWeDo from "../../components/Home/WhatWeDo/WhatWeDo";
import Contact from '../../components/Home/Contact/Contact';
import GetFood from '../../components/Home/Get Food Home/GetFood';
import Curve from '../../components/Home/Curve/Curve';
import Footer from '../../components/Home/Footer/Footer';
=======
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NGOs from "../../components/NGOs/NGOs";
import Programs from "../../components/Programs/Programs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Contact from '../../components/Contact/Contact';
import GetFood from '../../components/Get Food Home/GetFood.jsx';
import Curve from '../../components/Curve/Curve';
import Footer from '../../components/Footer/Footer';
>>>>>>> 73428b200c74da968a42a31c7e60b8725e01116f
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

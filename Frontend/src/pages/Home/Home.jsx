import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NGOs from "../../components/NGOs/NGOs";
import Programs from "../../components/Programs/Programs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

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
      </div>
    </div>
  );
}

export default Home;

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NGOs from './components/NGOs/NGOs';
import Programs from './components/Programs/Programs';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import './App.css'

function App() {
  return (
   <div className="App">
      <div>
        <Header/>
        <Hero />
      </div>
      <NGOs/>
      <Programs/>
     <br/>
      <WhatWeDo />
   </div>
  );
}

export default App;

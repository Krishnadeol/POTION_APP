import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import NGOs from './components/NGOs/NGOs';
import Programs from './components/Programs/Programs';
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
   </div>
  );
}

export default App;

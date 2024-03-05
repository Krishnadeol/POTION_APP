import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registern from "./pages/Register/Ngo/Registern";
import RegisterI from "./pages/Register/INDIVISUAL/registerI";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ngo_register" element={<Registern />} />
          <Route path="/ind_register" element={<RegisterI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;

import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registern from "./pages/Register/Ngo/Registern";
import RegisterI from "./pages/Register/INDIVISUAL/RegisterI";
import RegisterS from "./pages/Register/Shop/RegisterS";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ngo_register" element={<Registern />} />
          <Route path="/ind_register" element={<RegisterI />} />
          <Route path="/shop_register" element={<RegisterS />} />
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

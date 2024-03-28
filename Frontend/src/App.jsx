import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterN from "./pages/Register/Ngo/Registern";
import RegisterI from "./pages/Register/INDIVISUAL/RegisterI";
import RegisterS from "./pages/Register/Shop/RegisterS";
import LoginN from "./pages/Login/NGO/LoginN";
import LoginI from "./pages/Login/USER/LoginI";
import LoginS from "./pages/Login/SHOP/LoginS";
import Allevents from "./pages/ngoevents/Allevents";
import Campaigns from "./pages/Campaigns/Campaigns";
import Home from "./pages/Home/Home";
import Volenteer from "./pages/volenteering/Volenteer";
import Verify from "./pages/Certification/Verify";

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
          <Route path="/ngo_login" element={<LoginN />} />
          <Route path="/ind_login" element={<LoginI />} />

          <Route path="/ngo_events" element={<Allevents />} />
          <Route path="/ngo_Campaigns" element={<Campaigns />} />

          <Route path="/ind_login" element={<LoginI />} />
          <Route path="/ind_register" element={<RegisterI />} />
          <Route path="/user_vol" element={<Volenteer />} />
          <Route path="/shop_login" element={<LoginS />} />

          <Route path="/shop_register" element={<RegisterS />} />

          <Route path="/ngo_verification" element={<Verify />} />
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

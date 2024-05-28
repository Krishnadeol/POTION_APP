import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterN from "./pages/Register/NGO/ngo_register";
import RegisterI from "./pages/Register/INDIVIDUAL/Individual_Register";
import RegisterS from "./pages/Register/Shop/shop_register";
import LoginN from "./pages/Login/NGO/ngo_login";
import LoginI from "./pages/Login/USER/user_login";
import LoginS from "./pages/Login/SHOP/shop_login";
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
          <Route path="/ngo_register" element={<RegisterN />} />
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

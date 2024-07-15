import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import upiqr from "upiqr";
import Sidebar from "../../components/NGO/sidebar/sidebar";
import Navbar from "../../components/NGO/navbar/navbar";
import "./campaign.css"


export default function Campaigns() {
  //All the functions, Modals, upi, etc. are shifted to Frontend/src/components/NGO/CampaignModal
  return (
    <div className="Campaign_Home">
      <Sidebar />
      <div className="Campaign_Home_Container">
        <Navbar />
        <br></br>
        CONTAINER
      </div>
    </div>
  );
}

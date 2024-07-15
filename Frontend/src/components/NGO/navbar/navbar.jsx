import React from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import CampaignModal from "../CampaignModal/CampaignModal";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>
        <div className="items">
          <div className="item">
            <CampaignModal />
          </div>
          <div className="item">
            <IoIosNotifications className="iconn" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <IoChatbubbleEllipsesSharp className="iconn" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
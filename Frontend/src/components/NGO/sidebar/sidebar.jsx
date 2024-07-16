import React from 'react'
import "./sidebar.css";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosExit } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { MdOutlinePsychology } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
/*import { DarkModeContext } from "../../context/darkModeContext";*/

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div style={{ textDecoration: "none" }}>
          <img src="./HelenaFoodShareLogo.png" alt="logo" className="Logo" width={80} />
        </div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <MdDashboard className="ico" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <div style={{ textDecoration: "none" }}>
            <li>
              <FaUser className="ico" />
              <span>Top Donors</span>
            </li>
          </div>
          <div style={{ textDecoration: "none" }}>
            <li>
              <FaStore className="ico" />
              <span>Programs</span>
            </li>
          </div>
          <li>
            <RiTeamFill className="ico" />
            <span>Team</span>
          </li>
          <li>
            <FaUserGraduate className="ico" />
            <span>Interns</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <FaChartBar className="ico" />
            <span>Stats</span>
          </li>
          <li>
            <IoIosNotifications className="ico" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MdSettingsSystemDaydream className="ico" />
            <span>Assign Tasks</span>
          </li>
          <li>
            <MdOutlinePsychology className="ico" />
            <span>Logs</span>
          </li>
          <li>
            <IoIosSettings className="ico" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <RiAccountCircleLine className="ico" />
            <span>Profile</span>
          </li>
          <li>
            <IoIosExit className="ico" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
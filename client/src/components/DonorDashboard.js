import React from "react";
import DonorSidebar from "./DonorSidebar";
//import Navbar from "./Navbar";
import "./ngoDashboard.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";







function DonorDashboard() {
  return (
    <div className="dashboard-main">
      
      <div className="dashboard-nav">
      <ul className="nav-menu-items" >
            <li className="nav-text">
              <Link to="/home">
              <FaIcons.FaEnvelopeOpenText />
                <span>My Donations </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
                <AiIcons.AiFillHome />
                <span>My Profile </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
                <IoIcons.IoIosPaper />
                <span>Reports</span>
              </Link>
            </li>
            
          </ul>
      </div>
      </div>
  );
}

export default DonorDashboard;
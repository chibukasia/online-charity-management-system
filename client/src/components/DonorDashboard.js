import React from "react";
import "./ngoDashboard.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link, Outlet, useParams } from "react-router-dom";








function DonorDashboard({user}) {
  return (
    <div className="dashboard-main">
      
      <div className="dashboard-nav">
      <ul className="nav-menu-items" >
            <li className="nav-text">
              <Link to="user_profile">
                <AiIcons.AiFillHome />
                <span>My Profile </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="edit_user_profile">
                <IoIcons.IoIosPaper />
                <span>Edit Profile</span>
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
      <div className="dashboard-container">
        <Outlet />
      </div>
      </div>
  );
}

export default DonorDashboard;
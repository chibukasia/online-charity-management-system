import React from "react";
import "./ngoDashboard.css";
import * as FaIcons from "react-icons/fa";
import { Link, Outlet, useParams } from "react-router-dom";


function DonorDashboard({user}) {
  return (
    <div className="dashboard-main">
      
      <div className="dashboard-nav">
      <ul className="nav-menu-items" >
            <li className="nav-text">
              <Link to="user_profile">
                <FaIcons.FaUser style={{width: "30px", height: "30px"}}/>
                <span>My Profile </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="edit_user_profile">
                <FaIcons.FaEdit style={{width: "30px", height: "30px"}}/>
                <span>Edit Profile</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="donor_table">
                <FaIcons.FaFileImage style={{width: "30px", height: "30px"}}/>
                <span>Donation Reports</span>
              </Link>
            </li>
            
          </ul>
      </div>
      <div className="dashboard-cards">
        <Outlet />
      </div>
      </div>
  );
}

export default DonorDashboard;
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./ngoDashboard.css"
import RequestCard from "./RequestCard";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link, Outlet, useParams } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="dashboard-main">
      
    <div className="dashboard-nav">
    <ul className="nav-menu-items" >
          <li className="nav-text">
            <Link to="all_ngo_requests">
            <FaIcons.FaEnvelopeOpenText />
              <span>All Requests </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="new_category_form">
              <AiIcons.AiFillHome />
              <span>Create New Category </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="admin_approved">
              <AiIcons.AiFillHome />
              <span> Admin Approved Requests</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="admin_pending">
              <IoIcons.IoIosPaper />
              <span>Admin Pending Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="admin_rejected">
              <IoIcons.IoMdPeople />
              <span>Admin Rejected Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="admin_table">
            <IoIcons.IoMdHelpCircle />
              <span>Donations</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="admin_reports">
              <IoIcons.IoMdPeople />
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

export default AdminDashboard
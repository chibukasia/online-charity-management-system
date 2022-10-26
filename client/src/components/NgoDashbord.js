import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./ngoDashboard.css"
import RequestCard from "./RequestCard";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

function NgoDashbord({user}) {
  return (
    <div className="dashboard-main">
      
      <div className="dashboard-nav">
      <ul className="nav-menu-items" >
            <li className="nav-text">
              <Link to="ngo_requests">
              <FaIcons.FaEnvelopeOpenText />
                <span>All Requests </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="approved">
                <AiIcons.AiFillHome />
                <span>Approved </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="pending">
                <IoIcons.IoIosPaper />
                <span>Pending</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="rejected">
                <IoIcons.IoMdPeople />
                <span>Rejected</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="donar_table">
              <IoIcons.IoMdHelpCircle />
                <span>Donations</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="ngo_reports">
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

export default NgoDashbord;

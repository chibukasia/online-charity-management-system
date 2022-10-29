import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./ngoDashboard.css";
import RequestCard from "./RequestCard";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link, Outlet, useParams } from "react-router-dom";

function NgoDashbord({ user, ngoRequests }) {

  const cardsDisplay = ngoRequests.map(request=>{
    return <RequestCard key={request.id} request={request}/>
  })
  return (
    <div className="dashboard-main">
      <div className="dashboard-nav">
        {}
        <ul className="nav-menu-items">
          <li className="nav-text">
            <Link to="ngo_requests" >
              <FaIcons.FaEnvelopeOpenText />
              <span>All Requests </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="donation_request_form" >
              <AiIcons.AiFillHome />
              <span>Create New Request </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="approved" >
              <AiIcons.AiFillHome />
              <span>Approved Requests</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="pending" >
              <IoIcons.IoIosPaper />
              <span>Pending Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="rejected" >
              <IoIcons.IoMdPeople />
              <span>Rejected Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="ngo_donations" >
              <IoIcons.IoMdHelpCircle />
              <span>Donations</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="ngo_reports" >
              <IoIcons.IoMdPeople />
              <span>Reports</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="edit_ngo" >
              <IoIcons.IoMdPeople />
              <span>Edit NGO</span>
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

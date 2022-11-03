import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./ngoDashboard.css";
import RequestCard from "./RequestCard";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
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
              <FaIcons.FaGlobeAfrica style={{width: "30px", height: "30px"}}/>
              <span>All Requests </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="donation_request_form" >
              <AiIcons.AiFillPlusCircle style={{width: "30px", height: "30px"}}/>
              <span>Create New Request </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="approved" >
              <FcIcons.FcApproval style={{width: "30px", height: "30px"}}/>
              <span>Approved Requests</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="pending" >
              <MdIcons.MdPendingActions style={{width: "30px", height: "30px"}}/>
              <span>Pending Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="rejected" >
              <FcIcons.FcDisapprove style={{width: "30px", height: "30px"}}/>
              <span>Rejected Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="ngo_donations" >
              <FaIcons.FaHands style={{width: "30px", height: "30px"}}/>
              <span>Donations</span>
            </Link>
          </li>
         
          <li className="nav-text">
            <Link to="edit_ngo" >
              <FaIcons.FaEdit style={{width: "30px", height: "30px"}}/>
              <span>Edit NGO</span>
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

export default NgoDashbord;

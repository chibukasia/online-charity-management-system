import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./ngoDashboard.css";
import RequestCard from "./RequestCard";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link, Outlet, useParams } from "react-router-dom";

function NgoDashbord({ user, ngoRequests }) {
  const [shoAll, setShowAll] = useState(true);

  // show or hide requests
  // function handShow(){
  //   setShowAll(true)
  // }

  function hideShow() {
    setShowAll(false);
  }

  const cardsDisplay = ngoRequests.map(request=>{
    return <RequestCard key={request.id} request={request}/>
  })
  return (
    <div className="dashboard-main">
      <div className="dashboard-nav">
        {}
        <ul className="nav-menu-items">
          <li className="nav-text">
            <Link to="ngo_requests" onClick={hideShow}>
              <FaIcons.FaEnvelopeOpenText />
              <span>All Requests </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="donation_request_form" onClick={hideShow}>
              <AiIcons.AiFillHome />
              <span>Create New Request </span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="approved" onClick={hideShow}>
              <AiIcons.AiFillHome />
              <span>Approved Requests</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="pending" onClick={hideShow}>
              <IoIcons.IoIosPaper />
              <span>Pending Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="rejected" onClick={hideShow}>
              <IoIcons.IoMdPeople />
              <span>Rejected Request</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="ngo_donations" onClick={hideShow}>
              <IoIcons.IoMdHelpCircle />
              <span>Donations</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="ngo_reports" onClick={hideShow}>
              <IoIcons.IoMdPeople />
              <span>Reports</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="edit_ngo" onClick={hideShow}>
              <IoIcons.IoMdPeople />
              <span>Edit NGO</span>
            </Link>
          </li>
        </ul>
      </div>
      {shoAll ? (
        <div className="dashboard-container">
          {cardsDisplay}
        </div>
      ) : (
        <div className="dashboard-container">
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default NgoDashbord;

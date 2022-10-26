import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./ngoDashboard.css"
import RequestCard from "./RequestCard";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

function NgoDashbord({user}) {

  const [ngoRequests, setNgoRequests] = useState([])
  const [errors, setErrors] = useState([])


  useEffect(()=>{
    fetch("/ngo_requests")
    .then(res=>{
      if(res.ok){
        res.json().then(data=>setNgoRequests(data))
      }else{
        res.json().then(err=>setErrors(err.errors))
      }
    })
  },[])

  
  const cardsDisplay = ngoRequests.map(request=>{
    return <RequestCard key={request.id} request={request}/>
  })
  return (
    <div className="dashboard-main">
      
      <div className="dashboard-nav">
      <ul className="nav-menu-items" >
            {/* <li className="navbar-toggle">
              <Link to="#" className="nav-text">
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
            <li className="nav-text">
              <Link to="/home">
              <FaIcons.FaEnvelopeOpenText />
                <span>All Requests </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
                <AiIcons.AiFillHome />
                <span>Pending </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
                <IoIcons.IoIosPaper />
                <span>Approved</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
                <IoIcons.IoMdPeople />
                <span>Rejected</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
              <IoIcons.IoMdHelpCircle />
                <span>Donations</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/home">
                <IoIcons.IoMdPeople />
                <span>Reports</span>
              </Link>
            </li>
          </ul>
      </div>
      <div className="dashboard-container">
        {cardsDisplay}
      </div>
    </div>
  );
}

export default NgoDashbord;

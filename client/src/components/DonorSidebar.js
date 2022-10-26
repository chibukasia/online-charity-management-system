import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
//import { SidebarData } from './SidebarData';
import "./Navbar.css";
import { IconContext } from "react-icons";

function DonorSidebar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
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
                <IoIcons.IoMdPeople />
                <span>Reports</span>
              </Link>
            </li>

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default DonorSidebar;
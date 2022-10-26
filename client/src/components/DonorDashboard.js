import React from "react";
import DonorSidebar from "./DonorSidebar";
//import Navbar from "./Navbar";
import "./ngoDashboard.css"
function DonorDashboard() {
  return (
    <div className="dashboard-main">
      
        <DonorSidebar />
      

      <div className="dashboard-container"></div>
    </div>
  );
}

export default DonorDashboard;
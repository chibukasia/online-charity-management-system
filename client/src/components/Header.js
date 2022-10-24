import React from "react";
import header from "../assets/img/header-bg.jpg"

function Header() {
  return (
    <div id = "header">
      <h3 style={{fontStyle: "italic", paddingTop: "10px", color: "#fff"}} >KENYA'S BEST </h3>
      <h1 style={{paddingTop: "50px", color: "#fff"}}>CROWDFUNDING CAMPAIGN</h1>
      <button type="button">LEARN MORE</button>
    </div>
  );
}

export default Header;

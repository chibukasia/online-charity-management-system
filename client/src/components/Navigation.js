import React from 'react'
import logo from '../assets/img/navbar-logo.png';
import {Link} from 'react-router-dom'
//This is the navigation component
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top"><img className="navbar-brand-logo" src={logo} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item"><a className="nav-link" href="#services">How it works</a></li>
                <Link className="nav-item"><a className="nav-link" to="/portfolio">Featured Campaigns</a></Link>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Navigation
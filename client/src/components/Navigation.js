import React from 'react'
import logo from '../assets/img/logo.png';
import {Link } from 'react-router-dom'
//This is the navigation component


function Navigation({user, setUser}) {

  // Handle logout or delete user session 
  function handleLogout(){
    fetch("/user_logout",{
      method: "DELETE"
    })
    .then(res=>{
      if(res.ok){
        res.json().then(()=>setUser(null))
      }else{
        console.log("Can't log out")
      }
    })
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand" to="/"><img className="navbar-brand-logo" src={logo} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                {/* <Link className="nav-item" to= '/workings'>How it works</Link>
                <Link className="nav-item" to='/portfolio'>Featured Campaigns</Link>
                <Link className="nav-item" to='/about'>About</Link> */}
                {user ?(
                  <Link className="nav-item" to='/'>Log Out</Link>
                ):(
                  <Link className="nav-item" to='/login' onClick={handleLogout}>Sign-In/Up</Link>
                )}
                
                

              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Navigation
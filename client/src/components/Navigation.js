import React from 'react'
import logo from '../assets/img/logo.png';
import {Link } from 'react-router-dom'
import MyImage from '../assets/img/avatar.png'

function Navigation({user, setUser, admin, setAdmin, token}) {

  // Handle logout or delete user session 
  function handleLogout(){
    if (user){
    // fetch("/user_logout", { method: "DELETE" }).then((r) => {
    //   if (r.ok) {
    //     setUser(null);
    //   }
    // });
    setUser(null);
    localStorage.removeItem("jwt")
  }else if (admin){
    // fetch("/admin_logout", { method: "DELETE" }).then((r) => {
    //   if (r.ok) {
    //     setAdmin(null);
    //   }
    // });
    setAdmin(null);
    localStorage.removeItem("jwt")
    
  }else{
    return null
  }

  
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav" >
          <div className="container">
            <Link className="navbar-brand" to="/"><img className="navbar-brand-logo" src={logo} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                
                
                <Link className="nav-item" to='/' >Home</Link>
                <a className="nav-item" href='#aboutus'>About Us</a>
                <a className="nav-item" href='#how-it-works'>How it works</a>
                <a className="nav-item" href='#fundraises'>Campaigns</a>
                {user || admin ?(
                <>                 
                  <Link className='nav-item' to='/home'>Fundraises</Link>
                  <Link className="nav-item" to='/'  onClick={handleLogout}>Log Out</Link>
                  <Link className='nav-item' to='/donor_dashboard/user_profile'> <img src={MyImage} title="View Profile" style={{width: "25px", height: "25px", borderRadius: "50%"}}/></Link>
                </>
                  
                ):(
                  <>
                    <Link className="nav-item" to='/login'>Sign-In/Up</Link>
                  </>
                  
                )}
                
                

              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Navigation
import "./Profile.css"
import './styles/Loader.css'
import React, { useState } from "react";


const UserProfile = ({user}) => {
let name= ""
if (user ) {
  name= `${user.first_name} ${user.last_name}`
  return (  
    <div className="user-card animate-bottom">
      <h1>Name: {name}</h1> 
      <p> Email: {user.email} </p>
      <p>Username: {user.username}</p>
      <p>Role: {user.role}</p>
      <p>Phone: {user.phone_number}</p>
      <p><button type="button" className="user-button">Delete Profile</button></p>
    
    </div>
        );

}
else {
  return (
    <div className="loader"></div>
  )
}

}
 
export default UserProfile;
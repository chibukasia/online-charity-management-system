import "./Profile.css"
import React, { useState } from "react";


const UserProfile = ({user}) => {
let name= ""
if (user) {
  console.log(user)
  name= `${user.first_name} ${user.last_name}`
  return (  
    <div className="card">
      <h1>{name}</h1> 
      <p> {user.email} </p>
      <p>{user.username}</p>
      <p>{user.role}</p>
      <p>{user.phone_number}</p>
      <p><button>Delete Profile</button></p>
    
    </div>
        );

}
else {
  return (
    <h1>Loading.....</h1>
  )
}

}
 
export default UserProfile;
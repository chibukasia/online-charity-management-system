import "./Profile.css"
import React, { useState } from "react";


const UserProfile = () => {



return (  
<div className="card">
  <h1>Name</h1>
  <p> Email </p>
  <p>Username</p>
  <p>Password</p>
  <p>Role</p>
  <p><button>Edit Profile</button></p>
  <p><button>Delete Profile</button></p>

</div>
    );
}
 
export default UserProfile;
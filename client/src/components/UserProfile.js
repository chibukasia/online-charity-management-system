import "./Profile.css"
import React, { useState } from "react";


const UserProfile = () => {



    return (  
    <div className="card">
        <h1>Name</h1>
  <p className="title">Email</p>
  <p>Role</p>
  <p><button>Edit Profile</button></p>
  <p><button>Delete Profile</button></p>

</div>
    );
}
 
export default UserProfile;
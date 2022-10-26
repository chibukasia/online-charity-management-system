import "./Profile.css"



const EditUserProfile = () => {
    return ( 
      <div>
        <div className="form-floating">
        <input type="name" className="form-control" id="floatingName" placeholder="Enter Name..." />
        <label htmlFor="floatingName">First Name</label>
        </div>
        <div className="form-floating">
        <input type="name" className="form-control" id="floatingName" placeholder="Enter Name..." />
        <label htmlFor="floatingName">Second Name</label>
        </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password Confirmation</label>
        </div>
        <div className="form-floating">
        <button type="button" >Update Details</button>
        </div>

    </div>
     );
}
 
export default EditUserProfile;
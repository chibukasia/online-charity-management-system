import "./Profile.css"



const EditUserProfile = ({user}) => {
    return ( 
      <div>
        <form>
        <div className="form-floating">
        <input type="name" className="form-control" id="floatingName" value= {user.first_name} />
        <label htmlFor="floatingName">First Name</label>
        </div>
        <div className="form-floating">
        <input type="name" className="form-control" id="floatingName" value= {user.last_name}/>
        <label htmlFor="floatingName">Second Name</label>
        </div>
        <div className="form-floating">
        <input type="name" className="form-control" id="floatingName" value= {user.username}/>
        <label htmlFor="floatingName">Username</label>
        </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" value={user.email} />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" value="" />
        <label htmlFor="floatingPassword">New Password</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" value="" />
        <label htmlFor="floatingPassword">Confirm New Password </label>
        </div>
        <div className="form-floating">
        <button type="submit" >Update Details</button>
        </div>
        </form>

    </div>
     );
}
 
export default EditUserProfile;

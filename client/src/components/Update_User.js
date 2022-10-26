import "./Profile.css"



const EditUserProfile = () => {
    return ( 
      <div>
        <form>
        <div className="form-floating">
        <input type="name" className="form-control" id="floatingName" value="" />
        <label htmlFor="floatingName">First Name</label>
        </div>
        <div className="form-floating">
        <input type="name" className="form-control" id="floatingName" value="" />
        <label htmlFor="floatingName">Second Name</label>
        </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" value="" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" value="" />
        <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" value="" />
        <label htmlFor="floatingPassword">Password Confirmation</label>
        </div>
        <div className="form-floating">
        <button type="submit" >Update Details</button>
        </div>
        </form>

    </div>
     );
}
 
export default EditUserProfile;

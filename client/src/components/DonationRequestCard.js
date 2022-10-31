import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import DonationModal from "./DonationModal";

function DonationRequestCard({request}) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate()

  function handleViewDetails(){
      // Add the functionility to redirect to details page if the user is in session
      navigate(`/donation_request_details/${request.id}`)
  }

  // Calcutate the percentage raised 
  const raisedPercentage = Math.floor((request.amount_raised / request.target_amount) * 100)

  // set show model to true to show the modal
  function handleShow() {
    setModalShow(true);
  }

  // set show model to false to hide the modal
  function handlHide() {
    setModalShow(false);
  }

  return (
    <div className="card"  onClick={handleViewDetails}>
      <img src={request.image_url} className="card-img-top" alt="..." style={{height: "350px"}} />
      <div className="card-body">
        <h5 className="card-title">{request.ngo.organization_name}</h5>
        <h5 className="card-title">{request.title}</h5>
        <h6 className="card-title">{request.category.category_name.charAt(0).toUpperCase() + request.category.category_name.slice(1)}</h6>
        <p className="card-text">
          {request.summary}
          <Link to={`/donation_request_details/${request.id}`} style={{color: "blueviolet", fontSize: "18px"}}>View details</Link>
        </p>
        <p>Amount Raised - Ksh: {request.amount_raised}</p>
        <p>Target Amount - Ksh: {request.target_amount}</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: `${raisedPercentage}%`}}
            aria-valuenow={raisedPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {raisedPercentage}%
          </div>
        </div>
        <button className="btn btn-primary" id="donate-btn" onClick={handleShow}>
          Donate
        </button>
        <DonationModal show={modalShow} onHide={handlHide} request={request}/>
      </div>
    </div>
  );
}

export default DonationRequestCard;

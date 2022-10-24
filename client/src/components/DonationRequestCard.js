import React from "react";

function DonationRequestCard({request}) {
  function handleViewDetails(){
      // Add the functionility to redirect to details page if the user is in session
  }

  // Calcutate the percentage raised 
  const raisedPercentage = Math.floor((request.amount_raised / request.target_amount) * 100)

  return (
    <div className="card"  onClick={handleViewDetails}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{request.ngo.organization_name}</h5>
        <h5 className="card-title">{request.title}</h5>
        <h6 className="card-title">{request.category.category_name}</h6>
        <p className="card-text">
          {request.summary}
          <a href="/">View details</a>
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
        <a href="#" className="btn btn-primary" id="donate-btn">
          Donate
        </a>
      </div>
    </div>
  );
}

export default DonationRequestCard;

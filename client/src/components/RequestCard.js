import React from "react";

function RequestCard({request}) {
  return (
    <div className="card" id="card">
      <img src={request.image_url} className="card-img-top" alt={request.title} style={{height: "18rem"}} />
      <div className="card-body">
        <h5 className="card-title">{request.title}</h5>
        <p className="card-text">
        {request.summary}
        </p>
        <a href="#" className="btn btn-primary">
          View details
        </a>
      </div>
    </div>
  );
}

export default RequestCard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import RequestDetailsModal from "./RequestDetailsModal";
import Button from "react-bootstrap/Button";

function RequestCard({ request }) {
  // set the state of the modal
  const [modalShow, setModalShow] = useState(false);

  // set show model to true to show the modal
  function handleShow() {
    setModalShow(true);
  }

  // set show model to false to hide the modal
  function handlHide() {
    setModalShow(false);
  }

  return (
    <div className="card" id="card">
      <img
        src={request.image_url}
        className="card-img-top"
        alt={request.title}
        style={{ height: "18rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{request.title}</h5>
        <p className="card-text">{request.summary}</p>

        <button type="button" onClick={handleShow} className="req-card-btn">
          View Details
        </button>
        <RequestDetailsModal show={modalShow} onHide={handlHide} request={request} />
      </div>
    </div>
  );
}

export default RequestCard;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "./styles/ProgressBar";

function AdminDetailsModal(props) {

  const [updatedData, setUpdatedData] = useState({
    title: props.request.title,
    target_amount: props.request.target_amount,
    amount_raised: props.request.amount_raised,
    description: props.request.description,
    status: props.request.status, 
    open: props.request.open 
  })
  // calculate the percentage of amount donated
  const percentage = Math.floor(
    (props.request.amount_raised / props.request.target_amount) * 100
  );
  // set the background color based on percentage
  let bgcolor = "";
  if (percentage <= 25) {
    bgcolor = "red";
  } else if (percentage > 25 && percentage <= 50) {
    bgcolor = "yellow";
  } else if (percentage > 50 && percentage <= 75) {
    bgcolor = "#DAF7A6";
  } else {
    bgcolor = "#0A7510";
  }

  // Set the state as open or Closed
  let state = "";
  let divColor = "";
  if (props.request.open === true) {
    state = "Open";
    divColor = "open";
  } else {
    state = "Closed";
    divColor = "closed";
  }

  // Capitalize the string
  // const capitalizedStatus =
  //   props.request.status.charAt(0).toUpperCase() +
  //   props.request.status.slice(1);
  
  const url = `/donation_requests/${props.request.id}`
  // Update rejected request
  function handleReject(){
      fetch(url,{
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              status: "rejected",
              open: false
          })
      }).then(res=>res.json())
      .then(data=>{
          const updatedRequests = props.donationrequests.map(req=>{
              if (req.id == data.id){
                  return data
              }else{
                  return req 
              }
          })
          console.log(data)
          props.setdonationrequests(updatedRequests)
      })
  }


  // Update approved status
  function handleApprove(){
    fetch(url,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: "approved",
            open: true
        })
    }).then(res=>res.json())
    .then(data=>
      {
        const updatedRequets = props.donationrequests.map(req=>{
            if (req.id == data.id){
                return data
            }else{
                return req 
            }
        })
        props.setdonationrequests(updatedRequets)
    })
}


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{props.request.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {props.request.status == "pending" || props.request.status == "rejected"?<button type="button" className="approve-btn" onClick={handleApprove}>Approve</button> : null}
          {props.request.status == "pending" || props.request.status == "approved"?<button type="button" className="reject-btn" onClick={handleReject}>Reject</button> : null}
          <h5>Category</h5>
          <p>
            {props.request.category.category_name.charAt(0).toUpperCase() +
              props.request.category.category_name.slice(1)}
              
          </p>
          <h5>Date</h5>
          <p>{new Date(props.request.created_at).toLocaleDateString()}</p>
          <h5>Amount Raised:</h5>
          <p>KSH {props.request.amount_raised}</p>
          <h5>Target Amount:</h5>
          <p>KSH {props.request.target_amount}</p>
          <h5>Status:</h5>
          <p>{props.request.status.charAt(0).toUpperCase() + props.request.status.slice(1)}</p>
          <h5>State:</h5>
          <div className={divColor}>
            {state} <i className={"fa fa-check-circle"} style={{ color: "white" }}></i>
          </div>
          <h4>Progress Status</h4>
          <ProgressBar bgcolor={bgcolor} progress={percentage} height={30} />
          <h4>Request Description</h4>
          <p>{props.request.description}</p>
          <h5>Supporting Image</h5>
          <img src={props.request.image_url} style={{ width: "400px" }} />
          <h5>Bank Statement</h5>
          <a
            href={props.request.bank_statement_url}
            target="_blank"
            style={{ color: "blue" }}
          >
            View Bank Statement
          </a>
          <hr />
          <h4>Organization Details</h4>
          <h2>{props.request.ngo.organization_name}</h2>
          <h5>Email</h5>
          <p>{props.request.ngo.organization_email}</p>
          <h5>Phone Number</h5>
          <p>{props.request.ngo.organization_phone_number}</p>
          <h5>Address</h5>
          <p>{props.request.ngo.address}</p>
          <h5>Registration Number</h5>
          <p>{props.request.ngo.registration_number}</p>
          <h5>Organization Description</h5>
          <p>{props.request.ngo.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdminDetailsModal;

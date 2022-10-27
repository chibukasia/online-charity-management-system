import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from './styles/ProgressBar';
//Implemented a modal window on the Portfolio section
function RequestDetailsModal(props) {

  // calculate the percentage of amount donated
  const percentage = Math.floor((props.request.amount_raised / props.request.target_amount) * 100)

  // set the background color based on percentage
  let bgcolor = ''
  if (percentage <= 25){
    bgcolor = "red"
  }else if (percentage >25 && percentage <= 50){
    bgcolor = "yellow"
  }else if (percentage >50 && percentage <= 75){
    bgcolor = '#DAF7A6'
  }else{
    bgcolor='#0A7510'
  }

  // Set the state as open or Closed
  let state=''
  let divColor = ''
  if(props.request.open===true){
    state = "Open"
    divColor = "open"
  }else{
    state="Closed"
    divColor = "open"
  }

  // Capitalize the string
  // const capitalizedStatus = props.request.status.charAt(0).toUpperCase() + props.request.status.slice(1) 

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
          {props.request.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Category</h5>
        <p>{props.request.category.category_name}</p>
        <h5>Amount Raised:</h5>
        <p>KSH {props.request.amount_raised}</p>
        <h5>Target Amount:</h5>
        <p>KSH {props.request.target_amount}</p>
        <h5>Status:</h5>
        {/* <p>{capitalizedStatus}</p> */}
        <h5>State:</h5>
        <div className={divColor}>{state}<i className={"fa fa-check-circle"} style={{color:"white"}}></i></div>
        <h4>Progress Status</h4>
        <ProgressBar bgcolor={bgcolor} progress={percentage}  height={30}/>
        <h4>Request Description</h4>
        <p>
          {props.request.description}
        </p>
        {/* <h5>Supporting Image</h5>
        <img src={props.request.image_url} style={{width:"400px"}}/> */}
        <h5>Bank Statement</h5>
        <a href={props.request.bank_statement_url} target="_blank">View Bank Statement</a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RequestDetailsModal 
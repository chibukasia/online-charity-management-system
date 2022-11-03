import React, { useState, useRef } from "react";
//import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { FormField, Error, Input, Button, Label } from "./styles";
import BrainTreeDropin from "./BrainTreeDropin";

function DonationModal(props) {
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState("");
  const [showBraintreeDropIn, setShowBraintreeDropIn] = useState(false);

  const formReset = useRef();
  // calculate the percentage of amount donated
  const percentage = Math.floor(
    (props.request.amount_raised / props.request.target_amount) * 100
  );

  let newAmount = props.request.amount_raised;

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

  // Submit form data
  function handleSubmit(e) {
    e.preventDefault();

    fetch("/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify({
        amount: data,
        donation_request_id: props.request.id,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((donation) => {
          props.setDonations([...props.donations, donation]);
          formReset.current.reset();
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });

    let newData = (newAmount = newAmount + parseInt(data));
    fetch(`/donation_requests/${props.request.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify({
        amount_raised: newAmount,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const updatedRequests = props.donationRequests.map((req) => {
            if (req.id == data.id) {
              return data;
            } else {
              return req;
            }
          });

          props.setDonationRequests(updatedRequests);
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
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
          {props.request.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Donate</h4>
        <form onSubmit={handleSubmit} ref={formReset}>
          <FormField>
            {errors.map((err) => {
              return <Error key={err}>{err}</Error>;
            })}
          </FormField>
          <FormField>
            <Label htmlFor="amount">Enter Amount in KSH</Label>
            <Input
              type="number"
              name="amount"
              id="amount"
              onChange={(e) => setData(e.target.value)}
            />
            <Button type='submit'>Donate</Button>
            <Button type='submit'
              onClick={() => {
                setShowBraintreeDropIn(true);
              }}
              disabled={showBraintreeDropIn}
            >
              Pay With Visa
            </Button>
          </FormField>
        </form>
        {/* <Button
          onClick={() => {setShowBraintreeDropIn(true)}}
          disabled={showBraintreeDropIn}
          >Donate</Button> */}
        <BrainTreeDropin
          show={showBraintreeDropIn}
          onPaymentCompleted={() => {
            setShowBraintreeDropIn(false);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
export default DonationModal;

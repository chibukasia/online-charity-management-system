import React, {useState} from "react";
import { useParams } from "react-router-dom";
import DonationModal from "./DonationModal";
import ProgressBar from "./styles/ProgressBar";
import './styles/Loader.css'

function DonationRequestPage({ngoRequests, setDonations, donations, donationRequests, setDonationRequests}) {
  //use state
  const [donationRequest, setDonationRequest] = useState([])
  const [errors, setErrors] = useState([])
  const params = useParams()
  const [modalShow, setModalShow] = useState(false);

  //console.log(params)

  const request = ngoRequests.find(req=>req.id == params.id)
  // console.log(request)

  if(request){
    let percentage = Math.floor((request.amount_raised / request.target_amount) * 100)
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

  // set show model to true to show the modal
  function handleShow() {
    setModalShow(true);
  }

  // set show model to false to hide the modal
  function handlHide() {
    setModalShow(false);
  }
  
  return (
    <div className="form-div">
      <div>
        <h3>Donation Request Details</h3>
        <hr/>
        <h2>{request.title}</h2>
      </div>
      <div className="category">
      <div>
        <button type="button" onClick={handleShow}>Donate</button>
      </div>
        <h4>category: {request.category.category_name}</h4>
        <h5>Target Amount:</h5>
        <p>KSH {request.target_amount}</p>
        <h5>Amount Raised:</h5>
        <p>KSH {request.amount_raised}</p>
        <h4>Progress Status</h4>
        <ProgressBar bgcolor={bgcolor} progress={percentage}  height={30}/>
      </div>
      <div className="request">
        <h3>Request Description</h3>
        <p>
          {request.description}
        </p>
        <h5>Supporting Image</h5>
        <img src={request.image_url} alt={request.title} style={{width: "450px", height: "450px"}}/>
        <hr/>
        <hr/>
      </div>
      <div>
        <h2>Organization Details</h2>
        <h1>{request.ngo.organization_name}</h1>

        <h5>Our Email:</h5>
        <p>{request.ngo.organization_email}</p>
        <h5>Our Telephone-line:</h5>
        <p>{request.ngo.organization_phone_number}</p>
        <h5>Our Address: </h5>
        <p>{request.ngo.address}</p>
      </div>
      <DonationModal 
        show={modalShow} 
        onHide={handlHide} 
        request={request} 
        donations={donations} 
        setDonations={setDonations}
        donationRequests={donationRequests} 
        setDonationRequests={setDonationRequests}
        />
    </div>
  );
  }
  else{
    return <div className="loader"></div>
  }
}

export default DonationRequestPage;

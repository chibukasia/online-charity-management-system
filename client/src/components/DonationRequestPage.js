import React, {useEffect, useState} from "react";

function DonationRequestPage() {
  //use state
  const [donationRequest, setDonationRequest] = useState([])
  const [errors, setErrors] = useState([])

  //get donation request
  useEffect(() =>{
    fetch("/ngo_requests")
    .then(res=>{
      if (res.ok){
        res.json().then(data=>setDonationRequest(data))
      }else{
        res.json().then(err=>setErrors(err.errors))
      }
    })
  },[])
  return (
    <div className="organization">
      <div>
        <h1>Doing it</h1>
      </div>
      <div className="category">
        <h1>Social Services</h1>
      </div>
      <div className="request">
        <h1>Fund the kibera law-suit against pollution</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h5>Target Amout: 700,000</h5>
        <h5>Amount Raised: 203,000</h5>
      </div>
      <div>
        <h2>Wakili Organization</h2>

        <h6>Our email: wakiliorg@gmail.com</h6>
        <h6>Our telephone-line: 641-595-34930</h6>
        <h6>Our address: 3407 Park Boulevard, Deep River</h6>
      </div>
    </div>
  );
}

export default DonationRequestPage;

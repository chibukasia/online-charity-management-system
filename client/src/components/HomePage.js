import React, { useEffect, useState } from "react"; 
import DonationRequestCard from "./DonationRequestCard";

function HomePage(){ 
    // use states
    const [approvedRequests, setApprovedRequests] = useState([])
    const [errors, setErrors] = useState([])

    // Get all approved requests
    useEffect(()=>{
        fetch("/approved_open_requests")
        .then(res=>{
            if (res.ok){
                res.json().then(data=>setApprovedRequests(data))
            }else{
                res.json().then(err=>setErrors(err.errors))
            }
        })
    },[])

    // Map through the approved requests to the donation request cards 
    const cardsDisplay = approvedRequests.map(request=>{
        return <DonationRequestCard key={request.id} request={request} />
    })
    return(
        <div className="landing-page">
            
            <h2>Ongoing Fundraises</h2>
            <div className="landing-page-cards">
                {cardsDisplay}
            </div>
        </div>
    )
}

export default HomePage
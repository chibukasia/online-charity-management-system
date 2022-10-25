import React, { useEffect, useState } from "react"; 
import Header from "./Header";
import DonationRequestCard from "./DonationRequestCard";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
function LandingPage(){ 
    // use states
    const [latestRequests, setLatestRequests] = useState([])
    const [errors, setErrors] = useState([])

    // Get all the latest approved requests
    useEffect(()=>{
        fetch("/latest_approved_requests")
        .then(res=>{
            if (res.ok){
                res.json().then(data=>setLatestRequests(data))
            }else{
                res.json().then(err=>setErrors(err.errors))
            }
        })
    },[])

    // Map through the the latests requests to the donation request cards 
    const cardsDisplay = latestRequests.map(request=>{
        return <DonationRequestCard key={request.id} request={request} />
    })
    return(
        <div className="landing-page">
            <Header />
            <HowItWorks />
            <h2>Ongoing Fundraises</h2>
            <div className="landing-page-cards">
                {cardsDisplay}
            </div>
            <AboutUs/>
        </div>
    )
}

export default LandingPage
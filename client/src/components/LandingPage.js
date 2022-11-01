import React, { useEffect, useState } from "react"; 
import Header from "./Header";
import DonationRequestCard from "./DonationRequestCard";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
function LandingPage({token}){ 
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
        return <DonationRequestCard key={request.id} request={request} token={token}/>
    })
    return(
        <div className="landing-page" id="landingpage">
            <Header />
            <div id="how-it-works">
              <HowItWorks />
            </div>
            <h2 id="fundraises">Ongoing Fundraises</h2>
            <div className="landing-page-cards">
                {cardsDisplay}
            </div>
            <div id="aboutus">
                <AboutUs/>
            </div>
            
        </div>
    )
}

export default LandingPage
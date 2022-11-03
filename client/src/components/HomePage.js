import React, { useEffect, useState } from "react"; 
import DonationRequestCard from "./DonationRequestCard";

function HomePage({token}){ 
    // use states
    const [approvedRequests, setApprovedRequests] = useState([])
    const [errors, setErrors] = useState([])
    const [filter, setFilter] = useState('All')

    // Get all approved requests
    useEffect(()=>{
        fetch("/approved_open_requests",{
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        .then(res=>{
            if (res.ok){
                res.json().then(data=>setApprovedRequests(data))
            }else{
                res.json().then(err=>setErrors(err.errors))
            }
        })
    },[])


    function handleClick(e){
        setFilter(e.target.value)
        console.log(filter)
    }
    const options = approvedRequests.map(req=>req.category.category_name)

    const setOptions = [...new Set(options)]
    const categoryOptions = setOptions.map(req=>{
        return <option value={req} key={req}>{req}</option>
    })

    const filteredRequests = approvedRequests.filter(request=>{
        if (filter=="All") return true;
        return request.category.category_name === filter
    })

    // Map through the approved requests to the donation request cards 
    const cardsDisplay = filteredRequests.map(request=>{
        return <DonationRequestCard key={request.id} request={request} token={token}/>
    })
    return(
        <div className="landing-page">
            
            
            <div id = "home-header">
                <h1 style={{paddingTop: "50px", color: "#000", fontSize: "60px", fontStyle: "italic"}}>WE APPRECIATE YOUR KINDNESS</h1>
            </div>
            <div className="home-filter">
                <h2 style={{textDecoration: "underline"}}>Ongoing Fundraises</h2>
                <h4>Filter By Category</h4>
                <select name="category_id" id="category_id" onClick={handleClick} style={{width: "200px"}}>
                    <option value='All'>All</option>
                {categoryOptions}
                </select>
            </div>
            <div className="landing-page-cards">
                {cardsDisplay}
            </div>
        </div>
    )
}

export default HomePage
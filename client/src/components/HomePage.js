import React, { useEffect, useState } from "react"; 
import DonationRequestCard from "./DonationRequestCard";
import Header from "./Header";
import Pagination from "./Pagination";

function HomePage({token}){ 
    // use states
    const [approvedRequests, setApprovedRequests] = useState([])
    const [errors, setErrors] = useState([])
    const [filter, setFilter] = useState('All')
    const [currentPage, setCurrentPage] = useState(1);

    const requestPerPage = 6

    const indexOfLastRecord = currentPage * requestPerPage;
    const indexOfFirstRecord = indexOfLastRecord - requestPerPage;

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

    const currentRecords = approvedRequests.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(approvedRequests.length / requestPerPage)

    function handleClick(e){
        setFilter(e.target.value)
        console.log(filter)
    }
    const options = currentRecords.map(req=>req.category.category_name)

    const setOptions = [...new Set(options)]
    const categoryOptions = setOptions.map(req=>{
        return <option value={req} key={req}>{req}</option>
    })

    const filteredRequests = currentRecords.filter(request=>{
        if (filter=="All") return true;
        return request.category.category_name === filter
    })

    // Map through the approved requests to the donation request cards 
    const cardsDisplay = filteredRequests.map(request=>{
        return <DonationRequestCard key={request.id} request={request} token={token}/>
    })
    return(
        <div className="home-page">
            
            
            {/* <div id = "home-header">
                <h1 style={{paddingTop: "50px", color: "#000", fontSize: "60px", fontStyle: "italic"}}>WE APPRECIATE YOUR KINDNESS</h1>
            </div> */}
            <Header />
            <div className="home-filter">
                <h2 style={{color: "white"}}>ONGOING FUNDRAISES</h2>
                <h4 style={{color: "white"}}>Filter By Category</h4>
                <select name="category_id" id="category_id" onClick={handleClick} style={{width: "380px", height: "35px", borderRadius: "10px"}}>
                    <option value='All'>All</option>
                {categoryOptions}
                </select>
            </div>
            <div className="landing-page-cards">
                {cardsDisplay}
            </div>
            <div className="pagination">
                <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}

export default HomePage
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, { useEffect, useState } from 'react'
import Pagination from "./Pagination";

function DonorTable({user, donations, token}) {
  const [userDonations, setUserDonations] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 10
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;

  // Filter to get user donations
  // const userDonations = donations.filter(donation=>donation.user_id === user.id)

  useEffect(()=>{
    fetch('/user_donations',{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res=>{
      if (res.ok){
        res.json().then(data=>setUserDonations(data))
      }
    })
  },[])

  const currentRecords = userDonations.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(userDonations.length / requestPerPage)
    
  return (
    <>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">Organization Name</TableCell> */}
            <TableCell className="tableCell"> Request Title</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentRecords.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell className="tableCell">{row.donation_request.title}</TableCell> */}
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.donation_request.image_url} alt="" className="image" />
                  {row.donation_request.title}
                </div>
              </TableCell>
              
              <TableCell className="tableCell">{new Date(row.created_at).toLocaleString()}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              {/* <TableCell className="tableCell">{row.category}</TableCell> */}
                          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="pagination">
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
    </>
  );
}

export default DonorTable
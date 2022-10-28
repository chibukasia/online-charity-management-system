import "./table.css";
import './styles/Loader.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function NgoDonations({donations, user, ngo, ngoRequests}) {
  // const [ngoDonations, setNgoDonations] = useState([])

  // Get the donations made to a paticular NGO
  // useEffect(()=>{
  //   fetch("/ngo_donations")
  //   .then(res=>{
  //       if (res.ok){
  //           res.json().then(data=>setNgoDonations(data))
  //       }else{
  //           res.json().then(err=>console.log(err))
  //       }
  //   })
  // },[])

  const navigate = useNavigate()

  if (user && ngo){
  const ngoDonations = []
  ngoRequests.forEach(req=>{
    ngoDonations.push(req.donations)
  })
  
  const mergedDonations = ngoDonations.flat(1)
  // console.log(mergedDonations)

    
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">Request Title</TableCell> */}
            <TableCell className="tableCell">Amount Donated</TableCell>
            {/* <TableCell className="tableCell">Target Amount</TableCell>
            <TableCell className="tableCell">Total Amount</TableCell> */}
            <TableCell className="tableCell">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mergedDonations.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.image_url} alt="" className="image" />
                  {row.title}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{row.amount}</TableCell>
              {/* <TableCell className="tableCell">{row.target_amount}</TableCell>
              <TableCell className="tableCell">{row.amount_raised}</TableCell> */}
              <TableCell className="tableCell">{new Date(row.created_at).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
          }else{
            return <div className="loader"></div>
          }
}

export default NgoDonations
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from 'react'

function NgoDonations() {
  const [ngoDonations, setNgoDonations] = useState([])

  // Get the donations made to a paticular NGO
  useEffect(()=>{
    fetch("/ngo_donations")
    .then(res=>{
        if (res.ok){
            res.json().then(data=>setNgoDonations(data))
        }else{
            res.json().then(err=>console.log(err))
        }
    })
  },[])
  
  console.log(ngoDonations)
    
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Fisrt Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ngoDonations.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{`${row.user.first_name} ${row.user.last_name}`}</TableCell>
              <TableCell className="tableCell">{row.user.last_name}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.donation_request.image_url} alt="" className="image" />
                  {row.donation_request.title}
                </div>
              </TableCell>
              <TableCell className="tableCell">{new Date(row.created_at).toLocaleDateString()}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default NgoDonations
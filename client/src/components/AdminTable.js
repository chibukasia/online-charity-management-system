import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React from 'react'

function AdminTable({donations}) {
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> Donor Name</TableCell>  
            <TableCell className="tableCell"> Donor Email</TableCell>  
            <TableCell className="tableCell"> Donor Phone</TableCell>         
            <TableCell className="tableCell">Request Title</TableCell>
            <TableCell className="tableCell">Organization Name</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donations.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{`${row.user.first_name} ${row.user.last_name}`}</TableCell>
              <TableCell className="tableCell">{row.user.email}</TableCell>
              <TableCell className="tableCell">{row.user.phone_number}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.donation_request.image_url} alt="" className="image" />
                  {row.donation_request.title}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.donation_request.ngo.organization_name}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{new Date(row.created_at).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminTable
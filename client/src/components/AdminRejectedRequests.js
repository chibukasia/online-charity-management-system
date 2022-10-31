import React from "react";
import RequestCard from "./RequestCard";
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRows from "./TableRow";

function AdminRejectedRequests({ donationRequests, setDonationRequests, token }) {
  const rejectedRequests = donationRequests.filter(
    (request) => request.status == "rejected"
  );

  return (
    <>
      <h2>REJECTED REQUESTS</h2>
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Organization Name</TableCell>
            <TableCell className="tableCell">Request Title</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount Raised</TableCell>
            <TableCell className="tableCell">Target Amount</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">State</TableCell>
            <TableCell className="tableCell">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rejectedRequests.map((row) => (
            <TableRows row={row} key={row.id} setDonationRequests={setDonationRequests} donationRequests={donationRequests} token={token}/>            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default AdminRejectedRequests;

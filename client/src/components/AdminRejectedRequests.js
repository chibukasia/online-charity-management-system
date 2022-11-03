import React, {useState} from "react";
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRows from "./TableRow";
import Pagination from "./Pagination";

function AdminRejectedRequests({ donationRequests, setDonationRequests, token }) {
  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 10
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;

  const rejectedRequests = donationRequests.filter(
    (request) => request.status == "rejected"
  );

  const currentRecords = rejectedRequests.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(rejectedRequests.length / requestPerPage)
  return (
    <>
      <h2>REJECTED REQUESTS</h2>
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead className="table-dark">
          <TableRow>
            <TableCell className="tableCell"  style={{color: "white"}}>Organization Name</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>Request Title</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>Date</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>Amount Raised</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>Target Amount</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>Category</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>Status</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>State</TableCell>
            <TableCell className="tableCell"  style={{color: "white"}}>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {currentRecords.map((row) => (
            <TableRows row={row} key={row.id} setDonationRequests={setDonationRequests} donationRequests={donationRequests} token={token}/>            
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

export default AdminRejectedRequests;

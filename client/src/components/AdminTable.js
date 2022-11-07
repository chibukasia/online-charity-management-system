import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, {useState} from 'react'
import Pagination from "./Pagination";

function AdminTable({donations}) {
  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 10
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;
  const currentRecords = donations.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(donations.length / requestPerPage)
  return (
    <>
    <h2>ALL DONATIONS</h2>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-dark">
          <TableRow>
            <TableCell className="tableCell" style={{color: "white"}}> Donor Name</TableCell>  
            <TableCell className="tableCell" style={{color: "white"}}> Donor Email</TableCell>  
            <TableCell className="tableCell" style={{color: "white"}}> Donor Phone</TableCell>         
            <TableCell className="tableCell" style={{color: "white"}}>Request Title</TableCell>
            <TableCell className="tableCell" style={{color: "white"}}>Organization Name</TableCell>
            <TableCell className="tableCell" style={{color: "white"}}>Amount</TableCell>
            <TableCell className="tableCell" style={{color: "white"}}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentRecords.map((row) => (
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
    <div className="pagination">
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
    </>
  );
}

export default AdminTable
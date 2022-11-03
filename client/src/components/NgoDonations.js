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
import Pagination from "./Pagination";

function NgoDonations({donations, user, ngo, ngoRequests}) {

  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 10
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;
  
  const navigate = useNavigate()

  if (user && ngo){
  const ngoDonations = donations.filter(donation=>donation.donation_request.ngo.id == ngo.id)
  const currentRecords = ngoDonations.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(ngoDonations.length / requestPerPage)
  

    
  return (
    <>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Donors Name</TableCell>
            <TableCell className="tableCell">Donors Email</TableCell>
            <TableCell className="tableCell">Donors Phone</TableCell>
            <TableCell className="tableCell">Request Title</TableCell>
            <TableCell className="tableCell">Request Category</TableCell>
            <TableCell className="tableCell">Amount Donated</TableCell>
            <TableCell className="tableCell">Date</TableCell>
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
              <TableCell className="tableCell">{row.donation_request.category.category_name}</TableCell>
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
          }else{
            return <div className="loader"></div>
          }
}

export default NgoDonations
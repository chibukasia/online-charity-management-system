import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React from 'react'

function DonorTable() {
  const rows = [
    {
      id: 1143155,
      organization_name: "World Vision",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      title: "John Smith",
      date: "1 March",
      amount: 785,
      category: "Food Relief",
      status: "Approved",
    },
    {
      id: 2235235,
      organization_name: "Red Cross",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      title: "Michael Doe",
      date: "1 March",
      amount: 900,
      category: "Sanitary Pads",
      status: "Pending",
    },
    {
      id: 2342353,
      organization_name: "Amref",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      title: "John Smith",
      date: "1 March",
      amount: 35,
      category: "Housing",
      status: "Rejected",
    },
    {
      id: 2357741,
      organization_name: "UNHabitat",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Jane Smith",
      date: "1 March",
      amount: 920,
      category: "Water & Electricity",
      status: "Approved",
    },
    {
      id: 2342355,
      organization_name: "LeaToto",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Harold Carol",
      date: "1 March",
      amount: 2000,
      category: "Water & Electricity",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> ID</TableCell>
            <TableCell className="tableCell">Organization Name</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.organization_name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.title}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DonorTable
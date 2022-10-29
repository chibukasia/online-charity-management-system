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
  const rows = [
    {
      id: 1143155,
      donor_name: "Brian Ambundo",
      organization_name: "World Vision",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      title: "John Smith",
      description:"We believe every child matters. Our goal is to ensure all children live life in all its fullness. To achieve this, we work in remote and hard to reach areas to find solutions to health, education, food, water and sanitation challenges.",
      date: "1 March",
      amount: 785,
      target_amount: 456000,
      category: "Food Relief",
      status: "Approved",
      state: "open"
    },
    {
      id: 2235235,
      donor_name: "Brian Ambundo",
      organization_name: "Red Cross",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      title: "Michael Doe",
      description:"We believe every child matters. Our goal is to ensure all children live life in all its fullness. To achieve this, we work in remote and hard to reach areas to find solutions to health, education, food, water and sanitation challenges.",
      date: "1 March",
      amount: 900,
      target_amount: 456000,
      category: "Sanitary Pads",
      status: "Pending",
      state: "open"
    },
    {
      id: 2342353,
      donor_name: "Brian Ambundo",
      organization_name: "Amref",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      title: "John Smith",
      description:"We believe every child matters. Our goal is to ensure all children live life in all its fullness. To achieve this, we work in remote and hard to reach areas to find solutions to health, education, food, water and sanitation challenges.",
      date: "1 March",
      amount: 35,
      target_amount: 456000,
      category: "Housing",
      status: "Rejected",
      state: "open"
    },
    {
      id: 2357741,
      donor_name: "Brian Ambundo",
      organization_name: "UNHabitat",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Jane Smith",
      description:"We believe every child matters. Our goal is to ensure all children live life in all its fullness. To achieve this, we work in remote and hard to reach areas to find solutions to health, education, food, water and sanitation challenges.",
      date: "1 March",
      amount: 920,
      target_amount: 456000,
      category: "Water & Electricity",
      status: "Approved",
      state: "open"
    },
    {
      id: 2342355,
      donor_name: "Brian Ambundo",
      organization_name: "LeaToto",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Harold Carol",
      description:"We believe every child matters. Our goal is to ensure all children live life in all its fullness. To achieve this, we work in remote and hard to reach areas to find solutions to health, education, food, water and sanitation challenges.",
      date: "1 March",
      amount: 2000,
      target_amount: 456000,
      category: "Water & Electricity",
      status: "Pending",
      state: "open"
    },
  ];
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
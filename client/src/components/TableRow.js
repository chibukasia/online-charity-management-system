import React,{useState} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AdminDetailsModal from "./AdminDetailsModal";
import './styles/Loader.css'

function TableRows({row, setDonationRequests, donationRequests}) {

    const [modalShow, setModalShow] = useState(false);

    if (row){
    const capitalizedStatus = row.status.charAt(0).toUpperCase() + row.status.slice(1) 
    // set show model to true to show the modal
    function handleShow() {
      setModalShow(true);
    }
  
    // set show model to false to hide the modal
    function handlHide() {
      setModalShow(false);
    }
  return (
    <TableRow key={row.id}>
      <TableCell className="tableCell">{row.ngo.organization_name}</TableCell>
      <TableCell className="tableCell">
        <div className="cellWrapper">
          <img src={row.image_url} alt="" className="image" />
          {row.title}
        </div>
      </TableCell>
      <TableCell className="tableCell">
        {new Date(row.created_at).toLocaleDateString()}
      </TableCell>
      <TableCell className="tableCell">KSH {row.amount_raised}</TableCell>
      <TableCell className="tableCell">KSH {row.target_amount}</TableCell>
      <TableCell className="tableCell">{row.category.category_name.charAt(0).toUpperCase() + row.category.category_name.slice(1) }</TableCell>
      <TableCell className="tableCell">
        <span className={`status ${row.status}`}>{capitalizedStatus}</span>
      </TableCell>
      <TableCell className="tableCell">
        {row.open ? (
          <span className={`status open`}>Open</span>
        ) : (
          <span className={`status closed`}>Closed</span>
        )}
      </TableCell>
      <TableCell className="tableCell">
        <button onClick={handleShow}>View Details</button>
        <AdminDetailsModal show={modalShow} onHide={handlHide} request={row} setdonationrequests={setDonationRequests} donationrequests={donationRequests} />
      </TableCell>
    </TableRow>
  );
        }
        else{
          <div className="loader"></div>
        }
}

export default TableRows;

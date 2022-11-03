import React,{useState} from "react";
import RequestCard from "./RequestCard";
import Pagination from "./Pagination";

function NgoApprovedRequests({ ngoRequests }) {
  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 8
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;

  // Get approved requests
  const approvedRequests = ngoRequests.filter(
    (request) => request.status == "approved"
  );

  const currentRecords = approvedRequests.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(approvedRequests.length / requestPerPage)

  const cardsDisplay = currentRecords.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      {/* <h2>APPROVED REQUESTS</h2> */}
      {cardsDisplay}
      <div className="pagination">
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  );
}

export default NgoApprovedRequests;

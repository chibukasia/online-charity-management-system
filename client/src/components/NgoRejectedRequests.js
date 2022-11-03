import React, {useState} from "react";
import RequestCard from "./RequestCard";
import Pagination from "./Pagination";

function NgoRejectedRequests({ ngoRequests }) {

  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 8
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;

  const rejectedRequests = ngoRequests.filter(
    (request) => request.status == "rejected"
  );

  const currentRecords = rejectedRequests.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(rejectedRequests.length / requestPerPage)

  const cardsDisplay = currentRecords.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      <h2>REJECTED REQUESTS</h2>
      <div className="dashboard-container">{cardsDisplay}</div>
      <div className="pagination">
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default NgoRejectedRequests;

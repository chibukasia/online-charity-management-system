import React, { useState, useEffect } from "react";
import RequestCard from "./RequestCard";
import Pagination from "./Pagination";

function NgoRequests({ ngoRequests }) {

  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 8
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;
  const currentRecords = ngoRequests.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(ngoRequests.length / requestPerPage)

  const cardsDisplay = currentRecords.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      <h2>ALL REQUESTS</h2>
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

export default NgoRequests;

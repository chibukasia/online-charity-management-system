import React,{useState} from "react";
import RequestCard from "./RequestCard";
import Pagination from "./Pagination";

function NgoPendingRequests({ ngoRequests }) {
  const [currentPage, setCurrentPage] = useState(1);
  const requestPerPage = 8
  const indexOfLastRecord = currentPage * requestPerPage;
  const indexOfFirstRecord = indexOfLastRecord - requestPerPage;

  const pendingRequests = ngoRequests.filter(
    (request) => request.status == "pending"
  );

  const currentRecords = pendingRequests.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(pendingRequests.length / requestPerPage)

  const cardsDisplay = currentRecords.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      {/* <h2>PENDING REQUESTS</h2> */}
      {cardsDisplay}
      <div className="pagination">
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  );
}

export default NgoPendingRequests;

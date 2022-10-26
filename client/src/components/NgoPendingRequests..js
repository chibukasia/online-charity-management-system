import React from "react";
import RequestCard from "./RequestCard";

function NgoPendingRequests({ ngoRequests }) {
  const approvedRequests = ngoRequests.filter(
    (request) => request.status == "pending"
  );

  const cardsDisplay = approvedRequests.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      <h2>PENDING REQUESTS</h2>
      <div className="reuests-container">{cardsDisplay}</div>
    </>
  );
}

export default NgoPendingRequests;

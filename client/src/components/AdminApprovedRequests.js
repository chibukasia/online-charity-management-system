import React from "react";
import RequestCard from "./RequestCard";

function AdminApprovedRequests({ ngoRequests }) {
  // Get approved requests
  const approvedRequests = ngoRequests.filter(
    (request) => request.status == "approved"
  );

  const cardsDisplay = approvedRequests.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      <h2>APPROVED REQUESTS</h2>
      <div className="reuests-container">{cardsDisplay}</div>
    </>
  );
}

export default AdminApprovedRequests;

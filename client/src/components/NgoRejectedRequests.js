import React from "react";
import RequestCard from "./RequestCard";

function NgoRejectedRequests({ ngoRequests }) {
  const approvedRequests = ngoRequests.filter(
    (request) => request.status == "rejetced"
  );

  const cardsDisplay = approvedRequests.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      <h2>REJECTED REQUESTS</h2>
      <div className="reuests-container">{cardsDisplay}</div>
    </>
  );
}

export default NgoRejectedRequests;

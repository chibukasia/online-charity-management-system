import React from "react";
import RequestCard from "./RequestCard";

function AdminAllRequests({ ngoRequests }) {
 

  const cardsDisplay = ngoRequests.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      <h2>ALL REQUESTS</h2>
      <div className="reuests-container">{cardsDisplay}</div>
    </>
  );
}

export default AdminAllRequests;

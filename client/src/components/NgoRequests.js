import React, { useState, useEffect } from "react";
import RequestCard from "./RequestCard";

function NgoRequests({ ngoRequests }) {
  const cardsDisplay = ngoRequests.map((request) => {
    return <RequestCard key={request.id} request={request} />;
  });
  return (
    <>
      <h2>ALL DONATION REQUESTS</h2>
      <div className="reuests-container">{cardsDisplay}</div>
    </>
  );
}

export default NgoRequests;

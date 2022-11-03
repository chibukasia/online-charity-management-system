import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  function nextPage (){
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  function prevPage (){
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={prevPage}>
              Previous
            </a>
          </li>
          {pageNumbers.map(pageNumber=>(
              <li key={pageNumber} className={`page-item ${currentPage == pageNumber ? 'active':''}`}>
                <a className="page-link" onClick={()=>setCurrentPage(pageNumber)}>{pageNumber}</a>
              </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

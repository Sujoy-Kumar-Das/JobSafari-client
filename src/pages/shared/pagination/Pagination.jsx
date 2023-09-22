import React from "react";

const Pagination = ({ currentPage, totalPage, setCurrentPage }) => {
  return (
    <div className=" flex justify-center mt-10">
      <div className="join ">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="join-item btn"
        >
          «
        </button>
        {Array.from({ length: totalPage }, (_, index) => (
          <button
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            className={`join-item btn ${
              currentPage === index + 1 && " btn-active"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="join-item btn"
          disabled={currentPage === totalPage}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;

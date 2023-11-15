import angleLeft from "../../assets/images/angle-left.svg";
import angleRight from "../../assets/images/angle-right.svg";
import React from "react";

export const TableEntries = () => {
    return (
        <div className="table-entries">
            <p>
                Showing {startIndex} to {endIndex} of {totalEntries} entries
            </p>
            <div className="table-pages">
                {totalPages > 1 && (
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <img className="page-icon" src={angleLeft} alt="icon"/>
                    </button>
                )}
                <span className="page">{currentPage}</span>
                {totalPages > 1 && (
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <img className="page-icon" src={angleRight} alt="icon"/>
                    </button>
                )}
            </div>
        </div>
    )
}
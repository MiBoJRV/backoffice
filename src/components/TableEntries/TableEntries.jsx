// TableEntries.jsx
import React from 'react';
import PropTypes from 'prop-types';
import angleRight from './../../assets/images/angle-right.svg';
import angleLeft from './../../assets/images/angle-left.svg';

const TableEntries = ({ startIndex, endIndex, totalEntries, handlePreviousPage, currentPage, totalPages, handleNextPage }) => {
    return (
        <div className="table-entries">
            <p>
                Showing {startIndex} to {endIndex} of {totalEntries} entries
            </p>
            <div className="table-pages">
                {totalPages > 1 && (
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <img className="page-icon" src={angleLeft} alt="icon" />
                    </button>
                )}
                <span className="page">{currentPage}</span>
                {totalPages > 1 && (
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <img className="page-icon" src={angleRight} alt="icon" />
                    </button>
                )}
            </div>
        </div>
    );
};

TableEntries.propTypes = {
    startIndex: PropTypes.number.isRequired,
    endIndex: PropTypes.number.isRequired,
    totalEntries: PropTypes.number.isRequired,
    handlePreviousPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handleNextPage: PropTypes.func.isRequired,
};

export default TableEntries;

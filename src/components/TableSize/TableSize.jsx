import React from "react";
import {TableSizeContent} from "./Styles.jsx";

export const TableSize = ({handlePageSizeChange, pageSize}) => {
    return (
        <TableSizeContent className="table-size">
            Show
            <select value={pageSize} onChange={(e) => handlePageSizeChange(e.target.value)}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            entries
        </TableSizeContent>
    )
}
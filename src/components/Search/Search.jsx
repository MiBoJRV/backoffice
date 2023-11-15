import React from "react";
import search from "../../assets/images/search.svg";
import {SearchContent} from "./Styles.jsx";

export const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <SearchContent className="search">
            <img
                className="search-icon"
                src={search}
                alt="icon"
            />
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </SearchContent>
    )
}
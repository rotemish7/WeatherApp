import React from "react";
import './SearchBar.scss'
function SearchBar() {
    return (
        <div className="search-bar">
            <input 
                placeholder="Search Here..."
                type="text"
            ></input>
        </div>
    );
}

export default SearchBar;
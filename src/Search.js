import React from "react";
import "./Search.css";


export default function Search() {
  return (
    <div className="col-6 city-search">
      <form className="searchBox">
        <input
          type="search"
          placeholder="Enter a city..."
          required
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
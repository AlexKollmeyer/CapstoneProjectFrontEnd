import SearchPageResults from "../../components/SearchPageResults/SearchPageResults";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchPage = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchPageResults, setSearchPageResults] = useState([]);

  const fetchSearchResults = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/games?title=${searchInput}`
      );
      console.log(response);
      setSearchPageResults(response.data);
    } catch (error) {
      console.warn("Error with fetchsearchResults get request", error);
    }
  };
  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      fetchSearchResults();
    } else {
      console.log("Empty Search");
    }
  };
  return (
    <div>
      <div>
        <h1>Search For Deals</h1>
        <input
          type="text"
          value={searchInput}
          onChange={(i) => setSearchInput(i.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <SearchPageResults searchPageResults={searchPageResults} />
    </div>
  );
};

export default SearchPage;

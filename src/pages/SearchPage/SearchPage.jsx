import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const SearchPage = ({}) => {
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
  useEffect(() => {
    fetchSearchResults();
  }, []);
  return (
    <div>
      <div>
        <input type="text" />
        <button></button>
      </div>

      <searchPageResults searchPageResults={searchPageResults} />
    </div>
  );
};

export default SearchPage;

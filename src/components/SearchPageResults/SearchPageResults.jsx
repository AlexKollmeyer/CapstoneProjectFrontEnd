import SearchPageResult from "../SearchPageResult/SearchPageResult";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchPageResults.css";
const SearchPageResults = ({ searchPageResults = [] }) => {
  const [stores, setStores] = useState();
  useEffect(() => {
    const fetchstores = async () => {
      try {
        let response = await axios.get(
          "https://www.cheapshark.com/api/1.0/stores"
        );
        console.log(response);
        setStores(response.data);
      } catch (error) {
        console.warn("Error with stores get request", error);
      }
    };
    fetchstores();
  }, []);
  const searchResults = searchPageResults.map((searchPageResult) => (
    <SearchPageResult
      key={searchPageResult.gameID}
      gameId={searchPageResult.gameID}
      cheapestDealId={searchPageResult.cheapestDealID}
      gameName={searchPageResult.external}
      thumbnail={searchPageResult.thumb}
      stores={stores}
    />
  ));
  return <div className="searchResults">{searchResults}</div>;
};

export default SearchPageResults;

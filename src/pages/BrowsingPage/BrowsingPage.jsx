import BrowsingPageResults from "../../components/BrowsingPageResults/BrowsingPageResults";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const BrowsingPage = ({}) => {
  const [browsingPageResults, setBrowsingPageResults] = useState([]);

  const fetchBrowsingResults = async () => {
    try {
      let response = await axios.get(
        "https://www.cheapshark.com/api/1.0/deals"
      );
      console.log(response);
      setBrowsingPageResults(response.data);
    } catch (error) {
      console.warn("Error with fetchBrowsingResults get request", error);
    }
  };
  useEffect(() => {
    fetchBrowsingResults();
    /*     setTimeout(() => {
      setWishListPageLoaded(true);
    }, 500); */
  }, []);
  return (
    <div>
      <BrowsingPageResults browsingPageResults={browsingPageResults} />
    </div>
  );
};

export default BrowsingPage;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import BrowsingPageResults from "../../components/BrowsingPageResults/BrowsingPageResults";
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
  }, []);
  return (
    <div>
      <BrowsingPageResults browsingPageResults={browsingPageResults} />
    </div>
  );
};

export default BrowsingPage;

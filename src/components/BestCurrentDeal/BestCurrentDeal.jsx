import axios from "axios";
import { useEffect, useState } from "react";
const BestCurrentDeal = ({ cheapSharkGame }) => {
  const [bestCurrentDealDetails, setBestCurrentDealDetails] = useState();
  const [bestCurrentDealLoaded, setBestCurrentDealLoaded] = useState(false);

  const fetchBestCurrentDealDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/redirect?dealID=${cheapSharkGame.cheapestDealID}`
      );
      console.log(response);
      setBestCurrentDealDetails(response.data);
    } catch (error) {
      console.warn("Error with bestCurrentDealDetails");
    }
  };
  useEffect;

  return (
    <div>
      <p>{cheapSharkGame.cheapestDealID}</p>
    </div>
  );
};

export default BestCurrentDeal;

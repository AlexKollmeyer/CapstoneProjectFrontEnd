import axios from "axios";
import { useEffect, useState } from "react";
import BestCurrentDealStoreDetails from "../BestCurrentDealStoreDetails/BestCurrentDealStoreDetails";
const BestCurrentDeal = ({ cheapSharkGame, stores }) => {
  const [bestCurrentDealDetails, setBestCurrentDealDetails] = useState();
  const [bestCurrentDealLoaded, setBestCurrentDealLoaded] = useState(false);

  const fetchBestCurrentDealDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/deals?id=${cheapSharkGame.cheapestDealID}`
      );
      console.log(response);
      setBestCurrentDealDetails(response.data);
    } catch (error) {
      console.warn("Error with bestCurrentDealDetails");
    }
  };

  useEffect(() => {
    fetchBestCurrentDealDetails();
    setTimeout(() => {
      setBestCurrentDealLoaded(true);
    }, 500);
  }, []);

  return (
    <div>
      {bestCurrentDealLoaded ? (
        <BestCurrentDealStoreDetails
          bestCurrentDealDetails={bestCurrentDealDetails}
          stores={stores}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default BestCurrentDeal;

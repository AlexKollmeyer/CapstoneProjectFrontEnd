import axios from "axios";
import { useEffect, useState } from "react";
import StoreDetails from "../StoreDetails/StoreDetails";

const BestCurrentDealDetails = ({ bestCurrentDealDetails }) => {
  const [stores, setStores] = useState();
  const [bestCurrentDealDetailsLoaded, setbestCurrentDealDetailsLoaded] =
    useState();

  const fetchStores = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/stores`
      );
      console.log(response);
      setStores(response.data);
    } catch (error) {
      console.warn("Error with stores request");
    }
  };
  useEffect(() => {
    fetchStores();
    setTimeout(() => {
      setbestCurrentDealDetailsLoaded(true);
    }, 500);
  }, []);
  let savings =
    100 -
    (bestCurrentDealDetails.gameInfo.salePrice /
      bestCurrentDealDetails.gameInfo.retailPrice) *
      100;
  return (
    <div>
      <h2>Best Current Deal</h2>
      <p>Sale Price: ${bestCurrentDealDetails.gameInfo.salePrice}</p>
      <p>Retail Price: ${bestCurrentDealDetails.gameInfo.retailPrice}</p>
      <p>Savings : {savings.toFixed(2)}%</p>
      <div>
        {bestCurrentDealDetailsLoaded ? (
          <StoreDetails
            stores={stores}
            storeID={bestCurrentDealDetails.gameInfo.storeID}
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default BestCurrentDealDetails;

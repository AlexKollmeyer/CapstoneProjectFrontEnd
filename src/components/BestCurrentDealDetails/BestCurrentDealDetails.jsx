import axios from "axios";
import { useEffect, useState } from "react";
import react from "react";
import useAuth from "../../hooks/useAuth";
import StoreDetails from "../StoreDetails/StoreDetails";

const BestCurrentDealDetails = ({
  bestCurrentDealId,
  bestCurrentDealDetails,
}) => {
  const [user, token] = useAuth();
  const [stores, setStores] = useState();
  const [bestCurrentDealDetailsLoaded, setbestCurrentDealDetailsLoaded] =
    useState();

  const fetchStores = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/stores`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
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
  const handleClick = async () => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      let currentDate = new Date();
      let currentDay = currentDate.getDate().toString();
      if (currentDay < 10) {
        currentDay = "0" + currentDay;
      }
      let currentMonth = (1 + currentDate.getMonth()).toString();
      if (currentMonth < 10) {
        currentMonth = "0" + currentMonth;
      }
      let currentYear = currentDate.getFullYear().toString();
      let purchaseDate = `${currentYear}-${currentMonth}-${currentDay}`;
      console.log(purchaseDate);
      let postData = {
        purchasedGameTitle: `${bestCurrentDealDetails.gameInfo.name}`,
        purchaseDate: purchaseDate,
        purchaseAmount: bestCurrentDealDetails.gameInfo.salePrice,
        savings: savings.toFixed(2),
        originalPrice: bestCurrentDealDetails.gameInfo.retailPrice,
        userId: `${user.id}`,
      };
      console.log(postData);
      let response = await axios.post(
        "https://localhost:5001/api/purchasearchive",
        postData,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.warn("Error with purchaseArchvie Post request", error);
    }
  };
  return (
    <div>
      <h2>Best Current Deal</h2>
      <p>Sale Price: ${bestCurrentDealDetails.gameInfo.salePrice}</p>
      <p>Retail Price: ${bestCurrentDealDetails.gameInfo.retailPrice}</p>
      <p>Savings : {savings}%</p>
      <div>
        {bestCurrentDealDetailsLoaded ? (
          <StoreDetails
            stores={stores}
            storeID={bestCurrentDealDetails.gameInfo.storeID}
          />
        ) : (
          <p>Loading</p>
        )}
        <button onClick={handleClick}>Purchase</button>
      </div>
    </div>
  );
};

export default BestCurrentDealDetails;

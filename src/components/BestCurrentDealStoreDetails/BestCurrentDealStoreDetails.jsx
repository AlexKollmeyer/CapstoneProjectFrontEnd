import axios from "axios";
import { useEffect, useState } from "react";
import react from "react";
import useAuth from "../../hooks/useAuth";
import "./BestCurrentDealStoreDetails.css";

const BestCurrentDealStoreDetails = ({ bestCurrentDealDetails, stores }) => {
  const [user, token] = useAuth();
  let storeName =
    stores[parseInt(bestCurrentDealDetails.gameInfo.storeID) - 1].storeName;
  let savings =
    100 -
    (bestCurrentDealDetails.gameInfo.salePrice /
      bestCurrentDealDetails.gameInfo.retailPrice) *
      100;
  savings = savings.toFixed(2);
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
    <div className="bestCurrentDealDetails">
      <h2>Best Current Deal:</h2>
      <p>Sale Price: ${bestCurrentDealDetails.gameInfo.salePrice}</p>
      <p>Retail Price: ${bestCurrentDealDetails.gameInfo.retailPrice}</p>
      <p>Savings : {savings}%</p>
      <p>Store:{storeName}</p>
      <button onClick={handleClick}>Purchase</button>
    </div>
  );
};

export default BestCurrentDealStoreDetails;

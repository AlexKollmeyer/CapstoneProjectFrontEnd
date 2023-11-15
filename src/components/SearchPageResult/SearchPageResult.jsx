import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BestCurrentDealSearch from "../BestCurrentDealSearch/BestCurrentDealSearch";
import "./SearchPageResult.css";
const SearchPageResult = ({
  gameId,
  cheapestDealId,
  gameName,
  thumbnail,
  stores,
}) => {
  const [user, token] = useAuth();

  const handleClickPostWishList = async () => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      let postData = {
        gameId: `${gameId}`,
        gameName: `${gameName}`,
        thumbnail: `${thumbnail}`,
        cheapestCurrentDealId: "",
        userId: `${user.id}`,
      };

      let response = await axios.post(
        "https://localhost:5001/api/wishlistedgame",
        postData,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.warn("Error with wishlist post request", error);
    }
  };
  return (
    <div className="searchPageResult">
      <h2>{gameName}</h2>
      <img src={thumbnail} alt="Game Thumbnail" />
      <button onClick={handleClickPostWishList}>Add to wishlist</button>
      <BestCurrentDealSearch cheapestDealId={cheapestDealId} stores={stores} />
    </div>
  );
};

export default SearchPageResult;

import axios from "axios";
import { useEffect, useState } from "react";
const WishListItem = ({ gameName, thumbnail, CheapestCurrentDealId }) => {
  const [cheapSharkGame, setCheapSharkGame] = useState();

  const fetchCheapSharkGame = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/games?title=${gameName}`
      );

      console.log(response);
      setCheapSharkGame(response.data);
    } catch (error) {}
  };
  CheapestCurrentDealId = response.data[0].cheapestDealID;
  useEffect(() => {
    fetchCheapSharkGame();
  }, []);
  return (
    <div className="wishlistitem">
      <h2>{gameName}</h2>
      <img src={thumbnail} alt="Game Thumbnail" />
    </div>
  );
};

export default WishListItem;

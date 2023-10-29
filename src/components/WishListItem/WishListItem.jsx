import axios from "axios";
import { useEffect, useState } from "react";
import BestCurrentDeal from "../BestCurrentDeal/BestCurrentDeal";
const WishListItem = ({ gameName, thumbnail }) => {
  const [cheapSharkGame, setCheapSharkGame] = useState();
  const [wishListItemLoaded, setWishListItemLoaded] = useState();

  const fetchCheapSharkGame = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/games?title=${gameName}`
      );

      console.log(response);
      setCheapSharkGame(response.data[0]);
    } catch (error) {
      console.warn("Error with CheapSharkGame Request");
    }
  };

  useEffect(() => {
    fetchCheapSharkGame();
    setTimeout(() => {
      setWishListItemLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="wishlistitem">
      <h2>{gameName}</h2>
      <img src={thumbnail} alt="Game Thumbnail" />
      {wishListItemLoaded ? (
        <BestCurrentDeal cheapSharkGame={cheapSharkGame} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default WishListItem;

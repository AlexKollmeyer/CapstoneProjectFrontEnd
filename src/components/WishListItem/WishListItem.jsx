import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BestCurrentDeal from "../BestCurrentDeal/BestCurrentDeal";
import "./WishListItem.css";
const WishListItem = ({ wishListItemId, gameName, thumbnail, stores }) => {
  const [user, token] = useAuth();
  const [cheapSharkGame, setCheapSharkGame] = useState();
  const [wishListItemLoaded, setWishListItemLoaded] = useState();
  const [buttonText, setButtonText] = useState("Remove from wishlist");

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
  const handleClick = async () => {
    console.log(wishListItemId);
    try {
      let response = await axios.delete(
        `https://localhost:5001/api/wishlistedgame/${wishListItemId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      setButtonText("Game removed from wishlist");
    } catch (error) {}
  };
  useEffect(() => {
    fetchCheapSharkGame();
    setTimeout(() => {
      setWishListItemLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="wishListItem">
      <h2>{gameName}</h2>
      <img src={thumbnail} alt="Game Thumbnail" />
      {wishListItemLoaded ? (
        <BestCurrentDeal cheapSharkGame={cheapSharkGame} stores={stores} />
      ) : (
        <p>Loading</p>
      )}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default WishListItem;

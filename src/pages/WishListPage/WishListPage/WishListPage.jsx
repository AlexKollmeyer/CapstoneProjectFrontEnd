import WishList from "../../../components/Wishlist/WishList";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const WishListPage = ({}) => {
  const [user, token] = useAuth();
  const [wishList, setWishList] = useState([]);
  const [cheapSharkGame, setCheapSharkGame] = useState();
  const fetchCheapSharkGame = async () => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/games?title=${gameName}`
      );

      console.log(response);
      setCheapSharkGame(response.data[0]);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCheapSharkGame();
  }, []);
  const fetchWishList = async () => {
    try {
      let response = await axios.get(
        "https://localhost:5001/api/wishlistedgame/mywishlist",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      setWishList(response.data);
    } catch (error) {
      console.warn("Error with WishList Request");
    }
  };
  useEffect(() => {
    fetchWishList();
  }, []);
  return (
    <div>
      <WishList wishList={wishList} />
    </div>
  );
};

export default WishListPage;

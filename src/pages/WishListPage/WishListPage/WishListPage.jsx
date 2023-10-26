import WishList from "../../../components/Wishlist/WishList";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const WishListPage = ({}) => {
  const [user, token] = useAuth;
  const [wishList, setWishList] = useState;

  const fetchWishList = async () => {
    try {
      let response = await axios.get(
        " http://localhost:5000/api/wishlistedgame/mywishlist",
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

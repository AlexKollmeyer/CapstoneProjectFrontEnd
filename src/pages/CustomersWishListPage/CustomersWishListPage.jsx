import WishList from "../../components/Wishlist/WishList";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const CustomersWishListPage = ({}) => {
  let { customerId } = useParams();
  const [user, token] = useAuth();
  const [wishList, setWishList] = useState([]);
  const [wishListPageLoaded, setWishListPageLoaded] = useState(false);
  const fetchWishList = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/wishlistedgame/customerwishlist/${customerId}`,
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
    setTimeout(() => {
      setWishListPageLoaded(true);
    }, 500);
  }, []);

  return (
    <div>
      <WishList wishList={wishList} wishListPageLoaded={wishListPageLoaded} />
    </div>
  );
};

export default CustomersWishListPage;

import WishListItem from "../WishListItem/WishListItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
const WishList = ({ wishList = [], wishListPageLoaded }) => {
  const [stores, setStores] = useState();
  useEffect(() => {
    const fetchstores = async () => {
      try {
        let response = await axios.get(
          "https://www.cheapshark.com/api/1.0/stores"
        );
        console.log(response);
        setStores(response.data);
      } catch (error) {
        console.warn("Error with stores get request", error);
      }
    };
    fetchstores();
  }, []);
  const WishListItems = wishList.map((wishlistitem) => (
    <WishListItem
      key={wishlistitem.id}
      wishListItemId={wishlistitem.id}
      gameName={wishlistitem.gameName}
      thumbnail={wishlistitem.thumbnail}
      stores={stores}
    />
  ));
  return <div>{wishListPageLoaded ? WishListItems : <p>Loading</p>}</div>;
};

export default WishList;

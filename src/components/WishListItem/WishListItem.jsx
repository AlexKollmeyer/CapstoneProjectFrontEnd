import axios from "axios";
import { useEffect, useState } from "react";

const WishListItem = ({ gameName, Thumbnail, CheapestCurrentDealId }) => {
  return (
    <div className="wishlistitem">
      <h2>{gameName}</h2>
      <img src={Thumbnail} alt="Game Thumbnail" />
    </div>
  );
};

export default WishListItem;

import axios from "axios";
import { useEffect, useState } from "react";
const WishListItem = ({ gameName, thumbnail, CheapestCurrentDealId }) => {
  return (
    <div className="wishlistitem">
      <h2>{gameName}</h2>
      <img src={thumbnail} alt="Game Thumbnail" />
    </div>
  );
};

export default WishListItem;

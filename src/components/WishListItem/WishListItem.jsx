const WishListItem = ({ gameName, thumbnail, CheapestCurrentDeal }) => {
  return (
    <div className="wishlistitem">
      <h2>{gameName}</h2>
      <img src={thumbnail} alt="Game Thumbnail" />
    </div>
  );
};

export default WishListItem;

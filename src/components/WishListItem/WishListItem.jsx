const WishListItem = ({ gameName, Thumbnail, CheapestCurrentDeal }) => {
  return (
    <div className="wishlistitem">
      <h2>{gameName}</h2>
      <img src={Thumbnail} alt="Game image" />
    </div>
  );
};

export default WishListItem;

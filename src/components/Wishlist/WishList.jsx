import WishListItem from "../WishListItem/WishListItem";
const WishList = ({ wishList = [] }) => {
  const WishListItems = wishList.map((wishlistitem) => (
    <WishListItem
      key={wishlistitem.id}
      gameName={wishlistitem.gameId}
      thumbnail={wishlistitem.thumbnail}
      cheapestCurrentDeal={wishlistitem.cheapestCurrentDeal}
    />
  ));
  return <div>{WishListItems}</div>;
};

export default WishList;

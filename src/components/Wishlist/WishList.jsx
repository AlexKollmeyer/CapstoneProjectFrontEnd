import WishListItem from "../WishListItem/WishListItem";
const WishList = ({ wishList = [] }) => {
  const WishListItems = wishList.map((wishlistitem) => (
    <WishListItem
      key={wishlistitem.id}
      gameName={wishlistitem.gameName}
      thumbnail={wishlistitem.thumbnail}
    />
  ));
  return <div>{WishListItems}</div>;
};

export default WishList;

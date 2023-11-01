import WishListItem from "../WishListItem/WishListItem";
const WishList = ({ wishList = [], wishListPageLoaded }) => {
  const WishListItems = wishList.map((wishlistitem) => (
    <WishListItem
      key={wishlistitem.id}
      wishListItemId={wishlistitem.id}
      gameName={wishlistitem.gameName}
      thumbnail={wishlistitem.thumbnail}
    />
  ));
  return <div>{wishListPageLoaded ? WishListItems : <p>Loading</p>}</div>;
};

export default WishList;

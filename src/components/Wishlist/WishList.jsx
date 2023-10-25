import WishListItem from "../WishListItem/WishListItem";
const WishList = ({ wishList = [] }) => {
  const [CheapestCurrentDealIdDetails, setCheapestCurrentDealIdDetails] =
    useState();

  useEffect(() => {
    fetchCheapSharkApiDealDetails();
  }, CheapestCurrentDealId);

  const WishListItems = wishList.map((wishlistitem) => (
    <WishListItem
      key={wishlistitem.id}
      gameName={wishlistitem.gameId}
      thumbnail={wishlistitem.thumbnail}
      CheapestCurrentDealId={wishlistitem.cheapestCurrentDeal}
    />
  ));
  return <div>{WishListItems}</div>;
};

export default WishList;

import axios from "axios";
import useAuth from "../../hooks/useAuth";
const StoreDeals = ({ storeDeals }) => {
  const [user, token] = useAuth();
  const handleClickPostWishList = async (deal) => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      let postData = {
        gameId: `${deal.gameID}`,
        gameName: `${deal.title}`,
        thumbnail: `${deal.thumbnail}`,
        cheapestCurrentDealId: "",
        userId: `${user.id}`,
      };
      let response = await axios.post(
        "https://localhost:5001/api/wishlistedgame",
        postData,
        config
      );
      console.log(response.data);
      alert("WishList Successful!");
    } catch (error) {
      console.warn("Error with wishlist post request", error);
    }
  };
  const handleClickPostPurchaseArchive = async (deal) => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      let currentDate = new Date();
      let currentDay = currentDate.getDate().toString();
      if (currentDay < 10) {
        currentDay = "0" + currentDay;
      }
      let currentMonth = (1 + currentDate.getMonth()).toString();
      if (currentMonth < 10) {
        currentMonth = "0" + currentMonth;
      }
      let currentYear = currentDate.getFullYear().toString();
      let purchaseDate = `${currentYear}-${currentMonth}-${currentDay}`;

      let savingsParsed = deal.savings.substring(0, 5);
      savingsParsed = parseFloat(savingsParsed);
      let salePriceParsed = parseFloat(deal.salePrice);
      let normalPriceParsed = parseFloat(deal.normalPrice);

      let postData = {
        purchasedGameTitle: `${deal.title}`,
        purchaseDate: purchaseDate,
        purchaseAmount: salePriceParsed,
        savings: savingsParsed,
        originalPrice: normalPriceParsed,
        userId: `${user.id}`,
      };
      console.log(postData);
      let response = await axios.post(
        "https://localhost:5001/api/purchasearchive",
        postData,
        config
      );
      console.log(response.data);
      alert("Purchase Successful!");
    } catch (error) {
      console.warn("Error with purchaseArchvie Post request", error);
      alert("Purchase Unsccessful");
    }
  };
  const Deals = storeDeals.map((deal) => (
    <tr key={deal.dealID}>
      <td>{deal.title}</td>
      <td>${deal.salePrice}</td>
      <td>${deal.normalPrice}</td>
      <td>{deal.savings.substring(0, 5)}%</td>
      <td>
        <button onClick={() => handleClickPostWishList(deal)}>Wishlist</button>
      </td>
      <td>
        <button onClick={() => handleClickPostPurchaseArchive(deal)}>
          Purchase
        </button>
      </td>
    </tr>
  ));
  return <tbody>{Deals}</tbody>;
};

export default StoreDeals;

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./BrowsingPageResult.css";
const BrowsingPageResult = ({
  title,
  thumbnail,
  storeid,
  stores,
  salePrice,
  normalPrice,
  savings,
  dealRating,
  steamRatingPercent,
  steamRatingCount,
  gameID,
}) => {
  const [user, token] = useAuth();
  /*   const [isWishListed, setisWishListed] = useState(false); */
  let storeName = stores[parseInt(storeid) - 1].storeName;
  let steamRating = "";
  if (steamRatingPercent !== 0) {
    steamRating = `${steamRatingPercent}% out of ${steamRatingCount} steam reviews`;
  } else {
    steamRating = "N/A";
  }
  const handleClickPostWishList = async () => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      let postData = {
        gameId: `${gameID}`,
        gameName: `${title}`,
        thumbnail: `${thumbnail}`,
        cheapestCurrentDealId: "",
        userId: `${user.id}`,
      };

      let response = await axios.post(
        "https://localhost:5001/api/wishlistedgame",
        postData,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.warn("Error with wishlist post request", error);
    }
  };
  const handleClickPostPurchaseArchive = async () => {
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
      let savingsParsed = savings.substring(0, 5);
      savingsParsed = parseFloat(savingsParsed);
      let salePriceParsed = parseFloat(salePrice);
      let normalPriceParsed = parseFloat(normalPrice);

      let postData = {
        purchasedGameTitle: `${title}`,
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
    } catch (error) {
      console.warn("Error with purchaseArchvie Post request", error);
    }
  };
  return (
    <tr>
      <td>
        <h3>{title}</h3>
        <img src={thumbnail} alt="Game Thumbnail" />
      </td>
      <td>{storeName}</td>
      <td>
        <h3>Sale Price: ${salePrice}</h3>
        <h3>Original Price: ${normalPrice}</h3>
      </td>
      <td>{savings.substring(0, 5)}%</td>
      <td>{dealRating}</td>
      <td>{steamRating}</td>
      <td>
        <button onClick={handleClickPostWishList}>Add to wishlist</button>
      </td>
      <td>
        <button onClick={handleClickPostPurchaseArchive}> Purchase </button>
      </td>
    </tr>
  );
};

export default BrowsingPageResult;

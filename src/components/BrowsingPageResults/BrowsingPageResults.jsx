import BrowsingPageResult from "../BrowsingPageResult/BrowsingPageResult";
import { useEffect, useState } from "react";
const BrowsingPageResults = ({ browsingPageResults = [] }) => {
  const [filteredBrowsingPageResults, setFilteredBrowsingPageResults] =
    useState(browsingPageResults);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSliderValue(value);
  };

  const filterBySteamRating = (input) => {
    const filtered = browsingPageResults.filter(
      (item) => item.steamRatingPercent >= input
    );
    setFilteredBrowsingPageResults(filtered);
  };

  useEffect(() => {
    filterBySteamRating(sliderValue);
  }, [sliderValue, browsingPageResults]); // Watch both sliderValue and browsingPageResults

  const BrowsingPageResultTable = filteredBrowsingPageResults.map(
    (browsingPageResult) => (
      <BrowsingPageResult
        key={browsingPageResult.dealID}
        title={browsingPageResult.title}
        thumbnail={browsingPageResult.thumb}
        storeid={browsingPageResult.storeID}
        salePrice={browsingPageResult.salePrice}
        normalPrice={browsingPageResult.normalPrice}
        savings={browsingPageResult.savings}
        dealRating={browsingPageResult.dealRating}
        steamRatingPercent={browsingPageResult.steamRatingPercent}
        steamRatingCount={browsingPageResult.steamRatingCount}
      />
    )
  );

  return (
    <div>
      <h3>Minimum Steam Rating: {sliderValue}</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Store</th>
            <th>Price</th>
            <th>Savings</th>
            <th>Deal Rating</th>
            <th>Steam Rating</th>
          </tr>
        </thead>
        <tbody>{BrowsingPageResultTable}</tbody>
      </table>
    </div>
  );
};

export default BrowsingPageResults;

import React, { useState, useEffect } from "react";
import BrowsingPageResult from "../BrowsingPageResult/BrowsingPageResult";

const BrowsingPageResults = ({ browsingPageResults = [] }) => {
  const [steamRatingSliderVaule, setSteamRatingSliderVaule] = useState(0);
  const [priceSliderVaule, setPriceSliderVaule] = useState(150);
  const [filteredBrowsingPageResults, setFilteredBrowsingPageResults] =
    useState(browsingPageResults);
  const [isChecked, setIsChecked] = useState(false);

  const handleSteamRatingSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSteamRatingSliderVaule(value);
  };

  const handlePriceSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setPriceSliderVaule(value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    let filteredData = browsingPageResults.filter((item, index, self) => {
      return (
        item.steamRatingPercent >= steamRatingSliderVaule &&
        item.salePrice <= priceSliderVaule &&
        (!isChecked || isFirstOccurrence(item.gameID, index, self))
      );
    });
    setFilteredBrowsingPageResults(filteredData);
  }, [
    steamRatingSliderVaule,
    priceSliderVaule,
    browsingPageResults,
    isChecked,
  ]);

  const isFirstOccurrence = (gameID, currentIndex, array) => {
    return (
      array.findIndex(
        (item, index) => item.gameID === gameID && index < currentIndex
      ) === -1
    );
  };

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
      <h3>Minimum Steam Rating: {steamRatingSliderVaule}</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={steamRatingSliderVaule}
        onChange={handleSteamRatingSliderChange}
      />
      <h3>Maximum Price: {priceSliderVaule}</h3>
      <input
        type="range"
        min="0"
        max="150"
        value={priceSliderVaule}
        onChange={handlePriceSliderChange}
      />
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Hide Duplicates
      </label>
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

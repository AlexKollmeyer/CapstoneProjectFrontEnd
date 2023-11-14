import React, { useState, useEffect } from "react";
import BrowsingPageResult from "../BrowsingPageResult/BrowsingPageResult";
import "./BrowsingPageResults.css";
import axios from "axios";

const BrowsingPageResults = ({ browsingPageResults = [] }) => {
  const [stores, setStores] = useState();
  const [steamRatingSliderValue, setSteamRatingSliderVaule] = useState(0);
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
    const fetchstores = async () => {
      try {
        let response = await axios.get(
          "https://www.cheapshark.com/api/1.0/stores"
        );
        console.log(response);
        setStores(response.data);
      } catch (error) {
        console.warn("Error with stores get request", error);
      }
    };
    fetchstores();
  }, []);
  useEffect(() => {
    let filteredData = browsingPageResults.filter((item, index, self) => {
      return (
        item.steamRatingPercent >= steamRatingSliderValue &&
        item.salePrice <= priceSliderVaule &&
        (!isChecked || isFirstOccurrence(item.gameID, index, self))
      );
    });
    setFilteredBrowsingPageResults(filteredData);
  }, [
    steamRatingSliderValue,
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
        stores={stores}
        salePrice={browsingPageResult.salePrice}
        normalPrice={browsingPageResult.normalPrice}
        savings={browsingPageResult.savings}
        dealRating={browsingPageResult.dealRating}
        steamRatingPercent={browsingPageResult.steamRatingPercent}
        steamRatingCount={browsingPageResult.steamRatingCount}
        gameID={browsingPageResult.gameID}
      />
    )
  );

  return (
    <div className="browsingPageResults">
      <div className="filters">
        <h2>Filters:</h2>
        <div>
          <h3>Minimum Steam Rating: {steamRatingSliderValue}</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={steamRatingSliderValue}
            onChange={handleSteamRatingSliderChange}
          />
        </div>
        <div>
          <h3>Maximum Price: ${priceSliderVaule}</h3>
          <input
            type="range"
            min="0"
            max="150"
            value={priceSliderVaule}
            onChange={handlePriceSliderChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Hide Duplicates
          </label>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Store</th>
            <th>Price</th>
            <th>Savings</th>
            <th>Deal Rating</th>
            <th>Steam Rating</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="results">{BrowsingPageResultTable}</tbody>
      </table>
    </div>
  );
};

export default BrowsingPageResults;

import BrowsingPageResult from "../BrowsingPageResult/BrowsingPageResult";
import { useEffect, useState } from "react";
const BrowsingPageResults = ({ browsingPageResults = [] }) => {
  const BrowsingPageResultTable = browsingPageResults.map(
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
  );
};

export default BrowsingPageResults;

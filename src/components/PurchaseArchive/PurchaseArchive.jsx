import { useEffect, useState } from "react";
import PurchaseArchiveItem from "../PurchaseArchiveItem/PurchaseArchiveItem";
const PurchaseArchive = ({ purchaseArchive = [] }) => {
  const [totalPurchaseCost, setTotalPurchaseCost] = useState(
    purchaseArchive.reduce(
      (acc, purchaseArchiveitem) => acc + purchaseArchiveitem.purchaseAmount,
      0
    )
  );
  const [filteredPurchaseArchive, setfilteredPurchaseArchive] =
    useState(purchaseArchive);

  const filterWithViewPeriod = async (viewPeriod) => {
    let filtered = [];
    if (viewPeriod === "allTime") {
      filtered = purchaseArchive;
    } else if (viewPeriod === "lastMonth") {
      let lastMonth = new Date();
      console.log(lastMonth);
      lastMonth = lastMonth.setMonth(lastMonth.getMonth() - 1);
      filtered = purchaseArchive.filter(
        (item) => new Date(item.purchaseDate) >= lastMonth
      );
    } else if (viewPeriod === "lastYear") {
      let lastYear = new Date();
      lastYear = lastYear.setYear(lastYear.getFullYear() - 1);
      console.log(lastYear);
      filtered = purchaseArchive.filter(
        (item) => new Date(item.purchaseDate) >= lastYear
      );
    }
    setfilteredPurchaseArchive(filtered);
  };

  useEffect(() => {
    setTotalPurchaseCost(
      filteredPurchaseArchive.reduce(
        (acc, purchaseArchiveitem) => acc + purchaseArchiveitem.purchaseAmount,
        0
      )
    );
  }, [filteredPurchaseArchive]);
  const PurchaseArchiveItems = filteredPurchaseArchive.map(
    (filteredPurchaseArchive) => (
      <PurchaseArchiveItem
        key={filteredPurchaseArchive.id}
        purchasedGameTitle={filteredPurchaseArchive.purchasedGameTitle}
        purchaseDate={filteredPurchaseArchive.purchaseDate}
        purchaseAmount={filteredPurchaseArchive.purchaseAmount}
        savings={filteredPurchaseArchive.savings}
        ogPrice={filteredPurchaseArchive.originalPrice}
      />
    )
  );
  return (
    <div>
      <div>
        <button onClick={() => filterWithViewPeriod("allTime")}>
          All Purchases
        </button>
        <button onClick={() => filterWithViewPeriod("lastYear")}>
          Purchases within the last year
        </button>
        <button onClick={() => filterWithViewPeriod("lastMonth")}>
          Purchases within the last month
        </button>
      </div>
      <div>
        <h2>Total cost of purchases: ${totalPurchaseCost.toFixed(2)}</h2>
      </div>
      <div>{PurchaseArchiveItems}</div>
    </div>
  );
};

export default PurchaseArchive;

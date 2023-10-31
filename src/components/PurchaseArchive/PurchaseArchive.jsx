import { useEffect, useState } from "react";
import PurchaseArchiveItem from "../PurchaseArchiveItem/PurchaseArchiveItem";
const PurchaseArchive = ({ purchaseArchive = [] }) => {
  const [totalPurchaseCost, setTotalPurchaseCost] = useState(purchaseArchive);
  const [filteredPurchaseArchive, setfilteredPurchaseArchive] =
    useState(purchaseArchive);

  const filterWithViewPeriod = async (viewPeriod) => {
    if (viewPeriod === "allTime") {
      setfilteredPurchaseArchive(purchaseArchive);
      console.log(filteredPurchaseArchive);
    } else if (viewPeriod === "lastMonth") {
      let lastMonth = new Date();
      console.log(lastMonth);
      lastMonth = lastMonth.setMonth(lastMonth.getMonth() - 1);
      let filtered = purchaseArchive.filter(
        (item) => new Date(item.purchaseDate) >= lastMonth
      );
      setfilteredPurchaseArchive(filtered);
      console.log(filteredPurchaseArchive);
    } else if (viewPeriod === "lastYear") {
      let lastYear = new Date();
      lastYear = lastYear.setYear(lastYear.getFullYear() - 1);
      console.log(lastYear);
      let filtered = purchaseArchive.filter(
        (item) => new Date(item.purchaseDate) >= lastYear
      );
      setfilteredPurchaseArchive(filtered);
      console.log(filteredPurchaseArchive);
    }
  };
  const calculateTotalPurchaseCost = async () => {
    setTotalPurchaseCost(
      filteredPurchaseArchive.reduce(
        (acc, purchaseArchiveitem) => acc + purchaseArchiveitem.purchaseAmount,
        0
      )
    );
  };

  /*   useEffect(() => {
    filterWithViewPeriod();
  }, []); */
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
      {/*       <div>
        <h2>
          Total amount spent on (this site) ${totalPurchaseCost.toFixed(2)}
        </h2>
      </div> */}
      <div>{PurchaseArchiveItems}</div>
    </div>
  );
};

export default PurchaseArchive;

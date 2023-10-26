import PurchaseArchiveItem from "../PurchaseArchiveItem/PurchaseArchiveItem";
const PurchaseArchive = ({ purchaseArchive = [] }) => {
  const PurchaseArchiveItems = purchaseArchive.map((purchaseArchiveitem) => (
    <PurchaseArchiveItem
      key={purchaseArchiveitem.id}
      purchasedGameTitle={purchaseArchiveitem.purchasedGameTitle}
      purchaseDate={purchaseArchiveitem.purchaseDate}
      purchaseAmount={purchaseArchiveitem.purchaseAmount}
      savings={purchaseArchiveitem.savings}
      ogPrice={purchaseArchiveitem.originalPrice}
    />
  ));
  return <div>{PurchaseArchiveItems}</div>;
};

export default PurchaseArchive;

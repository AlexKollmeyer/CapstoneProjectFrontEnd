const PurchaseArchive = ({ purchaseArchive = [] }) => {
  const PurchaseArchiveItems = purchaseArchive.map((purchaseArchiveitem) => (
    <PurchaseArchiveItem
      key={purchaseArchiveitem.id}
      purchasedGameTitle={purchaseArchiveitem.PurchasedGameTitle}
      purchaseDate={purchaseArchiveitem.purchaseDate}
      purchaseAmount={purchaseArchiveitem.purchaseAmount}
      savings={purchaseArchiveitem.savings}
      ogPrice={purchaseArchiveitem.OriginalPrice}
    />
  ));
  return <div>{PurchaseArchiveItems}</div>;
};

export default PurchaseArchive;

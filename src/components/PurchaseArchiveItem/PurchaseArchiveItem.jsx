const PurchaseArchiveItem = ({
  purchasedGameTitle,
  purchaseDate,
  purchaseAmount,
  savings,
  ogPrice,
}) => {
  const purchaseDateTimeTrimmed = purchaseDate.substring(0, 10);
  return (
    <div>
      <div>
        <h3>Date of Purchase:{purchaseDateTimeTrimmed}</h3>
        <h3>{purchasedGameTitle}</h3>
      </div>
      <p>Sale Price: ${purchaseAmount}</p>
      <p>Original Price: ${ogPrice}</p>
      <p>Savings: {savings}%</p>
    </div>
  );
};

export default PurchaseArchiveItem;

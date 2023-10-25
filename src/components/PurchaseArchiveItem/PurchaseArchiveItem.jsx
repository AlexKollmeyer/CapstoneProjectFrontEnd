const PurchaseArchiveItem = ({
  purchasedGameTitle,
  purchaseDate,
  purchaseAmount,
  savings,
  ogPrice,
}) => {
  return (
    <div>
      <div>
        <h3>Date of Purchase:{purchaseDate}</h3>
        <h3>{purchasedGameTitle}</h3>
      </div>
      <p>Sale Price: {purchaseAmount}</p>
      <p>Original Price: {ogPrice}</p>
      <p>Savings: {savings}</p>
    </div>
  );
};

export default PurchaseArchiveItem;

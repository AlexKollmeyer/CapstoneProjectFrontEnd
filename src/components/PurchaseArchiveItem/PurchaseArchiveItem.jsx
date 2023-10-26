const PurchaseArchiveItem = ({
  purchasedGameTitle,
  purchaseDate,
  purchaseAmount,
  savings,
  ogPrice,
}) => {
  const savingsRounded = savings.toFixed(2);
  const purchaseDateTimeTrimmed = purchaseDate.substring(0, 10);
  return (
    <div>
      <div>
        <h3>Date of Purchase:{purchaseDateTimeTrimmed}</h3>
        <h3>{purchasedGameTitle}</h3>
      </div>
      <p>Sale Price: ${purchaseAmount}</p>
      <p>Original Price: ${ogPrice}</p>
      <p>Savings: {savingsRounded}%</p>
    </div>
  );
};

export default PurchaseArchiveItem;

const BestCurrentDealDetails = ({ bestCurrentDealDetails }) => {
  let savings =
    (bestCurrentDealDetails.gameInfo.salePrice /
      bestCurrentDealDetails.gameInfo.retailPrice) *
    100;
  return (
    <div>
      <h2>Best Current Deal</h2>
      <p>Sale Price: ${bestCurrentDealDetails.gameInfo.salePrice}</p>
      <p>Retail Price: ${bestCurrentDealDetails.gameInfo.retailPrice}</p>
      <p>Savings : {savings.toFixed(2)}%</p>
    </div>
  );
};

export default BestCurrentDealDetails;

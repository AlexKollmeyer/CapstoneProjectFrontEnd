const BrowsingPageResult = ({
  title,
  thumbnail,
  storeid,
  salePrice,
  normalPrice,
  savings,
  dealRating,
  steamRatingPercent,
  steamRatingCount,
}) => {
  let steamRating = "";
  if (steamRatingPercent != 0) {
    steamRating = `${steamRatingPercent}% out of ${steamRatingCount} steam reviews`;
  } else {
    steamRating = "N/A";
  }
  return (
    <tr>
      <td>
        <h3>{title}</h3>
        <img src={thumbnail} alt="Game Thumbnail" />
      </td>
      <td>{storeid}</td>
      <td>
        <h3>Sale Price: {salePrice}</h3>
        <h3>Original Price: {normalPrice}</h3>
      </td>
      <td>{savings.substring(0, 5)}%</td>
      <td>{dealRating}</td>
      <td>{steamRating}</td>
    </tr>
  );
};

export default BrowsingPageResult;

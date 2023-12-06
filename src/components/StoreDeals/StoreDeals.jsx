const StoreDeals = ({ storeDeals }) => {
  const Deals = storeDeals.map((deal) => (
    <tr key={deal.id}>
      <td>{deal.title}</td>
      <td>{deal.salePrice}</td>
      <td>{deal.normalPrice}</td>
      <td>{deal.saving}</td>
      <td>
        <button>Wishlist</button>
      </td>
      <td>
        <button>Purchase</button>
      </td>
    </tr>
  ));
  return <tbody>{Deals}</tbody>;
};

export default StoreDeals;

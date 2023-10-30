const StoreDetails = ({ stores, storeID }) => {
  let store = stores[storeID];
  return (
    <div>
      <p>Store: {store.storeName}</p>
    </div>
  );
};

export default StoreDetails;

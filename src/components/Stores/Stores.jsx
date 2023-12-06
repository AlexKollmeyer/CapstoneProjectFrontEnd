import axios from "axios";
import Store from "../Store/Store";
const Stores = ({ stores, storesPageLoaded }) => {
  const fetchStoreDeals = async (storeId) => {
    try {
      let response = await axios.get(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${storeId}&pageSize=10`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.warn("error with StoreDeals get request", error);
    }
  };
  const Stores = stores.map((store) => (
    <Store
      key={store.storeID}
      storeId={store.storeID}
      fetchStoreDeals={fetchStoreDeals}
    />
  ));
  return <div>{storesPageLoaded ? Stores : <p>Loading</p>}</div>;
};

export default Stores;

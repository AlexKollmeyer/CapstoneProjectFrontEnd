import { useEffect, useState } from "react";
import StoreDeals from "../StoreDeals/StoreDeals";
const Store = ({ storeId, storeName, fetchStoreDeals }) => {
  const [storeDeals, setStoreDeals] = useState();
  const [storeDealsLoaded, setStoreDealsLoaded] = useState(false);

  useEffect(() => {
    const getStoreDeals = async () => {
      try {
        const response = await fetchStoreDeals(storeId);
        setStoreDeals(response);
        setStoreDealsLoaded(true);
      } catch (error) {
        console.error("Error fetching store deals:", error);
      }
    };

    getStoreDeals();
  }, [storeId, fetchStoreDeals]);
  return (
    <div>
      <h1>{storeName}</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Original Price</th>
            <th>Sale Price</th>
            <th>Savings</th>
          </tr>
        </thead>
        {storeDealsLoaded ? (
          <StoreDeals storeDeals={storeDeals} />
        ) : (
          <tbody>
            <tr>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Store;
